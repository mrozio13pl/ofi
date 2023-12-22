const { test } = require('uvu');
const assert = require('uvu/assert');
const { parse } = require('../src');

function parser(args) {
    return parse(args.split(' ').slice(2), {
        number: ['size'],
        string: ['foo', 'name', 'surname'],
        boolean: ['dice', 'friendly'],
        array: ['list', 'my-numbers'],
        alias: { foo: ['f'] },
        default: { surname: 'obama', list: [] }
    })
}

test('numbers, strings, aliases, booleans, defaults', () => {
    const res = parser('node program.js --size=3 --name barack -f baz --no-dice --friendly');

    assert.equal(res, {
        _: [],
        size: 3,
        name: 'barack',
        surname: 'obama',
        foo: 'baz',
        dice: false,
        list: [],
        friendly: true
    })
})

test('arrays, short flags, kebabcase, positional arguments', () => {
    const res = parser('node program.js --list a b c -N hi there --myNumbers=13,1,2,3 -fas');

    assert.equal(res, {
        _: ['hi', 'there'],
        surname: 'obama',
        list: [ 'a', 'b', 'c' ],
        N: true,
        'my-numbers': [ 13, 1, 2, 3 ],
        foo: true,
        a: true,
        s: true
    })
})

test.run();