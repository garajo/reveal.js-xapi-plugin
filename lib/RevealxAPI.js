'use strict'

const R = require('ramda')
const TinCan = require('tincanjs')

const XAPI = (defaults) => {
  const options = R.merge({
      endpoint: "http://localhost:7000",
      username: "<Test User>",
      password: "dummy, need last minute",
      allowFail: false,
  }, defaults.lrs)

  const lrs = new TinCan.LRS(options)

  return {
    saveStatements: (statements) => {
      if (!Array.isArray(statements)) { throw new Error('expecting array') }
      lrs.saveStatements(
        statements,
        {
          callback: function (err, xhr) {
            if (err !== null) {
              if (xhr !== null) {
                console.log("Failed to save statement: " + xhr.responseText + " (" + xhr.status + ")")
                // TODO: do something with error, didn't save statement
                return
              }

              console.log("Failed to save statement: " + err)
              // TODO: do something with error, didn't save statement
              return
            }

            console.log("Statement saved")
            // TODO: do something with success (possibly ignore)
          }
        }
      )
    },
    endStatement: new TinCan.Statement(
      // R.merge(defaults.statement, userconfig.statement)
      R.merge(
        {
          verb: {
            id: "http://adlnet.gov/expapi/verbs/completed"
          },
          object: {
            id: "http://adlnet.gov/expapi/activities/lesson",
          }
        } ,defaults.statement)
    ),
  }
}


const dummyFn = (event) => {

}


const sendEndMessage = (stmnt) => `Hooray, you\'re done! ${JSON.stringify(stmnt, null, 4)}`

const RevealxAPI = (instance, defaults) => {
  const xapi = XAPI(defaults)
  const { events={} } = defaults
  const { slidechanged, ...rest } = events

  console.log('slidechanged >>>', slidechanged)

  if (!instance) { throw new Error('need Reveal instance') }
  const reveal = instance
  const slidesConsumed = new Uint8Array(Reveal.getTotalSlides())

  const saveEndLesson = R.once((endstmt) => {
    xapi.saveStatements([endstmt])
    console.log(sendEndMessage(endstmt))
  })

  const calcConsumption = (event) => {
    slidesConsumed[event.indexh] = 1

    const ifLessonCompleteCompleteElse = R.ifElse(
      R.all(e => e===1),
      () => {
        saveEndLesson(xapi.endStatement)
        return true
      },
      () => {
        const completePercStr = (R.countBy(e => e)(slidesConsumed)[1]/slidesConsumed.length).toLocaleString("en", { style: "percent" })
        console.log(`You have completed ${completePercStr} of the lesson.`)
        return false
      }
    )

    ifLessonCompleteCompleteElse(slidesConsumed)

  }

  reveal.addEventListener('ready', (event) => slidesConsumed[event.indexh] = 1)
  const addSlideChangeListeners = R.map(ea => reveal.addEventListener( 'slidechanged', ea))
  addSlideChangeListeners([calcConsumption, dummyFn])

  return {
    slidesConsumed: () => slidesConsumed,
  }
}

export default (instance, defaults) => RevealxAPI(instance, defaults)
