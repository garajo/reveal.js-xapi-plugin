// features
// - works with existing Reveal presentations
// - sends to endpoint or back to Reveal and presentation
// - defined actor or anonymous sent back to Reveal and presentation
// - records statements automatically through navigation
//
const R = require('ramda')
const adlVocab = require('./data/adl_vocab.json')
const userconfig = Reveal.getConfig().xapi

const defaults = {
  lrs: {
    endpoint: "https://cloud.scorm.com/tc/public/",
    actor: { "mbox":"mailto:love2learn@example.com", "name":"I.D. Learning" },
    activity: {
      definition: '',
      id: '',
      objectType: '',

    },
    authUser: "<User>",
    authPassword: "<Password>",
    allowFail: false,
  }
}

console.log('defaults', defaults)
console.log('userconfig', userconfig)

console.log('-------------------')

const plugin = (function() {
  return require('./lib/RevealxAPI')
    .default(
      Reveal,
      Object.assign(defaults, userconfig, { lrs: {...defaults.lrs, ...userconfig.lrs}}),
    )
  })()


window.temp = plugin

module.exports = plugin
