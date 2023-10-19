/* eslint-disable @typescript-eslint/no-explicit-any */
type Arrayable<T> = T | T[];
type Mapped<T> = Record<string, T>;
type Anyable<T extends string | number | symbol> = Record<T, any>;

export declare interface Options {
    /**
     * Arguments that should be parsed as booleans.
     * @example
     * ```ts
     * import { parse } from 'ofi';
     *
     * parse(process.argv.slice(2), {
     *      boolean: ['x', 'y', 'dice']
     * });
     *
     * ```
     * `node program.js --x --y=true --no-dice`:
     *
     * ```js
     * { _: [], x: true, y: true, dice: false }
     * ```
     */
    boolean?: Arrayable<string>;
    /**
     * Arguments that should be parsed as strings. (even if they resemble a number)
     * @example
     * ```ts
     * import { parse } from 'ofi';
     *
     * parse(process.argv.slice(2), {
     *      string: ['name', 'surname']
     * });
     *
     * ```
     * `node program.js --name=joe --surname mama`:
     *
     * ```js
     * { _: [], name: 'joe', surname: 'mama' }
     * ```
     */
    string?: Arrayable<string>;
    /**
     * Arguments that should be parsed as numbers.
     * @example
     * ```ts
     * import { parse } from 'ofi';
     *
     * parse(process.argv.slice(2), {
     *      number: ['x', 'y']
     * });
     *
     * ```
     * `node program.js --x=3 --y 90.3`:
     *
     * ```js
     * { _: [], x: 3, y: 90.3 }
     * ```
     */
    number?: Arrayable<string>;
    /**
     * Arguments that should be parsed as arrays.
     * @example
     * ```ts
     * import { parse } from 'ofi';
     *
     * parse(process.argv.slice(2), {
     *      array: ['foo', 'bar']
     * });
     *
     * ```
     * `node program.js --foo=1,2,3,4 --bar a b c`:
     *
     * ```js
     * { _: [], foo: [1, 2, 3, 4], bar: ['a', 'b', 'c'] }
     * ```
     */
    array?: Arrayable<string>;
    /**
     * Set default values.
     * @example
     * ```ts
     * import { parse } from 'ofi';
     *
     * parse(process.argv.slice(2), {
     *      default: { name: 'joe' }
     * });
     * ```
     * `node program.js`:
     *
     * ```js
     * { name: 'joe', _: [] }
     * ```
     */
    default?: Mapped<Arrayable<string>>;
    /**
     * Set aliases of options.
     * @example
     * ```ts
     * import { parse } from 'ofi';
     *
     * parse(process.argv.slice(2), {
     *      alias: { foo: 'f', bar: ['b'] },
     *      boolean: ['foo']
     * });
     * ```
     * `node program.js -f -b 123`:
     *
     * ```js
     * { _: [], foo: true, bar: 123 }
     * ```
     */
    alias?: Mapped<Arrayable<string>>;
    /**
     * Should values that look like numbers be parsed into them.
     * This doesn't apply to strings.
     *
     * Default: `true`
     */
    parseNumber?: boolean;
    /**
     * Should a group of short options be treated as seperate flags.
     *
     * Default: `true`
     * @example
     * `-abc`:
     * ```js
     * { a: true, b: true, c: true }
     * ```
     */
    shortFlagGroup?: boolean;
    /**
     * Convert results to camel-case.
     *
     * Default: `false`
     * @example
     * `--test-case 1`:
     * ```js
     * { testCase: 1 }
     * ```
     */
    camelize?: boolean;
    /**
     * Custom synchronous function for parsing provided argument.
     *
     * Default: `undefined`
     * @example
     * ```ts
     * import { parse } from 'ofi';
     *
     * parse(process.argv.slice(2), {
     *      boolean: ['foo'],
     *      coerce: {
     *          foo: (arg) => arg ? 'banana' : 'plum'
     *      }
     * });
     * ```
     * `node program.js --foo`:
     *
     * ```js
     * { _: [], foo: 'banana' }
     * ```
     */
    coerce?: Mapped<(value: any) => any>;
    /**
     * Callback function that runs whenever a parsed flag has been not defined in options.
     *
     * Default: `undefined`
     * @param {string} flag Unknown flag.
     * @example
     * ```ts
     * import { parse } from 'ofi';
     *
     * parse(process.argv.slice(2), {
     *      boolean: ['foo'],
     *      unknown: function (flag) {
     *          console.log('Unknown flag: "%s"', flag);
     *      }
     * });
     * ```
     * `node program.js --foo --baz`:
     *
     * ```markdown
     * Unknown flag: "--baz"
     * ```
     */
    unknown?: (flag: string) => any;
}

/**
 * Parsed arguments.
 */
export declare type Argv = Anyable<string> & {
    /**
     * Arguments that weren't associated with any option.
     */
    _: string[];
}

export type { Arrayable, Mapped };