const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../dist');

// arguments to parse
const args = '--foo "hello world" --baz "--test"';

test('quotes', () => {
    const res = parse(args);
    console.log(res);
    assert.is(res.foo, 'hello world');
    assert.is(res.baz, '--test');
});

test.run();