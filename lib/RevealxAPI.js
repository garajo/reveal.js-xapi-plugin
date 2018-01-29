'use strict'

const R = require('ramda')
const TinCan = require('tincanjs')
const fetch = window.fetch

const xapi_profiles = {
  cmi5: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/cmi5/cmi5.jsonld',
  scorm: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/scorm/scorm.jsonld',
  adl: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/adl/adl.jsonld',
}

const XAPI = ({lrs: lrs_config}) => {
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
          target: {
            id: 'http://adlnet.gov/expapi/activities/lesson',
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

export const attachListeners = (marks) => {
  const {first, last, ...rest} = marks
  const listenerFn = (event) => {
    const data_marks = Object.keys(event.currentSlide.dataset)
    console.log('data_marks', data_marks)
  }

  Reveal.addEventListener('slidechanged', listenerFn)
  return listenerFn
  
}

// fn that calculates how much of the pages have been loaded
export const allSlidesConsumed = R.all(e => e == 1)

const RevealxAPI = (reveal, config) => {
  const slidesmap = reveal.getSlides()
  const xapi = XAPI(config)
  const listenerFn = attachListeners(config)  

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


export default async (reveal, config) => {  
  if (config.xapi_profile){
    const profile_data = await retrieveProfileData(config.xapi_profile.url)
    console.log('<<',profile_data)
  }
  // else {
  //   const profile_data = await retrieveProfileData(xapi_profiles, 'cmi5')
  //   console.log(profile_data)
  // }
  
  return RevealxAPI(reveal, config)
}
