const { suite } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../dist');

const test = suite('complex test');

test('complexity test', () => {
    const args = [
        '--x', '--y=true', '--no-dice',
        '--name=joe', '--surname', 'mama',
        '--z=42',
        'k=123',
        '--array=1,2,3',
        '-abc',
        '--non-numeric=abc123',
    ];
    
    const options = {
        boolean: ['x', 'y', 'dice'],
        string: ['name', 'surname'],
        number: ['z'],
        array: ['array'],
        alias: { 'alias-a': 'a', 'alias-b': 'b' },
        shortFlagGroup: true,
        camelize: true,
        'populate--': true
    };
    
    const result = parse(args, options);
    
    assert.equal(result, {
        _: ['k=123'],
        '--': [],
        x: true,
        y: true,
        dice: false,
        name: 'joe',
        surname: 'mama',
        z: 42,
        array: [1, 2, 3],
        aliasA: true,
        aliasB: true,
        c: true,
        nonNumeric: 'abc123'
    });
});

test.run();