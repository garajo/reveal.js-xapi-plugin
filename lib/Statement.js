import { pick } from 'ramda'

export default {
  fromVerbActivityProfile: (verb_profile, activity_profile) => {
    return {
      verb: {
        id: verb_profile.id,
        display: verb_profile.prefLabel
      },
      object: {
        id: activity_profile.id,
        definition: {
          name: {
            ...activity_profile.prefLabel
          },
          description: {
            ...activity_profile.definition
          }
        }
      }
    }
  },
  fromXHR: (from_xhr) => {
    return from_xhr.map(ea => {
      return {
        ...pick(['id', 'actor', 'verb'])(ea),
        object: ea.target,
      }
    })
  }
}
