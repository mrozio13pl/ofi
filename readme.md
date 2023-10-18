# ofi

> Yet another argument parser.

A tiny cli flags parser.

## Install

```
npm i ofi
```

## Usage

Import:

```js
// ESM
import { parse } from 'ofi';

// CJS
const { parse } = require('ofi');
```

Setup options parser:

```ts
import { parse } from 'ofi';

parse(process.argv.slice(2), {
     number: ['size'],
     string: ['foo', 'name', 'surname'],
     boolean: ['dice', 'friendly'],
     array: ['list', 'my-numbers'],
     alias: { foo: ['f'] },
     default: { surname: 'obama', list: [] }
});
```

This would give the following results:

```console
$ node program.js --size=3 --name barack -f baz --no-dice --friendly
{
  _: [],
  size: 3,
  name: 'barack',
  surname: 'obama',
  foo: 'baz',
  dice: false,
  list: [],
  friendly: true
}

$ node program.js --list a b c -N hi there --myNumbers=13,1,2,3 -fas
{
    _: ['hi', 'there'],
    surname: 'obama',
    list: [ 'a', 'b', 'c' ],
    N: true,
    'my-numbers': [ 13, 1, 2, 3 ],
    foo: true,
    a: true,
    s: true
}
```

## API

### `parse(arguments, options?)`
Function that parses given arguments.<br>
Returns an argument object `argv` which contains all parsed flags.

`argv._` includes all arguments that weren't associated with any option.<br>
Any argument after `--` won't be parsed and will end up in `argv._`.

#### `arguments`
Type: `String | Array<String>`<br>
String or an array of strings to be parsed.

For example:
```ts
import { parse } from 'ofi';

parse(process.argv.slice(2));
```

#### `options`

Type: `Object`<br>
Options for parsing given arguments.

##### `boolean`
Arguments that should be parsed as booleans.<br>
Type: `String | Array<String>`

```js
{ boolean: ['dice'] }
```
Booleans prefixed with `--no` will be treated as negations.<br>

##### `string`
Arguments that should be parsed as strings.<br>
Type: `String | Array<String>`

```js
{ string: ['name'] }
```

##### `number`
Arguments that should be parsed as numbers.<br>
Type: `String | Array<String>`

```js
{ number: ['age'] }
```

##### `array`
Arguments that should be parsed as arrays.<br>
Type: `String | Array<String>`

```js
{ array: ['list'] }
```

##### `default`
Set default values.<br>
Type: `Object`

```js
{ default: { name: 'joe' } }
```

##### `alias`
Set aliases of options.<br>
Type: `Object`

```js
{ alias: { foo: ['f'], baz: 'b' } }
```

##### `parseNumber`
Should values that look like numbers be parsed into them.

Type: `boolean`<br>
Default: `true`

**NOTE**: This doesn't apply to flags marked as strings.

##### `shortFlagGroup`
Should a group of short options be treated as seperate flags.<br>
Example: `-abc` -> `{ a: true, b: true, c: true }`

Type: `boolean`<br>
Default: `true`

##### `camelize`
Convert results to camel-case.

Type: `boolean`<br>
Default: `false`

##### `coerce`
Custom synchronous function for parsing provided argument.

Type: `object`<br>
Default: `undefined`

```js
{ coerce: { len: (arg) => arg + ' cm' } }
```

## License

MIT 💖