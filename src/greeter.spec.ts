import { assert } from 'chai';
import { greeter } from '../src/greeter';

it('greeter', () => {
    assert.equal(greeter(), "hello");
});
