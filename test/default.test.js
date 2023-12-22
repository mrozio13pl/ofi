const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../src');

test('default', () => {
    const res = parse('--name john', {
        default: { name: 'joe', surname: 'mama' }
   });
    assert.equal(res, { _: [], name: 'john', surname: 'mama' });
});

test.run();