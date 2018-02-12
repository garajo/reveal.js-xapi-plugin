const fs = require('fs')

const add_plugin = `{ src: 'plugin/xapi/xapi.js'}`

const html = `<div class="slides">
    <section data-xapi="initialized.lesson">Slide 1</section>
    <section>Slide 2
      <button onclick="return checkQuiz(event)" >click me</button>
    </section>
    <section>
      <section data-xapi="customStatement2">Slide 3</section>
      <section>
        <p class="fragment">fragment</p>
        <p class="fragment">fragment</p>
        <p class="fragment" data-xapi="completed.lesson">fragment</p>
      </section>
  </section>
</div>`

const scripts = `		<script>
			function checkQuiz(event) {
				console.log('click', event)
				console.log('xapi.customStatement()', xapi.customStatement1())
			}
		</script>

		<script>
`

const xapi_config = `
{
  lrs: {
    endpoint: "https://cloud.scorm.com/tc/public/",
    actor: { "mbox":"mailto:love2learn@example.com", "name":"I.D. Learning" },
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
	profiles: ['scorm', 'adl', 'tincan'],
	/*
		profiles: {
			'cmi5': 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/cmi5/cmi5.jsonld',
		},
	*/
	statement_helper: true, // toggles visibility of statement helper
	dev_mode: true, // sends or mock sends statements
	debug: true, // validation and feedback on saves
	statements: {
		first: () => {
			console.log('first slide event')
			return 'initialized.lesson'
		},
		last: () => {
			console.log('last slide event')
			return 'completed.lesson'
		},
		customStatement1: () => 'custom statement 1 >>>>',
		customStatement2: () => 'custom statement 2 >>>>',
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
const reveal_tag = '<script src="js\/reveal.js"><\/script>'
const insert_scripts = new RegExp(reveal_tag)//


index_html = index_html.replace(insert_plugin, `dependencies: [\n${add_plugin},`)

let matched_deps_str = index_html.match(insert_config)[0]
matched_deps_str = matched_deps_str.slice(0, -1)


matched_deps_str = matched_deps_str.trim() + '\n],\nxapi: ' + xapi_config

index_html = index_html.replace(insert_config, matched_deps_str)
index_html = index_html.replace(insert_html, html)
const rewrite = index_html.replace(insert_scripts, `${reveal_tag}\n${scripts}`)

fs.writeFileSync('./revealJS/index.html', rewrite)
