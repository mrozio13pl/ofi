const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../src');

// arguments to parse
const args = '--test-case'

test('camelize: on', () => {
    const res = parse(args, {
        boolean: ['test-case'],
        camelize: true
    });
    assert.equal(res, {
        _: [],
        testCase: true
    });
});

test('camelize: off', () => {
    const res = parse(args, {
        boolean: ['test-case']
    });
    assert.equal(res, {
        _: [],
        'test-case': true
    });
});

test.run();