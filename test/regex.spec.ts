import { assert } from 'chai';

it('multi-lines search', () => {
    const s = `
one
#two
   three
four`;
    assert.equal(s.slice(s.search(/\S/)), `one
#two
   three
four`);
});
