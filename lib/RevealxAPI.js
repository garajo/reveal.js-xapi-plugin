'use strict'

const R = require('ramda')
const TinCan = require('tincanjs')

const XAPI = ({config}) => {  
  const lrs = new TinCan.LRS(config.lrs)

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
    console.log(event.currentSlide.dataset)
    console.log(Object.keys(event.currentSlide.dataset))

    

  }

  Reveal.addEventListener('slidechanged', listenerFn)
  return listenerFn
  
}

// fn that calculates how much of the pages have been loaded
export const allSlidesConsumed = R.all(e => e == 1)

const RevealxAPI = (reveal, config) => {



  const slidesmap = reveal.getSlides()

  const xapi = XAPI(config)
  const { marks={} } = config

  // console.log('slidesmap', slidesmap)  
  // console.log('xapi', xapi)
  // console.log('marks', marks)
  
  const listenerFn = attachListeners(marks)

  

  return {
    slidesmap,
    xapi,
  }
}

export default (reveal, config) => RevealxAPI(reveal, config)
