'use strict'

import {dotVerbActivity} from './concepts'
import getProfiles from './profiledata'
import pickFnCall from './pickFnCall'
import Statement from './Statement'
import statementHelper from './statementHelper'
import css from 'css/revealxapi.css'
import StatementLog, {mapElementXapi} from './StatementLog'

import UIConsole, {trace} from './UIConsole'

import R from 'ramda'
const defer = require('lodash.defer');
const TinCan = require('tincanjs')

let statementLog

const private_state = () => {}

const state = Object.seal({
  privateData: new WeakMap([
    [private_state, {
      dev_mode: true,
      send_enabled: false,
      statement_helper: true,
      debugger: true,
      langISO: 'en',
    }]
  ]),
  get current () {
    return this.privateData.get(private_state)
  },
  set update (newdata) {
    const setkeys = R.keys(newdata)
    const currkeys = R.keys(this.current)
    if (R.intersection(setkeys, currkeys).length !== setkeys.length) {
      throw new Error(`Not expected ${R.difference(setkeys, currkeys)}`)
    }

    this.privateData.set(private_state, {
      ...this.current,
      ...newdata,
    })

  },
  set devMode(val) {
    this.update = {
      dev_mode: Boolean(val),
      send_enabled: !Boolean(val),
      statement_helper: Boolean(val),
      debugger: Boolean(val),
    }
  },
  get devMode() {
    return this.current.dev_mode
  },
  set langISO(val) {
    this.update = {
      langISO: val,
    }
  },
  get langISO() {
    return this.current.langISO
  },
  get statementHelper() {
    return this.current.statement_helper
  },
  get sendEnabled() {
    return this.current.send_enabled
  },
  get debugger() {
    return this.current.debugger
  }
})



// TinCan.enableDebug()

const XAPI = (tincan) => {
  return {
    saveStatements: (statements, saveStatementCallback) => {
      if (!Array.isArray(statements)) {
        throw new Error('expecting array')
      }

      statements.map(ea => UIConsole.log(`to send: ${ea.verb.display[state.langISO]} ${ea.object.definition.name[state.langISO]}`))

      if (state.sendEnabled) {
        tincan.sendStatements(statements, (error, xhr) => {
          if (R.any(ea => ea.err)(error)) {
            throw new Error(R.compose(R.prop('err'), R.find(ea => ea.err))(error))
          }
          else {
            saveStatementCallback.call(undefined, xhr)
          }
        })
      }
    }
  }
}

const attachListeners = (selectAscertain) => {
  const listenerFn = (event) => {
    const {xapi: _xapi} = (event.currentSlide || event.fragment).dataset
    selectAscertain.call(undefined, _xapi, (event.currentSlide || event.fragment))
  }
  const evt_keys = ['ready', 'slidechanged', 'fragmentshown']
  Reveal.addEventListener(evt_keys[1], listenerFn)
  Reveal.addEventListener(evt_keys[2], listenerFn)
  if (!Reveal.isReady()) {
    Reveal.addEventListener(evt_keys[0], listenerFn)
  } else {
    listenerFn({currentSlide: Reveal.getCurrentSlide()})
  }
  return new Map([
    [evt_keys, listenerFn]
  ])
}


const wrapped_custom_fns = (fns, _xapi, profile_data) => {
  fns[Symbol.iterator] = function* () {
    yield * Object.values(this).map(ea => [ea, 0])
  }

  const fn_state = new WeakMap(fns)

  return Object.freeze(R.mapObjIndexed((fn, key, obj) => (event, option) => {
    // prevent fns with 'once' param to run more than once
    if (option === 'once' && fn_state.get(fn) === 1) {
      return
    }

    const user_val = fn.call(undefined, event)
    const splitstr = checkStringSplit(user_val)

    if (splitstr) {
      fn_state.set(fn, 1)
      const [verb, activity] = splitstr
      const experiences = [dotVerbActivity([verb, activity], state.langISO, profile_data)]
      sendExperiences(_xapi, experiences)
    }

    return user_val
  })(fns))
}

const checkStringSplit = (str) => {
  if (!str.includes('.')) {
    UIConsole.log(`Expected dot notation in string "${str}"`)
    return
  }

  const verb_activity_str = str.split('.')

  if (verb_activity_str.length !== 2) {
    UIConsole.log(`Expected ${str} as verb.activity`)
    return
  }

  return verb_activity_str
}

const selectAscertain = (_xapi, {fn_list, profile_data}) => (arg, element) => {
  if (arg && statementLog.checkAvailable(element, arg)) {
    let verb, activity,
    experiences = []

    // for dot_statement data
    if (typeof arg === 'string' && arg.includes('.')) {
      const splitstr = checkStringSplit(arg)
      if(splitstr) {
        [verb, activity] = splitstr
        experiences = [dotVerbActivity([verb, activity], state.langISO, profile_data)]
      }
    }
    else {
      // we test for statement functions to call
      const dot_fn_result = pickFnCall(fn_list, arg)
      if (dot_fn_result.debug) {
        UIConsole.log(dot_fn_result.message)
        return
      }

      if (typeof dot_fn_result === 'string') {
        const splitstr = checkStringSplit(dot_fn_result)
        if(splitstr) {
          [verb, activity] = splitstr
          experiences = [dotVerbActivity([verb, activity], state.langISO, profile_data)]
        }
      }
      else  if (Array.isArray(dot_fn_result)) {
        experiences = dot_fn_result.map(ea => {
          const splitstr = checkStringSplit(ea)
          if(splitstr) {
            [verb, activity] = splitstr
            return dotVerbActivity([verb, activity], state.langISO, profile_data)
          }
        })
      }
    }

    sendExperiences(_xapi, experiences)

  }
}

const sendExperiences = (_xapi, experiences) => {
  const statements = experiences.map(ea => {
    const verb_obj = ea[0]
    const activity_obj = ea[1]
    const [verb_lemma] = R.keys(verb_obj)
    const [activity_lemma] = R.keys(activity_obj)

    const [found_verb] = R.values(verb_obj)
    const [found_activity] = R.values(activity_obj)

    // we take the first, b/c a verb lemma could have multiple entries
    // this could be handled more elegantly, such as letting the designer
    // choose between which statement
    const [first_xapi_verb, ...rest_xapi_verb] = found_verb
    const [first_xapi_activity, ...rest_xapi_activity] = found_activity


    if (rest_xapi_verb.length > 0) {
      UIConsole.log(`There are multiple records for "${verb_lemma}"`, JSON.stringify(R.pluck('id', found_verb)))
    }

    if (rest_xapi_activity.length > 0) {
      UIConsole.log(`There are multiple records for "${activity_lemma}"`, JSON.stringify(R.pluck('id', found_activity)))
    }

    if (first_xapi_verb && first_xapi_activity) {
      return Statement.fromVerbActivityProfile(first_xapi_verb, first_xapi_activity)
    }
    else {

      // Log to ui
      if (!first_xapi_verb) {
        UIConsole.log(`Did not find match for "${verb_lemma}" in ${verb_lemma}.${activity_lemma}`)
      }

      if (!first_xapi_activity) {
        UIConsole.log(`Did not find match for "${activity_lemma}" in ${verb_lemma}.${activity_lemma}`)
      }

      return
    }
  })

  _xapi.saveStatements(R.filter(R.identity)(statements), (xhr) => {
    if (xhr.length > 0) {
      xhr.map(ea => (
        UIConsole.log(`confirmed received: ${ea.verb.toString()}.${ea.target.toString()}`)
      ))
    }
  })
}

const RevealxAPI = ({profile_data, statements, tincan}) => {
  const _xapi = XAPI(tincan)

  // TODO: is there a functional approach?
  // provide global handle
  window.xapi = wrapped_custom_fns(statements, _xapi, profile_data)

  const listenerFn = attachListeners(selectAscertain(_xapi, {fn_list: statements, profile_data}))

}

const setupTinCan = (config) => {
  /* Set up TinCanJS */
  config.registration = TinCan.Utils.getUUID()
  var tincan = new TinCan({
    registration: config.registration,
    actor: {
      name: config.actor.name,
      mbox: config.actor.mbox
    },
    activity: config.activity,
    recordStores: [
      {
        endpoint: config.endpoint,
        username: config.authUser,
        password: config.authPassword,
        allowFail: false
      }
    ]
  })

  return {tincan, registration: config.registration}
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const getActorName = async (shell, actor) => {
  const promise = new Promise(function(resolve, reject) {
    const parent = document.createElement('div')
    parent.setAttribute('class', 'bottom_left')
    parent.style.zIndex = 3
    shell.append(parent)

    const mbox_input = document.createElement('input')
    mbox_input.setAttribute('type', 'text')
    mbox_input.setAttribute('placeholder', actor.mbox.replace(/^mailto:/, ''))
    parent.append(mbox_input)

    const name_input = document.createElement('input')
    name_input.setAttribute('placeholder', actor.name)
    name_input.setAttribute('type', 'text')
    parent.append(name_input)

    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    parent.append(submit)

    submit.addEventListener('click', (e) => {
      resolve({
        mbox: `mailto:${validateEmail(mbox_input.value) ? mbox_input.value : actor.mbox}`,
        name: name_input.value || actor.name,
      })
      shell.removeChild(parent)
    })
  })
  return promise
}

const actorNameUI = async (shell, actor) => {
  const user_actor = await getActorName(shell, actor)
  UIConsole.log(`actor mbox set to ${user_actor.mbox}`)
  UIConsole.log(`actor name set to ${user_actor.name}`)
  return user_actor
}

export default async (reveal, {
  dev_mode = false,
  getActorOnInit,
  lang_ISO,
  lrs,
  profiles: configProfiles,
  statements
}) => {
  // connect function to component
  const [parent] = document.getElementsByClassName("reveal")
  const shell = document.createElement("div")
  let config = lrs
  parent.appendChild(shell)

  config.actor = getActorOnInit ? await actorNameUI(shell, config.actor) : config.actor

  state.devMode = dev_mode
  state.langISO = lang_ISO

  const {tincan} = setupTinCan(config)
  const profile_data = await getProfiles(configProfiles)

  const allslides = reveal.getSlides()

  const xapi_map = mapElementXapi(allslides)

  statementLog = StatementLog(xapi_map)

  if (state.debugger) {
    const shelled_component = UIConsole.init(shell)
  }

  /**
   * statementHelper is as node, and expects only one-time input data for the time being
   */

  if (state.statementHelper) {
    const currentDiv = document.getElementsByClassName("reveal")
    const statement_helper_node = statementHelper(currentDiv[0], profile_data, state.langISO)
  }

  if (state.devMode) {
    // Component to modify current states
  }

  return RevealxAPI({profile_data, statements, tincan})
}
