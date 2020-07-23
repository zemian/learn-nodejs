import { assert } from 'chai';

it('any vs object', () => {
    assert.throw(() => {
        let a: any;
        let b: Object;

        a.nomethod(); // Transpiles just fine
        //b.nomethod(); // Error: Property 'nomethod' does not exist on type 'Object'.
    }, TypeError);
});
