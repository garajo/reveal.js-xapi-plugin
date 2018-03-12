import {pick} from 'ramda'

export const langkey = (lang_ISO, local_ISO) => local_ISO ? `${lang_ISO}-${local_ISO}` : lang_ISO

export const keyOrFirstValue = (node, key) => node[key] || Object.values(node)[0]

export default (origin, lang_ISO, local_ISO, authority) => {
  const key = langkey(lang_ISO, local_ISO)

  return ({
    fromVerbActivityProfile: (verb_profile, activity_profile, { id, name, description }={}) => {
      return {
        verb: {
          id: verb_profile.id,
          display: verb_profile.prefLabel
        },
        object: {
          id: id || origin,
          definition: {
            name: {
              [`${key}`]: name || keyOrFirstValue(activity_profile.prefLabel, key),
            },
            description: {
              [(`${key}`)]: description || keyOrFirstValue(activity_profile.definition, key),
            },
            type: activity_profile.id,
          },
          objectType: 'Activity',
        },
        authority,
      }
    },
  })
}
