import {pick} from 'ramda'

export default (domain, path, lang_ISO, local_ISO, authority) => {
  const uri = domain + path
  const key = `${lang_ISO}-${local_ISO}`

  return ({
    fromVerbActivityProfile: (verb_profile, activity_profile) => {
      return {
        verb: {
          id: verb_profile.id,
          display: verb_profile.prefLabel
        },
        object: {
          id: uri,
          definition: {
            name: {
              [`${key}`]: activity_profile.prefLabel[lang_ISO]
            },
            description: {
              [`${key}`]: activity_profile.definition[lang_ISO]
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
