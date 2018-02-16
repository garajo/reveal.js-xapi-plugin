import default_cmi5 from './default_cmi5_data'
import { keys } from 'ramda'
import fetchPonyfill from 'fetch-ponyfill';
const {fetch} = fetchPonyfill({});

export const xapi_profiles = {
  acrossx: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/acrossx/acrossx.jsonld',
  cmi5: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/cmi5/cmi5.jsonld',
  scorm: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/scorm/scorm.jsonld',
  adl: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/adl/adl.jsonld',
  tincan: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/tincan/tincan.jsonld',
  "activity-streams": 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/activity-streams/activity-streams.jsonld',
  seriousgames: 'https://raw.githubusercontent.com/adlnet/xapi-authored-profiles/master/seriousgames/seriousgames.jsonld'
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

export default async (config_profiles) => {
  const profiles = profilesOrDefault(config_profiles)
  const keyVals = getProfileKeyVals(profiles)
  return retrieveAllProfiles(...keyVals)
}
