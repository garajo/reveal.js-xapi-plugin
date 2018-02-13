'use strict'

import getProfiles from './profiledata'
import R from 'ramda'
import validate from './validate'
import { filterTerms } from './concepts'
import Debugger from './debugger'
import pickFnCall from './pickFnCall'
const TinCan = require('tincanjs')

const fetch = window.fetch
const debug = new Debugger()

// TinCan.enableDebug();

const XAPI = (tincan) => {
  return Object.freeze({
    saveStatements: (statements, saveStatementCallback) => {
      if (!Array.isArray(statements)) {
        throw new Error('expecting array')
      }

      tincan.sendStatements(statements, (error, xhr) => {
        if (error.err)
          throw new Error(err)
        console.log('xhr', xhr)
        console.log('saveStatementCallback', saveStatementCallback)
      })
    }
  })
}

const attachListeners = (config, submitStatements) => {
  const listenerFn = (event) => {
    const {xapi} = (event.currentSlide || event.fragment).dataset
    submitStatements.call(null, xapi)
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

const submitStatements = ({fn_list, xapi, profile_data, langISO}) => (arg) => {
  if (arg) {
    console.log('------------ submitStatements -----------------')
    console.log('fn_list', fn_list)
    console.log('xapi', xapi)
    if (typeof arg === 'string' && arg.split('.').length === 2) {
      const [verb, activity] = arg.split('.')

      if (verb && activity) {
        const possible_terms = filterTerms(langISO, [verb, activity], profile_data)
        console.log('possible_terms', possible_terms)
        // console.log('profile_data', profile_data)

        // console.log('debug', debug)
      }

/*

      const temp_statement = {
        verb: {
          id: "http://adlnet.gov/expapi/verbs/initialized",
          display: {
            "en-US": "initialized"
          }
        },
        object: {
          id: 'http://adlnet.gov/expapi/activities/lesson',
          definition: {
            type: "http://id.tincanapi.com/activitytype/lms",
            name: {
              "en-US": "Slide lesson"
            },
            description: {
              "en-US": "A tool for launching the Tin Can prototypes. Simulates the role of an LMS in launching experiences."
            }
          }
        }
      }
      console.log('temp_statement', temp_statement)

*/

      // xapi.saveStatements([temp_statement], (err, xhr) => {
      //   console.log('saveStatementCallback')
      //   if (error.err)
      //     throw new Error(err)
      //     console.log('xhr', xhr)
      // })

    } else {

      const customValue = pickFnCall(fn_list, arg)
      console.log('customValue', customValue, ', need to validate')

    }
  }
}

window.xapi = {}

const wrapped_custom_fns = (fns) => {
  console.log('fns.to_wrap', fns)
  return fns
}

const RevealxAPI = ({ reveal, tincan, statements, profile_data, langISO }) => {
  const slidesmap = reveal.getSlides()
  const xapi = XAPI(tincan)
  // const concepts = getConcepts(profile_data)

  const {
    first,
    last,
    ...rest
  } = statements

  Object.assign(window.xapi, wrapped_custom_fns(rest))

  const listenerFn = attachListeners({
    first,
    last
  }, submitStatements({fn_list: rest, xapi, profile_data, langISO}))

  return { slidesmap }
}

const setupTinCan = (config) => {
  /* Set up TinCanJS */
  console.log('setupTinCan.config', config)
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
  };

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

  // tincan.sendStatement(init_statement, (error, xhr) => {
  //   if (error.err) throw new Error(err)
  //   console.log('xhr', xhr)
  // });

  return {tincan, registration: config.registration}

}

export default async (reveal, {
  debug,
  dev_mode,
  langISO,
  lrs,
  profiles: configProfiles,
  statement_helper,
  statements,
}) => {

  const { tincan } = setupTinCan(lrs)
  const profile_data = await getProfiles(configProfiles)

  console.log('------ start config --------------')

  console.log('langISO', langISO)
  console.log('profile_data', profile_data)

  console.log('------ end config --------------')

  /*
    if (statement_helper === true) {
      console.log('statement_helper', statement_helper)
    }

    <aside class="xapi_shell" style="z-index: 1000; position: absolute; top: 3rem; left: 3rem;">
      <textarea>test test</textarea>
    </aside>
  */

  return RevealxAPI({reveal, tincan, statements: statements, profile_data, langISO})
}
