const R = require('ramda')
const adlVocab = require('./localdev/adl_vocab.json')

// features
// - works with existing Reveal presentations
// - sends to endpoint or back to Reveal and presentation
// - defined actor or anonymous sent back to Reveal and presentation
// - records statements automatically through navigation
//

const RevealxAPI = (function() {
  // require('./localdev/testLrsEndpoint')

  const TinCan = require('tincanjs')
/*
  console.log('Object.keys(TinCan)', Object.keys(TinCan))
  for (var prop in R.omit(["DEBUG","enableDebug","disableDebug","versions","Utils"], TinCan)) {
    const instance = new TinCan[prop]({'endpoint': 'foo'})
    console.log('-----')
    console.log(JSON.stringify(R.omit(['__proto__'], instance), null, 4))
    console.log(instance)
  }

*/

// https://registry.tincanapi.com/
// http://xapi.vocab.pub/datasets/adl/
// ? https://www.w3.org/TR/activitystreams-vocabulary/
//
console.log('adlVocab', adlVocab)

const { xapi } = Reveal.getConfig()
const { config, slides } = xapi
// console.log('xapi', xapi)
console.log('config', config)

const statement = new TinCan.Statement(
    {
      actor: {
        mbox: "mailto:garrickajo@gmail.com",
        name: "Curious George",
      },
      verb: {
        id: "http://adlnet.gov/expapi/verbs/completed"
      },
      target: {
        id: "http://adlnet.gov/expapi/activities/lesson",
        // id: "http://adlnet.gov/expapi/activities/media"
      }
    }
  );

  console.log('statement', statement)
  console.log('statement', statement.target.toString())

  lrs = new TinCan.LRS(
      {
          endpoint: "http://localhost:7000/statements",
          username: "<Test User>",
          password: "<Test Password>",
          allowFail: false,
      }
  )
  console.log('lrs', lrs)

  // console.log('lrs.retrieveStatement(', lrs.retrieveStatement(statement.id))
  // console.log('lrs.retrieveActivity', lrs.retrieveState())
  // console.log('Reveal', Reveal)
  // console.log('Reveal', Reveal.getConfig())
  // Reveal.showHelp();

  Reveal.addEventListener( 'slidechanged', function( event ) {
    if (Reveal.isLastSlide()) {
      console.log('Hooray, you\'re done!')
      saveStatements()
    } else {
      console.log(event.previousSlide, event.currentSlide, event.indexh, event.indexv, Reveal.getProgress())
    }
  })

const saveStatements = () => {
  lrs.saveStatement(
    statement,
    {
      callback: function (err, xhr) {
        if (err !== null) {
          if (xhr !== null) {
            console.log("Failed to save statement: " + xhr.responseText + " (" + xhr.status + ")");
            // TODO: do something with error, didn't save statement
            return;
          }

          console.log("Failed to save statement: " + err);
          // TODO: do something with error, didn't save statement
          return;
        }

        console.log("Statement saved");
        // TOOO: do something with success (possibly ignore)
      }
    }
  );
}


})()
