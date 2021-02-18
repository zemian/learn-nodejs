const assert = require('assert');

describe("js array", function () {
    it("out of sequence index", function () {
        let a = ['a', 'b', 'c'];
        assert.deepStrictEqual(['a', 'b', 'c'], a);

        a = [];
        a[0] = 'a';
        a[2] = 'b';
        a[3] = 'c';
        assert.notDeepStrictEqual(['a', 'b', 'c'], a);
        assert.notDeepStrictEqual(['a', null, 'b', 'c'], a); // You can't compare this way
        assert.notDeepStrictEqual(['a', undefined, 'b', 'c'], a); // You can't compare this way

        // We can check for empty element though, like this:
        let b = a.filter(e => e !== null);
        assert.deepStrictEqual(['a', 'b', 'c'], b);
    })
})
