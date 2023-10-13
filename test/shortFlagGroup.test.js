const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../dist');

// arguments to parse
const args = '-abc -t-ęst'

test('shortFlagGroup: on', () => {
    const res = parse(args);
    assert.equal(res, {
        _: [],
        a: true,
        b: true,
        c: true,
        t: true,
        'ę': true,
        s: true,
    });
});

test('shortFlagGroup: off', () => {
    const res = parse(args, {
        shortFlagGroup: false
    });
    assert.equal(res, {
        _: [],
        abc: true,
        't-ęst': true
    });
});

test.run();