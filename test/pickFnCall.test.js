import helper from './helper/hooks.js'
import test from 'ava'
import pickFnCall from 'lib/pickFnCall'
import {trace} from 'lib/UIConsole'

test('functions are being identified and called', t => {
  const fn_list = {
    a: () => 'a',
    b: () => 'b',
    c1: () => 'c1'
  }

  t.deepEqual(pickFnCall(fn_list, 'a'), fn_list['a']())
  t.deepEqual(pickFnCall(fn_list, 'notthere'), trace(`Could not find reference: notthere`))
  t.deepEqual(pickFnCall({
    a: {}
  }, 'a'), trace(`Could not find reference: a`))
  t.deepEqual(pickFnCall({
    a: 'string'
  }, 'a'), trace(`Could not find reference: a`))

})
