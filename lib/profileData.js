import default_cmi5 from './default_cmi5_data'

const retrieveProfileData = async (url) => {
  return fetch(url)
    .then((response) => response.text())
    // TODO: need to test that the data returned is JSON and/or JSONLD
    .then((body) => Promise.resolve(JSON.parse(body)))
}

export default async (keys, set) => await Promise.all(
  keys.map((ea) => retrieveProfileData(set[ea]))
).catch((e) => Promise.resolve([default_cmi5]))
