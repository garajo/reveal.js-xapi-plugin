const fs = require('fs')

const add_plugin = `{ src: 'plugin/xapi/xapi.js'}`

const html = `<div class="slides">
  <section data-xapi="started.lesson1">Slide 1</section>
  <section data-xapi="customStatement">Slide 2</section>
  <section>
    <section data-xapi="customStatement">Slide 3</section>
    <section>
      <p class="fragment">fragment</p>
      <p class="fragment">fragment</p>
      <p class="fragment" data-xapi="completed.lesson1">fragment</p>
    </section>
  </section>
</div>`

const xapi_config = `
{
  lrs: {
    endpoint: "http://localhost",
    actor: {
      mbox: "mailto:garrickaj@gmail.com"
    },
	},
  /*
		possible formats:
		// selects from list of provided with Plugin
			- ['cmi5']
		// user provided key-val list of profiles and urls
			- [{
					'cmi5': 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/cmi5/cmi5.jsonld',
				}]

	*/
	profiles: ['cmi5', 'acrossx'],
	/*
		profiles: {
			'cmi5': 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/cmi5/cmi5.jsonld',
		},
	*/
	debug: true,
	statement_helper: true,
	statements: {
		first: () => {
			console.log('first slide event')

		},
		last: () => {
			console.log('last slide event')

		},
		customStatement: () => 'custom statement >>>>',
	},
}`

const xapi_full = {
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
const insert_html = /<div class="slides">[\s\S]*?(<\/div>)/gm


index_html = index_html.replace(insert_plugin, `dependencies: [\n${add_plugin},`)

let matched_deps_str = index_html.match(insert_config)[0]
matched_deps_str = matched_deps_str.slice(0, -1)


matched_deps_str = matched_deps_str.trim() + '\n],\nxapi: ' + xapi_config

index_html = index_html.replace(insert_config, matched_deps_str)
const rewrite = index_html.replace(insert_html, html)

fs.writeFileSync('./revealJS/index.html', rewrite)
