'use strict'

const R = require('ramda')
const TinCan = require('tincanjs')

const XAPI = (config) => {
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

const userDialog = (...args) => console.log(...args)

/*
  xapi
*/
let xapi

export const composeEndMessage = (stmnt) => `Hooray, you\'re done! ${JSON.stringify(stmnt, null, 4)}`

export const saveEndOnce = R.once((endstmt) => {
  xapi.saveStatements([endstmt], userDialog)
  return composeEndMessage(endstmt)
})

export const initSlidesConsumed = (numslides) => new Uint8Array(numslides)

// fn that calculates how much of the pages have been loaded
export const allSlidesCompleted = R.all(e => e == 1)

export const ifPresoCompletedElse = (consumedState) => R.ifElse(
  allSlidesCompleted,
  () => {
    const endMessage = saveEndOnce(xapi.completedStatement())
    return {
      completed: true,
      message: endMessage,
    }
  },
  () => {
    const completePercStr = (R.countBy(e => e)(consumedState)[1]/consumedState.length).toLocaleString("en", { style: "percent" })
    return {
      completed: false,
      message: `You have completed ${completePercStr} of the presentation.`
    }
  }
)(consumedState)

export const updateSlidesConsumed = (indexh, consumedState) => {
  consumedState[indexh] = 1
  return consumedState
}

export const reportIfPresoCompleted = (indexh, consumedState, completedCallback) => {
  consumedState = updateSlidesConsumed(indexh, consumedState)
  const completedStatus = ifPresoCompletedElse(consumedState)
  if ( completedStatus.completed ) {
    completedCallback()
  }
  userDialog('completedStatus', completedStatus);
}

export const completedStatusHandler = (consumedState, removeListener) => e => reportIfPresoCompleted(e.indexh, consumedState, removeListener)

export const initXAPI = (c) => XAPI(c)

export const readyEventHandler = (hstate, indexh) => {
  hstate[indexh] = 1
  return hstate
}

export const mapSlideChangeListeners = reveal => R.map(ea => {
  reveal.addEventListener( 'slidechanged', ea)
  return ea
})

const RevealxAPI = (reveal, config) => {
  xapi = initXAPI(config)
  const { events={} } = config
  const { slidechanged, ...rest } = events

  if (!reveal) { throw new Error('need Reveal instance') }

  const consumedState = initSlidesConsumed(reveal.getTotalSlides())

  const [
    completedEventListener,
  ] = mapSlideChangeListeners(reveal)([
    completedStatusHandler(
      consumedState,
      () => reveal.removeEventListener('slidechanged', completedEventListener),
    ),
  ])

  reveal.addEventListener('ready', (e) => readyEventHandler(consumedState, e.indexh))

  return {
    consumedState,
    xapi,
  }
}

export default (reveal, config) => RevealxAPI(reveal, config)
