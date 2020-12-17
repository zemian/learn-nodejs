{
    console.log("Tuple example");
    // https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
    // Declare a tuple type
    let x;
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    //    x = [10, "hello"]; // Error
    console.log(x[0]);
    console.log(x[1]);
    let x2 = [99, 'foo'];
    console.log(x2);
    console.log("typeof x2", typeof x2);
    console.log("x2 instanceof Array", x2 instanceof Array); // There is no Tuple type to check?   
}
{
    console.log("Array example");
    let list = [1, 2, 3];
    let list2 = [1, 2, 3];
    console.log(list);
    console.log(list2);
    console.log("typeof list", typeof list);
    console.log("list instanceof Array", list instanceof Array);
}
