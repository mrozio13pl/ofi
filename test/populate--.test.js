const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../src');

// arguments to parse
const args = '--foo "hello world" -- --baz "goodbye world"';

test('populate--', () => {
    const res = parse(args, {
        'populate--': true
    });
    assert.is(res.foo, 'hello world');
    assert.equal(res['--'], ['--baz', 'goodbye world']);
});

test.run();