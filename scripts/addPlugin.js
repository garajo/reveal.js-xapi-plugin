const fs = require('fs')

const add_plugin = {
  src: 'plugin/xapi/xapi.js'
}

const xapi_config = {
  xapi: {
    config: {
      lrs: {
        endpoint: 'bar',
        username: '<Test User>',
        password: '<Test Password>',
        allowFail: false,
      },
      actor: {
        mbox: 'mailto:garrickajo@gmail.com',
      },
      verb: {
        id: 'http://adlnet.gov/expapi/verbs/experienced',
      },
      target: {
        id: 'http://adlnet.gov/expapi/activities/lesson',
      },
    },
    slides: {
      1: {
        condition: () => {
          console.log('foo')
        },
      },
    },
    events: {
      slidechanged: {
        every: () => {
          console.log('every')

        },

        first: () => {
          console.log('first')

        },

        last: () => {
          console.log('last')

        },
        1: () => {
          console.log('1')

        },
        2.1: () => {
          console.log('2.1')

        }
      }
    }
  }
}

let index_html = fs.readFileSync('./revealJS/index.html').toString()

const insert_plugin = /dependencies: \[/
const insert_config = /dependencies: \[[\s\S]*?\]/gm


index_html = index_html.replace(insert_plugin, `dependencies: [\n${JSON.stringify(add_plugin)},\n`)  

let matched_deps_str = index_html.match(insert_config)[0]
matched_deps_str = matched_deps_str.slice(0, -1)

// matched_deps_str = matched_deps_str.trim() + ',\n{ xapi: ' + JSON.stringify(xapi_config.xapi, null, 2) + '}\n]'

matched_deps_str = matched_deps_str.trim() + '\n],\nxapi: ' + JSON.stringify(xapi_config.xapi, null, 2)

const rewrite = index_html.replace(insert_config, matched_deps_str)

fs.writeFileSync('./revealJS/index.html', rewrite)