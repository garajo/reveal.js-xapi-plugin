// features
// - works with existing Reveal presentations
// - sends to endpoint or back to Reveal and presentation
// - defined actor or anonymous sent back to Reveal and presentation
// - records statements automatically through navigation
//
const R = require('ramda')
const adlVocab = require('./localdev/adl_vocab.json')
const TinCan = require('tincanjs')
// console.log('Reveal', Reveal)
// const { xapi: userconfig } = { xapi } = Reveal.getConfig()
const userconfig = Reveal.getConfig().xapi

/****************
  App Config

*/

const defaults = {
  lrs: {
    endpoint: "http://localhost:7000/",
    username: "<Test User>",
    password: "<Test Password>",
      allowFail: false,
    },
  statement: {
    actor: {
      mbox: "mailto:anonymous@example.com",
      name: "anonymous",
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/completed"
    },
    object: {
      id: "http://adlnet.gov/expapi/activities/lesson",
      // id: "http://adlnet.gov/expapi/activities/media"
    }
  },
  state: {

  }
}


/****************
  plugin

*/


const plugin = (function() {
  return require('./lib/RevealxAPI').default(Reveal, userconfig)
})()

module.exports = plugin
