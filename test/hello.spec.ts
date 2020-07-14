import { hello } from '../src/hello';
import { assert } from 'chai';

describe('hello suite', () => {
    it('hello test', () => {
        const result = hello();
        assert.equal(result, "hello");
    });
});
