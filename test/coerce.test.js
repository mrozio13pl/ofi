const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../dist');

// arguments to parse
const args = ['--foo'];

test('coerce functions', () => {
    const res = parse(args, {
        boolean: ['foo'],
        coerce: {
            foo: (arg) => arg ? 'banana' : 'plum',
            empty: (arg) => 'not empty'
        }
    });
    assert.is(res.foo, 'banana');
    assert.is.not(res.foo, 'plum');
    assert.is(res.empty, undefined);
});

test.run();