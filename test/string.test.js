const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../src');

// arguments to parse
const args = '--name=joe --surname mama --age 30';

test('string', () => {
    const res = parse(args, {
        string: ['name', 'surname']
    });
    assert.equal(res, { _: [], name: 'joe', surname: 'mama', age: 30 });
});

test('prevent string from parsing numbers', () => {
    const res = parse(args, {
        string: ['name', 'surname', 'age']
    });
    assert.equal(res, { _: [], name: 'joe', surname: 'mama', age: '30' });
});

test.run();