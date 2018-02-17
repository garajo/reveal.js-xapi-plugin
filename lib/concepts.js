import {
  compose,
  concat,
  curry,
  filter,
  map,
  pipe,
  reduce,
  values,
  zipObj,
  toLower
} from 'ramda'

export const compareByTypeAndLabel = curry((term, type, langISO, obj) => toLower(obj.type) === type && toLower(term) === obj.prefLabel[langISO])

export const reduceFilter = (compare, concepts) => compose(reduce((acc, value) => {
  return pipe(filter(ea => compare(ea)), concat(acc))(value)
}, []), values)(concepts)

export const dotVerbActivity = (dot_statement, langISO, profile_data) => {
  const [verb, activity] = dot_statement.split('.')
  if (verb && activity)
    return filterTerms(langISO, [
      verb, activity
    ], profile_data)
  else
    return {} // we don't want to return any null, undefined, empty string values
}

export const reduceByTerm = (term, type, langISO, concepts) => {
  return reduceFilter(compareByTypeAndLabel(term, type, langISO), concepts)
}

export const filterTerms = (langISO, [
  verb, activity
], profile_data) => {
  const concepts = getConcepts(profile_data)
  return {
    verbs: reduceByTerm(verb, 'verb', langISO, concepts),
    activities: reduceByTerm(activity, 'activitytype', langISO, concepts),
  }
}

export const conceptIdPairs = (profile_data) => {
  return map(ea => ea.concepts.map(e => ({ profile: ea, concept: e })))(profile_data)
}

export const getConcepts = (profile_data) => {
  return zipObj(map(ea => ea.id)(profile_data), map(ea => ea.concepts)(profile_data))
}
