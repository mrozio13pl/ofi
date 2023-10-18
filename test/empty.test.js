const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../dist');

// arguments to parse
const args = ' --foo  no-empty  hello ';

test('empty spaces', () => {
    const res = parse(args);
    assert.equal(res, { _: ['hello'], foo: 'no-empty' });
});

test.run();