const retrieveProfileData = async (url) => {
  return fetch(url)
    .then((response) => response.text())
    // TODO: need to test that the data returned is JSON and/or JSONLD
    .then((body) => Promise.resolve(JSON.parse(body)))
    .catch((e) => Promise.resolve(default_cmi5))
}

export default async (keys, set) => await Promise.all(keys.map((ea) => retrieveProfileData(set[ea])))
