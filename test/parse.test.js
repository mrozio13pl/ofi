const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../dist');

test('parser', () => {
    const res = parse('-a --b 123 -c=moo o --no-dice -- --eof end', {
        number: [ 'b' ],
        string: [ 'see' ],
        boolean: 'dice',
        alias: { see: ['c'] },
        default: { b: 20, d: 'test' },
        'populate--': true
    });
    assert.equal(res, {
        _: [
            'o',
            '--eof',
            'end'
        ],
        '--': [
            '--eof',
            'end'
        ],
        a: true,
        b: 123,
        see: 'moo',
        dice: false,
        d: 'test'
    })
});

test.run();