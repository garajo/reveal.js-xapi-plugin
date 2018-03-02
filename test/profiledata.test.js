import test from 'ava'
import profiledata, {profilesOrDefault, getProfileKeyVals, xapi_profiles, retrieveAllProfiles, retrieveProfileData} from 'lib/profiledata'
import nock from 'nock'
import default_cmi5 from 'data/default_cmi5_data'

const good = {
  hello: 'world'
}
const bad = 'X'

test.beforeEach(function() {
  nock('http://example.com').get('/').reply(200, good)

  nock('http://example.com').get('/fail').reply(404, bad)
})

test.afterEach(function() {
  nock.cleanAll()
})

test('profilesOrDefault() returns given profile or a default value', t => {
  const config_profiles = ["scorm", "adl", "tincan"]
  t.deepEqual(profilesOrDefault(config_profiles), config_profiles)
  t.deepEqual(profilesOrDefault(undefined), ['cmi5'])
})

test('getProfileKeyVals() returns the correct shape array', t => {
  const config_profiles_array = ["scorm", "adl", "tincan"]
  t.deepEqual(getProfileKeyVals(config_profiles_array), [config_profiles_array, xapi_profiles])

  const config_profiles_obj = {
    "newprofile": "http://example.com"
  }
  t.deepEqual(getProfileKeyVals(config_profiles_obj), [["newprofile"], config_profiles_obj])
})

test('retrieveAllProfiles() resolves the correct data', async (t) => {
  const config_profiles_obj = {
    "newprofile": "http://example.com"
  }
  const data = await retrieveAllProfiles(["newprofile"], config_profiles_obj)
  t.deepEqual(data, [good])
})

test('retrieveAllProfiles() resolves a bad url', async (t) => {
  const config_profiles_obj = {
    "newprofile": "http://example.com/fail"
  }
  const data = await retrieveAllProfiles(["newprofile"], config_profiles_obj)
  t.deepEqual(data, [default_cmi5])
})

test('retrieveProfileData() forms correct JSON', async (t) => {
  const url = "http://example.com/"
  const data = await retrieveProfileData(url)
  t.deepEqual(data.hello, 'world')
})
/*
https://github.com/avajs/ava/issues/1371

test('throws', async t => {
  const url = "http://example.com/fail"
	await t.throws(async () => await retrieveProfileData(url), {instanceOf: SyntaxError, message: 'Unexpected token X in JSON at position 0'})
})
*/
