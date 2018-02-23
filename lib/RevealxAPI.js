'use strict'

import {dotVerbActivity} from './concepts'
import getProfiles from './profiledata'
import pickFnCall from './pickFnCall'
import Statement from './Statement'
import statementHelper from './statementHelper'
import css from 'css/revealxapi.css'

import UIConsole, {trace} from './UIConsole'

import R from 'ramda'
const TinCan = require('tincanjs')

const state = {
  lang_ISO: '',
  send_enabled: false,
  helpers: {
    visible: true,
  },
  get devMode() {
    return this.send_enabled
  },
  set devMode(val) {
    this.send_enabled = Boolean(val)
    this.helpers.visible = Boolean(val)
  },
  get langISO() {
    return this.lang_ISO
  },
  set langISO(val) {
    this.lang_ISO = val
  },
}



// TinCan.enableDebug()

const XAPI = (tincan) => {
  return {
    saveStatements: (statements, saveStatementCallback) => {
      if (!Array.isArray(statements)) {
        throw new Error('expecting array')
      }

      if (!state.send_enabled) {
        tincan.sendStatements(statements, (error, xhr) => {
          if (R.any(ea => ea.err)(error)) {
            throw new Error(R.compose(R.prop('err'), R.find(ea => ea.err))(error))
          }
          else {
            saveStatementCallback.call(undefined, xhr)
          }
        })
      }
      else {
        statements.map(ea => UIConsole.log(`Send: ${ea.verb.display[state.langISO]} ${ea.object.definition.name[state.langISO]}`))
      }
    }
  }
}

const attachListeners = (config, selectAscertain) => {
  const listenerFn = (event) => {
    const {xapi: _xapi} = (event.currentSlide || event.fragment).dataset
    selectAscertain.call(undefined, _xapi)
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

const wrapped_custom_fns = (fns, _xapi) => {
  return Object.freeze(R.mapObjIndexed((fn, key, obj) => (dot_statement) => {
    const user_val = fn.call(undefined, dot_statement).split('.')
    console.log('submitted dot_statement from JS', user_val)
    console.log('_xapi', _xapi)


    return user_val
  })(fns))
}

const checkStringSplit = (str) => {
  const verb_activity_str = str.split('.')
  if (verb_activity_str.length !== 2) {
    UIConsole.log(`Expected ${str} as verb.activity`)
    return
  }
  return verb_activity_str
}

const selectAscertain = (_xapi, {fn_list, profile_data}) => (arg) => {
  if (arg) {
    let verb, activity,
    experiences = []

    // for dot_statement data
    if (typeof arg === 'string' && arg.includes('.')) {
      [verb, activity] = checkStringSplit(arg)
      experiences = [dotVerbActivity([verb, activity], state.langISO, profile_data)]
    }
    else {
      // we test for statement functions to call
      const dot_fn_result = pickFnCall(fn_list, arg)
      if (dot_fn_result.debug) {
        UIConsole.log(dot_fn_result.message)
        return
      }

      if (typeof dot_fn_result === 'string') {
        [verb, activity] = checkStringSplit(dot_fn_result)
        experiences = [dotVerbActivity([verb, activity], state.langISO, profile_data)]
      }
      else  if (Array.isArray(dot_fn_result)) {
        experiences = dot_fn_result.map(ea => {
          [verb, activity] = checkStringSplit(ea)
          return dotVerbActivity([verb, activity], state.langISO, profile_data)
        })
      }
    }

    console.log('experiences', experiences)

    sendExperiences(_xapi, experiences, (xhr) => {
      console.log('sendExperiences.confirm: ',xhr)
      // console.log('Statement.fromXHR(xhr): ', Statement.fromXHR(xhr))
    })
  }
}

const sendExperiences = (_xapi, experiences, cb) => {
  const statements = experiences.map(ea => {
    const verb_obj = ea[0]
    const activity_obj = ea[1]

    const matched_verb = R.values(verb_obj)[0]
    const matched_activities = R.values(activity_obj)[0]

    // we take the first, b/c a verb lemma could have multiple entries
    // this could be handled more elegantly, such as letting the designer
    // choose between which statement
    const first_verb = matched_verb[0]
    const first_activity = matched_activities[0]

    return Statement.fromVerbActivityProfile(first_verb, first_activity)
  })

    _xapi.saveStatements(statements, cb)
}

const RevealxAPI = ({profile_data, statements, tincan}) => {
  const _xapi = XAPI(tincan)

  const {
    first,
    last,
    ...rest
  } = statements

  // TODO: is there a functional approach?
  // provide global handle
  window.xapi = wrapped_custom_fns(rest, _xapi)

  const listenerFn = attachListeners({
    first,
    last
  }, selectAscertain(_xapi, {fn_list: rest, profile_data}))

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

export default async (reveal, {
  dev_mode,
  lang_ISO,
  lrs,
  profiles: configProfiles,
  statements
}) => {

  state.devMode = dev_mode
  state.langISO = lang_ISO

  const {tincan} = setupTinCan(lrs)
  const profile_data = await getProfiles(configProfiles)

  // connect function to component
  const parent = document.getElementsByClassName("reveal")[0]
  const shell = document.createElement("div")
  parent.appendChild(shell)
  const shelled_component = UIConsole.init(shell)

  /**
   * statementHelper is as node, and expects only one-time input data for the time being
   */

  if (state.helpers.visible) {
    const currentDiv = document.getElementsByClassName("reveal")
    const statement_helper_node = statementHelper(currentDiv[0], profile_data, state.langISO)
  }

  return RevealxAPI({profile_data, statements, tincan})
}
