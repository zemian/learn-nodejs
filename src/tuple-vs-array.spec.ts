import { assert } from 'chai';

it('tuple', () => {
    // https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
    // Declare a tuple type
    let x: [string, number];
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    //    x = [10, "hello"]; // Error
    assert.equal(x[0], "hello");
    assert.equal(x[1], 10);

    let x2: [number, string] = [99, 'foo'];
    assert.deepEqual(x2, [99, 'foo']);

    console.log("typeof x2", typeof x2);
    console.log("x2 instanceof Array", x2 instanceof Array); // There is no Tuple type to check?
});

it('array', () => {
    let list: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];
    assert.deepEqual(list, [1, 2, 3]);
    assert.deepEqual(list2, [1, 2, 3]);

    console.log("typeof list", typeof list);
    console.log("list instanceof Array", list instanceof Array);
});
