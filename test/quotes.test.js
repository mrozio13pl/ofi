const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../dist');

// arguments to parse
const args = '--foo "hello world" baz';

test('quotes', () => {
    const res = parse(args);
    assert.is(res.foo, 'hello world');
});

test.run();