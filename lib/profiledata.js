import default_cmi5 from 'data/default_cmi5_data'
import fetchPonyfill from 'fetch-ponyfill'
import uiConsole, {trace} from './uiConsole'

const {fetch} = fetchPonyfill({})

export const xapi_profiles = {
  "acrossx": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/acrossx/acrossx.jsonld',
  "activity-streams": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/activity-streams/activity-streams.jsonld',
  "adb": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/adb/adb.jsonld',
  "adl": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/adl/adl.jsonld',
  "cmi5": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/cmi5/cmi5.jsonld',
  "dod-isd": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/dod-isd/dod-isd.jsonld',
  "open-badges": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/open-badges/open-badges.jsonld',
  "pdf-annotator": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/pdf-annotator/pdf-annotator.jsonld',
  "scorm": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/scorm/scorm.jsonld',
  "seriousgames": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/seriousgames/seriousgames.jsonld',
  "tincan": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/tincan/tincan.jsonld',
  "video": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/video/video.jsonld',
  "virtual-patient": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/virtual-patient/virtual-patient.jsonld',
}

export const retrieveProfileData = async (url) => {
  return fetch(url)
    .then((response) => response.text())
    // TODO: need to test that the data returned is JSON and/or JSONLD
    .then((body) => Promise.resolve(JSON.parse(body)))
}

export const profilesOrDefault = (config_profiles) => config_profiles || ['cmi5']

export const retrieveAllProfiles = async (keys, set) => await Promise.all(
  keys.map((ea) => retrieveProfileData(set[ea]))
).catch((e) => Promise.resolve([default_cmi5]))

export const getProfileKeyVals = (profiles) => {
  if (profiles.constructor === Object) {
    return [keys(profiles), profiles]
  } else if (profiles.constructor === Array) {
    return [profiles, xapi_profiles]
  }
}

import { keys, intersection, difference } from 'ramda'

export const validateKeyVals = ([submittedKeys, urlmap]) => {
  if (difference(submittedKeys, keys(urlmap)).length > 0) {
    uiConsole.log(`key(s) '${difference(submittedKeys, keys(urlmap)).join(',')}' not found`)
    return [intersection(submittedKeys, keys(urlmap)), urlmap]
  }

  return [submittedKeys, urlmap]
}

export default async (config_profiles) => {
  const profiles = profilesOrDefault(config_profiles)
  const keyVals = getProfileKeyVals(profiles)
  return retrieveAllProfiles(...validateKeyVals(keyVals))
}
