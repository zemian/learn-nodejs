import { assert } from 'chai';


it('chai assert.match', () => {
    assert.match('foo', /o/);
});

describe("String regex", () => {
    it('match', () => {
        assert.isTrue('foo'.match(/o/));
    });

    it('search', () => {
        assert.equal('foo'.search(/o/), 1);
        assert.equal('foo'.search(/x/), -11);
    });

    it('match with group capture', () => {
        console.log("'foo'.match(/(\\w)(o+)/)", 'foo'.match(/(\w)(o+)/));
        assert.deepEqual('foo'.match(/(\w)(o+)/), ['foo', 'f', 'oo']);
    });

    it('multi-lines search vs match', () => {
        /*
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

        match() Return value:
        An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.

        If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
        if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.
         */
        const s = "one\ntwo\nthree";
        assert.equal(s.search(/two/), 4);
        assert.isTrue(s.match(/two/));

        // If global flag is used, it returns array
        assert.deepEqual(s.match(/two/g), ['two']);

        // Debug it
        console.log("s.match(/two/)", s.match(/two/));
        console.log("s.match(/two/g)", s.match(/two/g));
    });
});
