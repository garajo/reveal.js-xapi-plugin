const jsdom = require("jsdom")
import test from 'ava'
const { JSDOM } = jsdom
const { window } = new JSDOM()
const { document } = window

test.beforeEach(t => {
  global.document = document
})

test('hooks', t => {
  t.pass()
})
