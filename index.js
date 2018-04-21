// features
// - works with existing Reveal presentations
// - sends to endpoint or back to Reveal and presentation
// - defined actor or anonymous sent back to Reveal and presentation
// - records statements automatically through navigation
//
const userconfig = Reveal.getConfig().xapi

const defaults = {
  lrs: {
    endpoint: "https://cloud.scorm.com/tc/public/",
    actor: { "mbox":"mailto:love2learn@example.com", "name":"OS 4 Learning" },
    authUser: "<User>",
    authPassword: "<Password>",
    allowFail: false,
  },
  lang_ISO: 'en',
  local_ISO: 'US',
}

const plugin = (function() {
  return require('./lib/RevealxAPI')
    .default(
      Reveal,
      Object.assign(defaults, userconfig, { lrs: {...defaults.lrs, ...userconfig.lrs}}),
    )
  })()

module.exports = plugin
