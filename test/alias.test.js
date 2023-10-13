const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../dist');

// arguments to parse
const args = '-f -b 123';

test('alias', () => {
    const res = parse(args, {
        alias: { foo: 'f', bar: ['b'] },
        boolean: ['foo']
    });
    assert.equal(res, { _: [], foo: true, bar: 123 });
});

test.run();