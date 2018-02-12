'use strict'

import getProfiles from './profileData'
import R from 'ramda'
import validateDataset from './validateDataset'

const TinCan = require('tincanjs')
const fetch = window.fetch

// TinCan.enableDebug();

const xapi_profiles = {
  acrossx: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/acrossx/acrossx.jsonld',
  cmi5: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/cmi5/cmi5.jsonld',
  scorm: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/scorm/scorm.jsonld',
  adl: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/adl/adl.jsonld',
  tincan: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/tincan/tincan.jsonld',
  "activity-streams": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/activity-streams/activity-streams.jsonld',
  seriousgames: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/seriousgames/seriousgames.jsonld'
}

const XAPI = (tincan) => {
  return Object.freeze({
    saveStatements: (statements, saveStatementCallback) => {
      if (!Array.isArray(statements)) {
        throw new Error('expecting array')
      }

      console.log('tincan', tincan)
      tincan.sendStatements(statements, (error, xhr) => {
        if (error.err)
          throw new Error(err)
        console.log('xhr', xhr)
        console.log('saveStatementCallback', saveStatementCallback)
      })
      /*
        {
        callback: function(err, xhr) {
          if (err !== null) {
            if (xhr !== null) {
              saveStatementCallback("Failed to save statement: " + xhr.responseText + " (" + xhr.status + ")")
              // TODO: do something with error, didn't save statement
              return
            }

            saveStatementCallback("Failed to save statement: ", err)
            // TODO: do something with error, didn't save statement
            return
          }

          saveStatementCallback("Statement saved")
          // TODO: do something with success (possibly ignore)
        }
      }
*/

    }
  })
}

const prepareStatement = () => {}

const sendStatement = () => () => {}

const attachListeners = (config, submitStatements) => {
  const listenerFn = (event) => {
    console.log('event', event)
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

const getFnByName = (fn_list, name) => {
  const fn = fn_list[name]
  if (fn && typeof fn === 'function')
    return fn.call(null, {})
}

const submitStatements = ({fn_list, xapi, concepts}) => (arg) => {
  if (arg) {
    console.log('------------ submitStatements -----------------')
    console.log('fn_list', fn_list)
    console.log('xapi', xapi)
    console.log('concepts', concepts)
    if (typeof arg === 'string' && arg.split('.').length === 2) {
      const verb_activity = arg.split('.')
      console.log(verb_activity)
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

      // xapi.saveStatements([temp_statement], (err, xhr) => {
      //   console.log('saveStatementCallback')
      //   if (error.err)
      //     throw new Error(err)
      //     console.log('xhr', xhr)
      // })

    } else {

      const customValue = getFnByName(fn_list, arg)
      console.log('customValue', customValue, ', need to validate')

    }
  }
}

const getConcepts = (profile_data) => {
  return R.zipObj(R.map(ea => ea.id)(profile_data), R.map(ea => ea.concepts)(profile_data))
}

window.xapi = {}

const RevealxAPI = ({ reveal, tincan, statements, profile_data }) => {
  const slidesmap = reveal.getSlides()
  const xapi = XAPI(tincan)
  const concepts = getConcepts(profile_data)

  const {
    first,
    last,
    ...rest
  } = statements

  const listenerFn = attachListeners({
    first,
    last
  }, submitStatements({fn_list: Object.assign(window.xapi, rest), xapi, concepts}))

  return {slidesmap, xapi}
}

const retrieveProfiles = async (configProfiles) => {
  const profiles = configProfiles || ['cmi5']
  if (profiles.constructor === Object) {
    return getProfiles(R.keys(profiles), profiles)
  } else if (profiles.constructor === Array) {
    return getProfiles(profiles, xapi_profiles)
  }
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
  profiles: configProfiles,
  debug,
  statement_helper,
  lrs,
  ...config
}) => {

  const { tincan } = setupTinCan(lrs)
  const profile_data = await retrieveProfiles(configProfiles)

  console.log('profile_data', profile_data)

  /*
  console.log(profile_data.map(ea => ea.prefLabel.en))
  console.log(R.pipe(R.map(ea => ea.concepts), R.flatten, R.map(ea => ea.id), R.flatten, R.sortBy(R.toLower),
   R.join('\n'))(profile_data))

*/

  /*
    if (statement_helper === true) {
      console.log('statement_helper', statement_helper)
    }

    <aside class="xapi_shell" style="z-index: 1000; position: absolute; top: 3rem; left: 3rem;">
      <textarea>test test</textarea>
    </aside>
  */

  return RevealxAPI({reveal, tincan, statements: config.statements, profile_data})
}
