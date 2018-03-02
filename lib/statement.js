import {pick} from 'ramda'

export default (lang_ISO, local_ISO) => {
  return ({
    fromVerbActivityProfile: (verb_profile, activity_profile) => {
      const key = `${lang_ISO}-${local_ISO}`
      return {
        verb: {
          id: verb_profile.id,
          display: verb_profile.prefLabel
        },
        object: {
          id: activity_profile.id,
          definition: {
            name: {
              [`${key}`]: activity_profile.prefLabel[lang_ISO]
            },
            description: {
              [`${key}`]: activity_profile.definition[lang_ISO]
            }
          }
        }
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
