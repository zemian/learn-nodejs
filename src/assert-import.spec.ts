// Can we import 'equal' directly? - No, you can't because the exported object from 'chai' is 'assert'
// not the 'equal' method.

import { assert } from 'chai';

it('assert.equal', () => {
    assert.equal(1 + 1, 2);
});
