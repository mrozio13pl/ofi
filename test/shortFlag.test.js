const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../src');

// arguments to parse
const args = '-n=123 -F hi 0 -D -abc -foo';

test('alias vs short flags', () => {
    const res = parse(args, {
        alias: {
            number: 'n',
            foo: ['F']
        },
        number: ['number'],
        string: ['foo']
    });
    assert.equal(res, {
        _: [0],
        number: 123,
        foo: 'hi',
        D: true,
        a: true,
        b: true,
        c: true,
        f: true,
        o: true
    });
});

test.run();