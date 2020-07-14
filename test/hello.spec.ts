import { assert } from 'chai';
import { hello } from '../src/hello';

it('hello test', () => {
    assert.equal(hello(), "hello");
});
