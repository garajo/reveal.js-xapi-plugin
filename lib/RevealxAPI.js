'use strict'

import {filterTerms, dotVerbActivity} from './concepts'
import Debugger, {trace} from './Debugger'
import getProfiles from './profiledata'
import pickFnCall from './pickFnCall'
import R from 'ramda'
import Statement from './Statement'
import statementHelper from './statementHelper'
import css from '../css/revealxapi.css'

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

const sendExperience = ({
  verbs,
  activities
}, _xapi, cb) => {
  if (verbs && activities && verbs.length === 1 && activities.length === 1) {
    const statement = Statement.fromVerbActivityProfile(verbs[0], activities[0])

    console.log('send statement:', statement)
    // _xapi.saveStatements([statement], cb)
  } else {
    console.log(verbs, activities)
    throw new Error('did not match profile verb or activity')
  }
}

const staticExperience = ({fn_list, _xapi, profile_data, langISO}) => (arg) => {
  if (arg) {
    let experience = {}
    // for dot_statement data
    if (typeof arg === 'string' && arg.split('.').length === 2) {
      experience = dotVerbActivity(arg, langISO, profile_data)
    } else {
      // we test for statement functions to call
      const fn_result = pickFnCall(fn_list, arg)
      console.log('fn_result', fn_result)
      if (fn_result.debug)
        console.log('fn_result', fn_result)
      else
        experience = dotVerbActivity(fn_result, langISO, profile_data)
    }

    console.log('experience', experience)
    if (!R.isEmpty(experience))
      sendExperience(experience, _xapi, (xhr) => {
        console.log('statment_saved', Statement.fromXHR(xhr))
      })
  }
}

const wrapped_custom_fns = (fns) => {
  return Object.freeze(R.mapObjIndexed((fn, key, obj) => (dot_statement) => {
    const user_val = fn.call(undefined, dot_statement).split('.')
    console.log('submitted dot_statement from JS', user_val)
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
  window.xapi = wrapped_custom_fns(rest)

  const listenerFn = attachListeners({
    first,
    last
  }, staticExperience({fn_list: rest, _xapi, profile_data, langISO}))

  return {slidesmap}
}

const setupTinCan = (config) => {
  /* Set up TinCanJS */
  // console.log('setupTinCan.config', config)
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
    }
  }
  /*
  tincan.sendStatement(init_statement, (error, xhr) => {
    if (error.err)
      throw new Error(err)
    console.log('xhr', xhr)
  })
*/
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

  console.log('------ start config --------------')
  console.log('dev_mode', dev_mode)
  console.log('langISO', langISO)
  console.log('profile_data', profile_data)
  console.log('------ end config --------------')

  /**
   * statementHelper is as node, and expects only one-time input data for the time being
   */
  if (dev_mode) {
    const currentDiv = document.getElementsByClassName("reveal")

    const statement_helper_node = statementHelper(currentDiv[0], profile_data)
    console.log('statement_helper_node', statement_helper_node)
    // console.log('statementHelper', statementHelper)
  }

  return RevealxAPI({langISO, profile_data, reveal, statements: statements, tincan})
}
