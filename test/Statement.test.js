import test from 'ava'
import Statement from '../lib/Statement'

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

  const result = Statement.fromVerbActivityProfile(verb_profile, activity_profile)

  t.deepEqual(result.verb.id, verb_profile.id)
  t.deepEqual(result.verb.display, verb_profile.prefLabel)
  t.deepEqual(result.object.id, activity_profile.id)
  t.deepEqual(result.object.definition.name, {
    ...activity_profile.prefLabel
  })
  t.deepEqual(result.object.definition.description, {
    ...activity_profile.definition
  })
  t.deepEqual(result.object.definition.description, {
    ...activity_profile.definition
  })
})

test('converts from verb and activity profile to statement', t => {
  const from_xhr = [
    {
      "id": "f2760040-00b6-40ce-8e55-23f2985d7800",
      "actor": {
        "name": "I.D. Learning",
        "mbox": "mailto:love2learn@example.com",
        "mbox_sha1sum": null,
        "openid": null,
        "account": null,
        "degraded": false
      },
      "verb": {
        "id": "http://adlnet.gov/expapi/verbs/initialized",
        "display": {
          "en": "initialized"
        }
      },
      "target": {
        "objectType": "Activity",
        "id": "http://adlnet.gov/expapi/activities/lesson",
        "definition": {
          "name": {
            "en": "lesson"
          },
          "description": {
            "en": "A lesson is learning content that may or may not take on the form of a SCO (formal, tracked learning). A lesson may stand-alone or may be part of a larger course."
          },
          "type": null,
          "moreInfo": null,
          "extensions": null,
          "interactionType": null,
          "correctResponsesPattern": null,
          "choices": null,
          "scale": null,
          "source": null,
          "target": null,
          "steps": null
        }
      },
      "result": null,
      "context": null,
      "timestamp": "2018-02-15T21:26:24.694Z",
      "stored": null,
      "authority": null,
      "attachments": null,
      "version": null,
      "degraded": false,
      "voided": null,
      "inProgress": null,
      "originalJSON": null
    }
  ]

  const normalized = Statement.fromXHR(from_xhr)[0]

  t.deepEqual(normalized.id, from_xhr[0].id)
  t.deepEqual(normalized.actor, from_xhr[0].actor)
  t.deepEqual(normalized.verb, from_xhr[0].verb)
  t.deepEqual(normalized.object, from_xhr[0].target)
})
