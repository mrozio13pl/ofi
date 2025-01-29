# ofi

[![npm][npm-version]][npm-link]
[![npm bundle size][bundle-size]][bundlephobia]
[![License][license]](./license)

> Yet another argument parser.

A tiny cli flags parser.

## Install

```bash
npm i ofi
```

## Usage

Import:

```js
// ESM
import { parse } from 'ofi';

// or
import ofi from 'ofi';

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
Function that parses given arguments.\
Returns an argument object `argv` which contains all parsed flags.

`argv._` includes all arguments that weren't associated with any option.\
Any argument after `--` ([end-of-flags](https://unix.stackexchange.com/questions/11376/what-does-double-dash-mean)) won't be parsed and will end up in `argv._` and `argv['--']` if [`populate--`](#populate--) option is set to `true`.

#### `arguments`
Type: `String | Array<String>`\
String or an array of strings to be parsed.

For example:
```ts
import { parse } from 'ofi';

parse(process.argv.slice(2));
```

#### `options`

Type: `Object`\
Options for parsing given arguments.

##### `boolean`
Arguments that should be parsed as booleans.\
Type: `String | Array<String>`

```js
{ boolean: ['dice'] }
```
Booleans prefixed with `--no` will be treated as negations.\

##### `string`
Arguments that should be parsed as strings.\
Type: `String | Array<String>`

```js
{ string: ['name'] }
```

##### `number`
Arguments that should be parsed as numbers.\
Type: `String | Array<String>`

```js
{ number: ['age'] }
```

##### `array`
Arguments that should be parsed as arrays.\
Type: `String | Array<String>`

```js
{ array: ['list'] }
```

##### `default`
Set default values.\
Type: `Object`

```js
{ default: { name: 'joe' } }
```

##### `alias`
Set aliases of options.\
Type: `Object`

```js
{ alias: { foo: ['f'], baz: 'b' } }
```

##### `populate--`

Populate `'--'` property in `Argv` with everything after double-dash (`--`, aka. end-of-flags).

Type: `Boolean`\
Default: `false`

##### `parseNumber`
Should values that look like numbers be parsed into them.

Type: `Boolean`\
Default: `true`

**NOTE**: This doesn't apply to flags marked as strings.

##### `shortFlagGroup`
Should a group of short options be treated as seperate flags.\
Example: `-abc` -> `{ a: true, b: true, c: true }`

Type: `Boolean`\
Default: `true`

##### `camelize`
Convert results to camel-case.

Type: `Boolean`\
Default: `false`

##### `coerce`
Custom synchronous function for parsing provided argument.

Type: `Object`\
Default: `undefined`

```js
{ coerce: { len: (arg) => arg + ' cm' } }
```

##### `unknown`

Callback function that runs whenever a parsed flag has not been defined in options.

Type: `Function`\
Default: `undefined`

```js
{ unknown: function (flag) { console.log('Unknown flag: "%s"', flag); } }
```

## License

MIT 💖

<!-- badges -->
[npm-link]: https://npmjs.com/package/ofi
[npm-version]: https://img.shields.io/npm/v/ofi?labelColor=000&color=57B759
[bundle-size]: https://img.shields.io/bundlephobia/min/ofi?labelColor=000&color=57B759
[bundlephobia]: https://bundlephobia.com/package/ofi
[license]: https://img.shields.io/npm/l/ofi?labelColor=000&color=57B759