// NOTE: In order for typescript to recognize 'require()' function,
// You need to add '@types/node' to the package.json.
const assert = require("assert");
// Note you can not import assert like this:
//   import {assert} from "assert";
assert.strictEqual(1 + 1, 2);
assert.notStrictEqual(.1 + .2, .3);
