const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../src');

// arguments to parse
const args = ['--foo', '23.5', '--bar', '9.45']

test('parseNumber: on', () => {
    const res = parse(args, {
        string: ['foo'],
    });
    assert.equal(res, {
        _: [],
        foo: '23.5',
        bar: 9.45
    });
});

test('parseNumber: off', () => {
    const res = parse(args, {
        string: ['foo'],
        parseNumber: false,
    });
    assert.equal(res, {
        _: [],
        foo: '23.5',
        bar: '9.45'
    });
});

test.run();