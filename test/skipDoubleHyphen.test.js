const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../src');

// arguments to parse
const args = '--hello world -- -test --goodbye 123';

test('skip options after --', () => {
    const res = parse(args);
    assert.equal(res, {
        _: ['-test', '--goodbye', 123],
        hello: 'world'
    });
});

test.run();