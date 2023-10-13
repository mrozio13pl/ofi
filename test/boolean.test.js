const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../dist');

// arguments to parse
const args = '--x --y=true --no-dice';

test('boolean', () => {
    const res = parse(args, {
        boolean: ['x', 'y', 'dice']
    });
    assert.equal(res, { _: [], x: true, y: true, dice: false });
});

test.run();