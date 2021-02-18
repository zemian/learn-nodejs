const assert = require('assert');

describe("js object", function () {
    it("object type", function () {
        let a = {foo: 123};
        assert.strictEqual('object', typeof a);

        // Array is an object also, so you must use Array.isArray to check
        let b = ['a', 'b', 'c'];
        assert.strictEqual('object', typeof b);
        assert.strictEqual(true, Array.isArray(b));
        assert.strictEqual(false, Array.isArray(a));

        let c = 'foo';
        assert.strictEqual('string', typeof c);

        let d = 123;
        assert.strictEqual('number', typeof d);

        let e = 3.14;
        assert.strictEqual('number', typeof e);

        let f = true;
        assert.strictEqual('boolean', typeof f);

        let g = new Date();
        assert.strictEqual('object', typeof g);
    })
})
