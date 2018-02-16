import test from 'ava';
import { compareByTypeAndLabel, getConcepts, filterTerms, reduceFilter, dotVerbActivity } from 'lib/concepts'
import default_cmi5 from 'lib/default_cmi5_data'

const concepts = [
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
  }, {
    "type": "ActivityType",
    "id": "http://adlnet.gov/expapi/activities/assessment",
    "inScheme": "https://w3id.org/xapi/scorm/v1.1",
    "prefLabel": {
      "en": "assessment"
    },
    "definition": {
      "en": "An assessment is an activity type that determines a learner’s mastery of a particular subject area. An assessment typically has one or more questions."
    }
  }, {
    "type": "ActivityType",
    "id": "http://adlnet.gov/expapi/activities/attempt",
    "inScheme": "https://w3id.org/xapi/scorm/v1.1",
    "prefLabel": {
      "en": "attempt"
    },
    "definition": {
      "en": "An attempt is a discrete set of learner experiences in an activity. This activity gives systems the ability to uniquely identify experiences when they may have happened in different interactions with the same activity."
    }
  }, {
    "type": "StateResource",
    "id": "https://w3id.org/xapi/scorm/activity-state",
    "inScheme": "https://w3id.org/xapi/scorm/v1.1",
    "prefLabel": {
      "en": "SCORM Activity State"
    },
    "definition": {
      "en": "Used to store document data associated with the activity and not intended to capture learning experience data in the form of a statement. The SCORM Activity State Object contains a list of Attempt IRIs for the specified Activity."
    },
    "contentType": "application/json",
    "schema": "https://raw.githubusercontent.com/adlnet/xAPI-SCORM-Profile/master/document-schemas/scorm.profile.activity.state.schema.json"
  }, {
    "type": "StateResource",
    "id": "https://w3id.org/xapi/scorm/attempt-state",
    "inScheme": "https://w3id.org/xapi/scorm/v1.1",
    "prefLabel": {
      "en": "SCORM Activity Attempt State"
    },
    "definition": {
      "en": "The SCORM Activity Attempt State Object contains the state data for the specified attempt on an Activity. It has the following properties: credit, mode, location, preferences, total_time, and adl_data."
    },
    "contentType": "application/json",
    "schema": "https://raw.githubusercontent.com/adlnet/xAPI-SCORM-Profile/master/document-schemas/scorm.profile.attempt.state.schema.json",
    "context": "https://raw.githubusercontent.com/adlnet/xAPI-SCORM-Profile/master/context/attempt-state-context.jsonld"
  }, {
    "type": "ActivityProfileResource",
    "id": "https://w3id.org/xapi/scorm/activity-profile",
    "inScheme": "https://w3id.org/xapi/scorm/v1.1",
    "definition": {
      "en": "Used to store document data associated with the activity and not intended to capture learning experience data in the form of a statement. The SCORM Activity Profile Object contains the profile data for the specified Activity."
    },
    "prefLabel": {
      "en": "SCORM Activity Profile"
    },
    "contentType": "application/json",
    "schema": "https://w3id.org/xapi/scorm/activity-profile/scorm.profile.activity.profile.schema"
  }, {
    "type": "AgentProfileResource",
    "id": "https://w3id.org/xapi/scorm/agent-profile",
    "inScheme": "https://w3id.org/xapi/scorm/v1.1",
    "definition": {
      "en": "The SCORM Activity State Object contains the profile data for the specified Agent. The agent profile has three properties: learner_id, learner_name, and preferences. "
    },
    "prefLabel": {
      "en": "SCORM Agent Profile"
    },
    "contentType": "application/json",
    "schema": "https://raw.githubusercontent.com/adlnet/xAPI-SCORM-Profile/master/document-schemas/scorm.profile.agent.profile.schema.json"
  }
]

test('compareByTypeAndLabel() returns true or false comparing prefLabel property', t => {
  const verb = concepts[0].prefLabel.en
  const activity = concepts[2].prefLabel.en
  const langISO = 'en'
  t.truthy(compareByTypeAndLabel(verb, 'verb', langISO)(concepts[0]))
  t.falsy(compareByTypeAndLabel(verb, 'verb', langISO)(concepts[1]))
  t.falsy(compareByTypeAndLabel(verb, 'activitytype', langISO)(concepts[0]))
  t.truthy(compareByTypeAndLabel(activity, 'activitytype', langISO)(concepts[2]))
  t.falsy(compareByTypeAndLabel(activity, 'activitytype', langISO)(concepts[3]))
  t.falsy(compareByTypeAndLabel(activity, 'verb', langISO)(concepts[2]))
})

test('getConcepts() returns the correct data shape', t => {
  t.deepEqual(getConcepts([default_cmi5]), {[default_cmi5.id]: default_cmi5.concepts})
})

test('getConcepts() returns the correct data shape', t => {
  const langISO = 'en'
  const terms = ['completed','assessment']
  const profile_data = [{ id: 'http://unique.iri', concepts}]
  const found_terms = filterTerms(langISO, terms, profile_data)
  t.deepEqual(found_terms.verbs, [concepts[0]])
  t.deepEqual(found_terms.activities, [concepts[2]])
})

test('reduceFilter() returns the correct data shape', t => {
  const compare = (ea) => ea.type === 'Verb'
  t.deepEqual(reduceFilter(compare, { 'an_id': concepts}), concepts.filter(ea => ea.type === 'Verb'))
  const compare2 = (ea) => ea.type === 'ActivityType'
  t.deepEqual(reduceFilter(compare2, { 'an_id': concepts}), concepts.filter(ea => ea.type === 'ActivityType'))
})

test('dotVerbActivity() returns correctly', t => {
  const langISO = 'en'
  const profile_data = [{ id: 'http://unique.iri', concepts}]
  t.deepEqual(dotVerbActivity('completed.assessment', langISO, profile_data),
    {
      verbs: [concepts[0]],
      activities: [concepts[2]]
    }
  )
})
