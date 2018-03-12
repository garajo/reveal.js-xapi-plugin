import test from 'ava'
import Statement, { langkey, keyOrFirstValue } from 'lib/statement'

test('logic of lang_ISO in combo with local_ISO', t => {
  const lang_iso = 'en'
  const local_iso = 'US'

  t.deepEqual(langkey(lang_iso), lang_iso)
  t.deepEqual(langkey(lang_iso, local_iso), `${lang_iso}-${local_iso}`)
})

test('opposite of above, chooses lang_ISO or ', t => {
  const node = { 'en': 'fee', 'en-US': 'fi', 'en-UK': 'fo' }
  t.deepEqual(keyOrFirstValue(node), node['en'])
  t.deepEqual(keyOrFirstValue(node, 'fr'), node['en'])
  t.deepEqual(keyOrFirstValue(node, 'en-US'), node['en-US'])
  t.deepEqual(keyOrFirstValue(node, 'en-UK'), node['en-UK'])
})

test('converts from verb and activity profile to statement', t => {
  const verb_profile = {
    "type": "Verb",
    "id": "http://adlnet.gov/expapi/verbs/initialized",
    "inScheme": "https://w3id.org/xapi/scorm/v1.1",
    "prefLabel": {
      "en": "initialized"
    },
    "definition": {
      "en": "Indicates the activity provider has determined that the actor successfully started an activity."
    }
  }

  const activity_profile = {
    "type": "ActivityType",
    "id": "http://adlnet.gov/expapi/activities/lesson",
    "inScheme": "https://w3id.org/xapi/scorm/v1.1",
    "prefLabel": {
      "en": "lesson"
    },
    "definition": {
      "en": "A lesson is learning content that may or may not take on the form of a SCO (formal, tracked learning). A lesson may stand-alone or may be part of a larger course."
    }
  }

  const id = 'http://localhost'
  const lang_iso = 'en'
  const local_iso = undefined //'US'
  const authority = {
    name: 'Awesome Designer',
    mbox: 'mailto:hello@example.com',
  }
  const langlocal_key = langkey(lang_iso, local_iso)
  const lang_key = langkey(lang_iso)


  const statement = Statement(id, lang_iso, undefined, authority)
  const result = statement.fromVerbActivityProfile(verb_profile, activity_profile)

  t.deepEqual(result.verb.id, verb_profile.id)
  t.deepEqual(result.verb.display, verb_profile.prefLabel)
  t.deepEqual(result.object.id, id)
  t.deepEqual(result.object.definition.name, {
    ...activity_profile.prefLabel
  })
  t.deepEqual(result.object.definition.description, {
    ...activity_profile.definition
  })
  t.deepEqual(result.object.definition.description, {
    ...activity_profile.definition
  })

  const options = {
    id: 'http://localhost/path',
    name: 'fee',
    description: 'fi',
  }

  let testres
  testres = statement.fromVerbActivityProfile(verb_profile, activity_profile)
  t.deepEqual(testres.object.id, id)
  t.deepEqual(testres.object.definition.name[langlocal_key], activity_profile.prefLabel[langlocal_key])
  t.deepEqual(testres.object.definition.description[lang_key], activity_profile.definition[lang_key])

  // console.log('testres.object.definition', testres.object.definition)

  testres = statement.fromVerbActivityProfile(verb_profile, activity_profile, {id: options.id})
  t.deepEqual(testres.object.id, options.id)
  t.deepEqual(testres.object.definition.name[langlocal_key], activity_profile.prefLabel[langlocal_key])
  t.deepEqual(testres.object.definition.description[lang_key], activity_profile.definition[lang_key])

  testres = statement.fromVerbActivityProfile(verb_profile, activity_profile, {name: options.name})
  t.deepEqual(testres.object.id, id)
  t.deepEqual(testres.object.definition.name[langlocal_key], options.name)
  t.deepEqual(testres.object.definition.description[lang_key], activity_profile.definition[lang_key])

  testres = statement.fromVerbActivityProfile(verb_profile, activity_profile, {description: options.description})
  t.deepEqual(testres.object.id, id)
  t.deepEqual(testres.object.definition.name[langlocal_key], activity_profile.prefLabel[langlocal_key])
  t.deepEqual(testres.object.definition.description[lang_key], options.description)

  testres = statement.fromVerbActivityProfile(verb_profile, activity_profile, {description: options.description, name: options.name, id: options.id})
  t.deepEqual(testres.object.id, options.id)
  t.deepEqual(testres.object.definition.name[langlocal_key], options.name)
  t.deepEqual(testres.object.definition.description[lang_key], options.description)

})
