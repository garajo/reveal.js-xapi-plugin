const fs = require('fs')

const add_plugin = `{ src: 'plugin/xapi/xapi.js'}`

const html = `<div class="slides">
  <section>
    <section data-xapi="watched.lesson" >subsection</section>
    <section data-xapi="attended.lesson" >subsection</section>
  </section>
  <section>
    <p class="fragment">fragment</p>
    <p class="fragment" data-xapi="completed.application">fragment</p>
  </section>
  <section data-xapi="watched.lesson">Slide </section>
  <section data-xapi="multipleStatement">Slide </section>
  <section data-xapi="watched.lesson">Slide </section>
  <section data-xapi="staticFn">Slide </section>
  <section>Slide<button onclick="return xapi.checkQuiz(event, 'once')">click me</button></section>
  <section>
    <section>Other stuff</section>
    <section data-xapi="nonExistentFn">Slide </section>
  </section>
</div>`

const xapi_config = `
{
  lrs: {
    // endpoint: "https://cloud.scorm.com/tc/public/",
    // endpoint: "https://cloud.scorm.com/tc/1EZABCMVG6/",
    endpoint: "https://lrs.adlnet.gov/xapi/",
    actor: {
      "mbox": "mailto:love2learn@example.com",
      "name": "anonymous learner"
    },
    authUser: "xapi-tools",
    authPassword: "xapi-tools",
  },
  lang_ISO: 'en',
  /*
    possible formats:
    // selects from list of provided with Plugin
      - ['cmi5']
    // user provided key-val list of profiles and urls
      - [{
          'cmi5': 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/cmi5/cmi5.jsonld',
        }]

  */
    profiles: ['scorm', 'adl', 'tincan', 'activity-streams', 'acrossx'],
  /*
    profiles: [{
        'cmi5': 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/cmi5/cmi5.jsonld',
      }],
  */
  /**
   * Controls
   *  - statement helper
   *  - sending statements over xhr
   *  - debug feedback
   * @type {Boolean}
   */
  dev_mode: true,
  statements: {
    staticFn: () => {
      console.log('staticFn')
      return true ? 'attempted.attempt' : ''
    },
    multipleStatement: () => {
      console.log('multipleStatement')
      return ['answered.question', 'attended.lesson']
    },
    checkQuiz: () => {
      console.log('checkQuiz')
      const passed = true || false
      return passed ? 'watched.lesson' : null
    },
  },
}`


let index_html = fs.readFileSync('./revealJS/index.html').toString()

const insert_plugin = /dependencies: \[/
const insert_config = /dependencies: \[[\s\S]*?\]/gm
const insert_html = /<div class="slides">[\s\S]*?(<\/div>)/gm


index_html = index_html.replace(insert_plugin, `dependencies: [\n${add_plugin},`)

let matched_deps_str = index_html.match(insert_config)[0]
matched_deps_str = matched_deps_str.slice(0, -1)


matched_deps_str = matched_deps_str.trim() + '\n],\nxapi: ' + xapi_config

index_html = index_html.replace(insert_config, matched_deps_str)
index_html = index_html.replace(insert_html, html)

fs.writeFileSync('./revealJS/index.html', index_html)
