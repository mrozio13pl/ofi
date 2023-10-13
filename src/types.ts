/* eslint-disable @typescript-eslint/no-explicit-any */
type Arrayable<T> = T | T[];
type Mapped = Record<string, Arrayable<string>>;
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
     * ```json
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
     * ```json
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
     * ```json
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
     * ```json
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
     * ```json
     * { name: 'joe', _: [] }
     * ```
     */
    default?: Mapped;
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
     * ```json
     * { _: [], foo: true, bar: 123 }
     * ```
     */
    alias?: Mapped;
    /**
     * Should values that look like numbers be parsed into them.
     * This doesn't apply to strings.
     * Default: `true`
     */
    parseNumber?: boolean;
    /**
     * Should a group of short options be treated as seperate flags.
     * Default: `true`
     * @example
     * `-abc`:
     * ```json
     * { a: true, b: true, c: true }
     * ```
     */
    shortFlagGroup?: boolean;
    /**
     * Convert results to camel-case.
     * Default: `false`
     * @example
     * `--test-case 1`:
     * ```json
     * { testCase: 1 }
     * ```
     */
    camelize?: boolean;
}

/**
 * Parsed args.
 */
export declare type Argv = Anyable<string> & {
    _: string[];
}

export type { Arrayable, Mapped };