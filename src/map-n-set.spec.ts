import { assert } from "chai";

// Note: You need to change tsconfig.json compiler "compilerOptions.target" to "ES2015 (ES6)" or higher
describe('set', () => {
    it('basic set operations', () => {
        const s = new Set([5, 3, 1, 5]);
        assert.equal(s.has(5), true);
        assert.equal(s.has(3), true);
        assert.equal(s.has(9), false);

        s.add(9);
        assert.equal(s.has(9), true);

        s.delete(9);
        assert.equal(s.has(9), false);

        // Set has no size method!
        // Convert set to array
        assert.equal(Array.from(s).length, 3);
    });
});

describe('map', () => {
    it('basic map operations', () => {
        const m = new Map();
        m.set('foo', 123);
        m.set('bar', 321);

        assert.equal(m.has('foo'), true);
        assert.equal(m.get('foo'), 123);
        assert.equal(m.has('bar'), true);
        assert.equal(m.get('bar'), 321);
        assert.equal(m.has('baz'), false);
        assert.equal(m.get('baz'), undefined);
    })
});
