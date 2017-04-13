const R = require('ramda')
const adlVocab = require('./localdev/adl_vocab.json')

const { xapi } = Reveal.getConfig()
const { config, events } = xapi
const TinCan = require('tincanjs')

const defaults = {
  lrs: {
    endpoint: "http://localhost:7000/",
    username: "<Test User>",
      password: "<Test Password>",
        allowFail: false,
      },
      statement: {
        actor: {
          mbox: "mailto:george@example.com",
          name: "Curious George",
        },
        verb: {
          id: "http://adlnet.gov/expapi/verbs/completed"
        },
        object: {
          id: "http://adlnet.gov/expapi/activities/lesson",
          // id: "http://adlnet.gov/expapi/activities/media"
        }
      }
    }
// features
// - works with existing Reveal presentations
// - sends to endpoint or back to Reveal and presentation
// - defined actor or anonymous sent back to Reveal and presentation
// - records statements automatically through navigation
//

const RevealxAPI = (function() {
  console.log('adlVocab', adlVocab)

  const consumestate = new Uint8Array(Reveal.getTotalSlides())

    lrs = new TinCan.LRS(
      R.merge({
        endpoint: "http://localhost:7000",
        username: "<Test User>",
        password: "<Test Password>",
        allowFail: false,
    }, events))

    Reveal.addEventListener( 'slidechanged', function( event ) {
      consumestate[event.indexh] = 1

      if (consumestate.every(e => e===1)) {
        const endStatement = new TinCan.Statement(
          R.merge(defaults.statement, config.statement)
        )
        console.log('Hooray, you\'re done!', endStatement)
        saveStatements([endStatement])
      }
      else {
        const completePercStr = (R.countBy(e => e)(consumestate)[1]/consumestate.length).toLocaleString("en", { style: "percent" })
        console.log(`You have completed ${completePercStr} of the lesson.`)
      }
    })

  const saveStatements = (statements) => {
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
  }
})()
