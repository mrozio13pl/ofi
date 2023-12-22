const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../src');

// arguments to parse
const args = '--foo -n --baz 4 --randomValue 1';

test('unknown', () => {
    const unknown = ['--baz', '-n']
    parse(args, {
        alias: { name: 'n' },
        boolean: ['foo'],
        number: 'random-value',
        unknown: function (flag) {
            console.log('Unknown flag: "%s"', flag);
            assert.ok(unknown.includes(flag));
        }
    });
});

test.run();