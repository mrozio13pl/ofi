const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../dist');

// arguments to parse
const args = '--foo=1,2,3,4 --bar a b c';

test('array', () => {
    const res = parse(args, {
        array: ['foo', 'bar']
    });
    assert.equal(res, { _: [], foo: [1, 2, 3, 4], bar: ['a', 'b', 'c'] });
});

test.run();