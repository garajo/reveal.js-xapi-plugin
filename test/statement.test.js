import test from 'ava'
import Statement, { langkey } from 'lib/statement'

test('logic of lang_ISO in combo with local_ISO', t => {
  const lang_iso = 'en'
  const local_iso = 'US'

  t.deepEqual(langkey(lang_iso), lang_iso)
  t.deepEqual(langkey(lang_iso, local_iso), `${lang_iso}-${local_iso}`)
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
      "en-US": "lesson"
    },
    "definition": {
      "en": "A lesson is learning content that may or may not take on the form of a SCO (formal, tracked learning). A lesson may stand-alone or may be part of a larger course."
    }
  }

  const id = 'http://localhost'
  const lang_iso = 'en'
  const local_iso = 'US'
  const authority = {
    name: 'Awesome Designer',
    mbox: 'mailto:hello@example.com',
  }



  const statement = Statement(id, lang_iso, local_iso, authority)
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
  t.deepEqual(testres.object.definition.name[langkey(lang_iso, local_iso)], activity_profile.prefLabel[langkey(lang_iso, local_iso)])
  t.deepEqual(testres.object.definition.description[langkey(lang_iso)], activity_profile.definition[langkey(lang_iso)])

  // console.log('testres.object.definition', testres.object.definition)

  testres = statement.fromVerbActivityProfile(verb_profile, activity_profile, {id: options.id})
  t.deepEqual(testres.object.id, options.id)
  t.deepEqual(testres.object.definition.name[langkey(lang_iso, local_iso)], activity_profile.prefLabel[langkey(lang_iso, local_iso)])
  t.deepEqual(testres.object.definition.description[langkey(lang_iso)], activity_profile.definition[langkey(lang_iso)])

  testres = statement.fromVerbActivityProfile(verb_profile, activity_profile, {name: options.name})
  t.deepEqual(testres.object.id, id)
  t.deepEqual(testres.object.definition.name[langkey(lang_iso, local_iso)], options.name)
  t.deepEqual(testres.object.definition.description[langkey(lang_iso)], activity_profile.definition[langkey(lang_iso)])

  testres = statement.fromVerbActivityProfile(verb_profile, activity_profile, {description: options.description})
  t.deepEqual(testres.object.id, id)
  t.deepEqual(testres.object.definition.name[langkey(lang_iso, local_iso)], activity_profile.prefLabel[langkey(lang_iso, local_iso)])
  t.deepEqual(testres.object.definition.description[langkey(lang_iso)], options.description)

  testres = statement.fromVerbActivityProfile(verb_profile, activity_profile, {description: options.description, name: options.name, id: options.id})
  t.deepEqual(testres.object.id, options.id)
  t.deepEqual(testres.object.definition.name[langkey(lang_iso, local_iso)], options.name)
  t.deepEqual(testres.object.definition.description[langkey(lang_iso)], options.description)

})
