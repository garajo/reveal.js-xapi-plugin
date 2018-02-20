import helper from './helper/hooks.js'
import test from 'ava'
import statementHelper from 'lib/statementHelper'


test('converts from verb and activity profile to statement', t => {
  const node = document.createElement('div')
  const data = [
    {
      "@context": "https://w3id.org/xapi/profiles/context",
      "id": "https://w3id.org/xapi/scorm",
      "type": "Profile",
      "prefLabel": {
        "en": "SCORM Profile"
      },
      "definition": {
        "en": "The SCORM profile includes Verbs, Activity Types and xAPI Document definitions used to represent SCORM learning experiences in xAPI."
      },
      "conformsTo": "https://w3id.org/xapi/profiles#1.0",
      "versions": [
        {
          "id": "https://w3id.org/xapi/scorm/v1.1",
          "generatedAtTime": "2017-08-21T14:25:59.295Z",
          "wasRevisionOf": ["https://w3id.org/xapi/scorm/v1"]
        }
      ],
      "author": {
        "type": "Organization",
        "name": "Advanced Distributed Learning(ADL) Initiative"
      },
      "concepts": [

        {
          "type": "Verb",
          "id": "http://adlnet.gov/expapi/verbs/completed",
          "inScheme": "https://w3id.org/xapi/scorm/v1.1",
          "exactMatch": ["http://activitystrea.ms/schema/1.0/complete"],
          "prefLabel": {
            "en": "completed"
          },
          "definition": {
            "en": "Indicates the actor finished or concluded the activity normally."
          }
        }, {
          "type": "Verb",
          "id": "http://adlnet.gov/expapi/verbs/failed",
          "inScheme": "https://w3id.org/xapi/scorm/v1.1",
          "prefLabel": {
            "en": "failed"
          },
          "definition": {
            "en": "Indicates the actor did not successfully pass an activity to a level of predetermined satisfaction."
          }
        }
      ],
    }
  ]

  const component = statementHelper(node, data, 'en')
  const listnodes = node.querySelector('ul').childNodes
  t.deepEqual(listnodes.length, 2)
  t.regex(listnodes[0].textContent, new RegExp(data[0].concepts[0].prefLabel.en))
  t.regex(listnodes[0].textContent, new RegExp(data[0].concepts[0].type))
  t.regex(listnodes[1].textContent, new RegExp(data[0].concepts[1].prefLabel.en))
  t.regex(listnodes[1].textContent, new RegExp(data[0].concepts[1].type))
  const search_input = node.querySelector('input[type="text"]')
  t.deepEqual(search_input.getAttribute('placeholder'), 'search for a term')

  // search_input.setAttribute('value', 'c')
  // search_input.dispatchEvent(new window.Event("input"))
  // var beautify_html = require('js-beautify').html;
  // const listnodes2 = node.querySelector('ul').childNodes

})
