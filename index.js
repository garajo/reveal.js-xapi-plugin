// features
// - works with existing Reveal presentations
// - sends to endpoint or back to Reveal and presentation
// - defined actor or anonymous sent back to Reveal and presentation
// - records statements automatically through navigation
//
const R = require('ramda')
const adlVocab = require('./localdev/adl_vocab.json')
const TinCan = require('tincanjs')
const userconfig = Reveal.getConfig().xapi

console.log('Reveal.getConfig()', Reveal.getConfig())


console.log('userconfig', userconfig)


const defaults = {
  lrs: {
    endpoint: "<Endpoint>",
    username: "<User>",
    password: "<Password>",
    allowFail: false,
  },
  statement: {
    actor: {
      mbox: "mailto:anonymous@example.com",
      name: "anonymous",
    },
  },
}
const mergeCompletedStatement = (k, l, r) => (k == 'statement') ? R.merge(l, r) : r
const plugin = (function() {
  return require('./lib/RevealxAPI')
    .default(
      Reveal,
      R.mergeWithKey(mergeCompletedStatement, defaults, userconfig),
    )
})()

window.temp = plugin

module.exports = plugin
