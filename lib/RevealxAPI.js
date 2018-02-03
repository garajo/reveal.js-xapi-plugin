'use strict'

const R = require('ramda')
const TinCan = require('tincanjs')
const fetch = window.fetch

const xapi_profiles = {
  cmi5: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/cmi5/cmi5.jsonld',
  scorm: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/scorm/scorm.jsonld',
  adl: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/adl/adl.jsonld',
  tincan: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/tincan/tincan.jsonld',
  "activity-streams": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/activity-streams/activity-streams.jsonld',
  seriousgames: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/seriousgames/seriousgames.jsonld',
}

const XAPI = (lrs_config) => {
  const lrs = new TinCan.LRS(lrs_config)

  return Object.freeze({
    saveStatements: (statements, saveStatementCallback) => {
      if (!Array.isArray(statements)) { throw new Error('expecting array') }
      lrs.saveStatements(
        statements,
        {
          callback: function (err, xhr) {
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
      )
    },

    completedStatement: () => {
      const completedAction = R.merge(
        {
          verb: {
            id: 'http://adlnet.gov/expapi/verbs/completed',
          },
          target: {id: 'http://adlnet.gov/expapi/activities/lesson',
            definition: {
              name: {
                'en-US': 'A presentation'
              },
              description: {
                'en-US': 'An xAPI enable Reveal presentation'
              }
            }
          },
        }
        , config.statement.completed
      )
      const completedStatement = R.merge(completedAction, config.statement)
      return new TinCan.Statement(completedStatement)
    },
  })
}

const prepareStatement = () => {

}

const sendStatement = () => () => {}

const attachListeners = (config, submitStatements) => {
  const listenerFn = (event) => {
    const { xapi } = (event.currentSlide || event.fragment).dataset
    submitStatements.call(null, xapi)

  }
  const evt_keys = ['ready','slidechanged', 'fragmentshown']
  Reveal.addEventListener(evt_keys[0], listenerFn)
  Reveal.addEventListener(evt_keys[1], listenerFn)
  Reveal.addEventListener(evt_keys[2], listenerFn)
  return new Map([[evt_keys, listenerFn]])
}

const getFnByName = (fn_list, name) => {
  const fn = fn_list[name]
  if (fn && typeof fn === 'function') return fn.call(null, {})
}

const submitStatements = ({ fn_list, sender }) => (arg) => {
  console.log('arg', arg)
  if(arg) {
    if (typeof arg === 'string' && arg.split('.').length ===2) {
      const verb_activity = arg.split('.')
      console.log(verb_activity)
    } else {
      const customValue = getFnByName(fn_list, arg)
      console.log('customValue', customValue, ', need to validate')
    }
  }
}

// fn that calculates how much of the pages have been loaded
const allSlidesConsumed = R.all(e => e == 1)

const RevealxAPI = (reveal, { lrs, statements }) => {
  const slidesmap = reveal.getSlides()
  const xapi = XAPI(lrs)
  const sender = sendStatement('xapi.endpoint') // curried function to take an endpoint as configuration


  const {first, last, ...rest} = statements
  const listenerFn = attachListeners({first, last}, submitStatements({ fn_list: rest, sender }))

  return {
    slidesmap,
    xapi,
  }
}

const retrieveProfileData = async (url) => {
  return fetch(url)
    .then(function (response) {
      return response.text()
    })
    .then(function (body) {
      // TODO: need to test that the data returned is JSON and/or JSONLD
      return Promise.resolve(JSON.parse(body))
    })
}

const getProfiles = async (keys) => await Promise.all(keys.map((ea) => retrieveProfileData(xapi_profiles[ea])))

export default async (reveal, {profile, debug, statement_helper, ...config}) => {
  if (profile){
    // var profileIterable = ['tincan', 'adl', 'scorm', 'cmi5', 'seriousgames', 'activity-streams']
    var profileIterable = ['cmi5']

    const profile_data = await getProfiles(profileIterable)

    console.log('config', config)
    console.log('profile_data', profile_data)
    console.log('debug', debug)

    if (statement_helper === true) {
      console.log('statement_helper', statement_helper)
    }


    /*
    <aside class="xapi_shell" style="z-index: 1000; position: absolute; top: 3rem; left: 3rem;">
      <textarea>test test</textarea>
    </aside>
    */


  }

  return RevealxAPI(reveal, config)
}
