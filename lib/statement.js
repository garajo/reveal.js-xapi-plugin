import {pick} from 'ramda'

export default (origin, lang_ISO, local_ISO, authority) => {
  const key = `${lang_ISO}-${local_ISO}`

  return ({
    fromVerbActivityProfile: (verb_profile, activity_profile, { id, name, description}) => {
      console.log('verb_profile', verb_profile)
      console.log('activity_profile', activity_profile)
      console.log('name', name)
      console.log('description', description)
      return {
        verb: {
          id: verb_profile.id,
          display: verb_profile.prefLabel
        },
        object: {
          id: id || origin,
          definition: {
            name: {
              [`${key}`]: name || activity_profile.prefLabel[lang_ISO]
            },
            description: {
              [`${key}`]: description || activity_profile.definition[lang_ISO]
            },
            type: activity_profile.id,
          },
          objectType: 'Activity',
        },
        authority,
      }
    },
    fromXHR: (from_xhr) => {
      return from_xhr.map(ea => {
        return {
          ...pick(['id', 'actor', 'verb'])(ea),
          object: ea.target
        }
      })
    }
  })
}
