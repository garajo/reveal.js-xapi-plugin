'use strict'

import {filterTerms, dotVerbActivity} from './concepts'
import getProfiles from './profiledata'
import pickFnCall from './pickFnCall'
import Statement from './Statement'
import statementHelper from './statementHelper'
import css from 'css/revealxapi.css'

import UIConsole, {trace} from './UIConsole'

import R from 'ramda'
const TinCan = require('tincanjs')

const state = {
  sendStatements: false,
}

// TinCan.enableDebug()

const XAPI = (tincan) => {
  return {
    saveStatements: (statements, saveStatementCallback) => {
      if (!Array.isArray(statements)) {
        throw new Error('expecting array')
      }

      tincan.sendStatements(statements, (error, xhr) => {
        if (R.any(ea => ea.err)(error))
          throw new Error(R.compose(R.prop('err'), R.find(ea => ea.err))(error))
        else
          saveStatementCallback.call(undefined, xhr)
      })
    }
  }
}

const attachListeners = (config, staticExperience) => {
  const listenerFn = (event) => {
    const {xapi: _xapi} = (event.currentSlide || event.fragment).dataset
    staticExperience.call(undefined, _xapi)
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

const sendExperience = (_xapi, {
  verbs,
  activities
}, cb) => {

  if (verbs && verbs.length === 0) {
    UIConsole.log(`Verb: '${verb}' was not found`)
  }
  if (activities && activities.length === 0) {
    UIConsole.log(`Activity: '${activity}' was not found`)
  }

  if (
    verbs
    && activities
    && verbs.length === 1
    && activities.length === 1
  ) {
    const statement = Statement.fromVerbActivityProfile(verbs[0], activities[0])
    _xapi.saveStatements([statement], cb)
  }

}

const staticExperience = (_xapi, {fn_list, profile_data, langISO}) => (arg) => {
  console.log('arg', arg)
  if (arg) {
    let verb, activity, experience = {}
    // for dot_statement data
    if (typeof arg === 'string' && arg.includes('.')) {
      [verb, activity] = arg.split('.')
    } else {
      // we test for statement functions to call
      const dot_fn_result = pickFnCall(fn_list, arg)
      if (dot_fn_result.debug) {
        UIConsole.log(dot_fn_result.message)
      }else {
        [verb, activity] = dot_fn_result.split('.')
      }
    }

    experience = dotVerbActivity([verb, activity], langISO, profile_data)

    console.log('experience', experience)

    sendExperience(_xapi, experience, (xhr) => {
      console.log('validated send: ')
      console.log('xhr: ',xhr)
      // console.log('Statement.fromXHR(xhr): ', Statement.fromXHR(xhr))
    })
  }
}

const wrapped_custom_fns = (fns, _xapi) => {
  return Object.freeze(R.mapObjIndexed((fn, key, obj) => (dot_statement) => {
    const user_val = fn.call(undefined, dot_statement).split('.')
    console.log('submitted dot_statement from JS', user_val)
    console.log('_xapi', _xapi)


    return user_val
  })(fns))
}

const RevealxAPI = ({langISO, profile_data, reveal, statements, tincan}) => {
  const slidesmap = reveal.getSlides()
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
  }, staticExperience(_xapi, {fn_list: rest, profile_data, langISO}))

  return {slidesmap}
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
  var InitialSlidePlugin = {}

  InitialSlidePlugin.context = {
    contextActivities: {
      grouping: [
        {
          id: "http://id.tincanapi.com/activity/tincan-prototypes"
        }
      ]
    }
  }

  const init_statement = {
    verb: {
      id: "http://adlnet.gov/expapi/verbs/initialized",
      display: {
        "en-US": "initialized"
      }
    },
    context: {
      registration: config.registration,
      contextActivities: InitialSlidePlugin.context.contextActivities
    },
    target: {
      id: "http://id.tincanapi.com/activitytype/slide",
    }
  }

  console.log('init_statement', init_statement)

  tincan.sendStatement(init_statement, (error, xhr) => {
    if (error.err)
      throw new Error(err)
    console.log('xhr', xhr)
  })
  return {tincan, registration: config.registration}
}

export default async (reveal, {
  dev_mode,
  langISO,
  lrs,
  profiles: configProfiles,
  statements
}) => {

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
  if (dev_mode) {
    const currentDiv = document.getElementsByClassName("reveal")

    const statement_helper_node = statementHelper(currentDiv[0], profile_data, langISO)
    // console.log('statement_helper_node', statement_helper_node)
  }

  return RevealxAPI({langISO, profile_data, reveal, statements: statements, tincan})
}
