import helper from './helper/hooks.js'
import test from 'ava'
import pickFnCall from 'lib/pickFnCall'
import {trace} from 'lib/uiConsole'

test('functions are being identified and called', t => {
  const fn_list = {
    a: () => 'a',
    b: () => 'b',
    c1: () => 'c1'
  }

  t.deepEqual(pickFnCall(fn_list, 'a'), fn_list['a']())

  const msg = 'Could not find function reference:'

  t.deepEqual(pickFnCall(fn_list, 'notthere'), trace(`${msg} notthere`))
  t.deepEqual(pickFnCall({
    a: {}
  }, 'a'), trace(`${msg} a`))
  t.deepEqual(pickFnCall({
    a: 'string'
  }, 'a'), trace(`${msg} a`))

})
