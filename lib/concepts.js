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

const compareByTypeAndLabel = curry((term, type, langISO, obj) => toLower(obj.type) === type && toLower(term) === obj.prefLabel[langISO])

const reduceFilter = (compare, concepts) => compose(reduce((acc, value) => {
  return pipe(filter(ea => compare(ea)), concat(acc))(value)
}, []), values)(concepts)



export const dotVerbActivity = (dot_statement, langISO, profile_data) => {
  const [verb, activity] = dot_statement.split('.')
  if (verb && activity)
    return filterTerms(langISO, [
      verb, activity
    ], profile_data)

}

export const filterTerms = (langISO, [
  verb, activity
], profile_data) => {
  const concepts = getConcepts(profile_data)

  return {
    verbs: reduceFilter(compareByTypeAndLabel(verb, 'verb', langISO), concepts),
    activities: reduceFilter(compareByTypeAndLabel(activity, 'activitytype', langISO), concepts),
  }
}

export const getConcepts = (profile_data) => {
  return zipObj(map(ea => ea.id)(profile_data), map(ea => ea.concepts)(profile_data))
}
