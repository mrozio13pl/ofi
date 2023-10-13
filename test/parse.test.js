const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../dist');

test('parser', () => {
    const res = parse('-a --b 123 -c=moo o --no-dice', {
        number: [ 'b' ],
        string: [ 'see' ],
        boolean: 'dice',
        alias: { see: ['c'] },
        default: { b: 20, d: 'test' }
    });
    assert.equal(res, {
        _: [
            'o'
        ],
        a: true,
        b: 123,
        see: 'moo',
        dice: false,
        d: 'test'
    })
});

test.run();