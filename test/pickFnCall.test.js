import test from 'ava';
import pickFnCall from '../lib/pickFnCall'

test('arrays are equal', t => {
	t.deepEqual([1, 2], [1, 2]);
});
