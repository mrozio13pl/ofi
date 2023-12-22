const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../src');

// arguments to parse
const args = '--x=3 --y 90.3';

test('number', () => {
    const res = parse(args, {
        number: ['x', 'y']
    });

    assert.is(res.x, 3);
    assert.is(res.y, 90.3);
    assert.is(res._.length, 0);
});

test.run();