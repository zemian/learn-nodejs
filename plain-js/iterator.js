// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
//
// An ES6 feature:
// protocols = rules
//
// There are two protocols:
// Iterable - An object that can be used inside "for...of".
//            objects must have "[Symbol.iterator]" method that returns an "iterator", or
//            it can be a "generator" function.
//            NOTE: In js doc, an "[Symbol.iterator]" is described as "@@iterator".
//
// Iterator - An object that has "next()" method. And the "next()" method returns
//            an iteration object that must contains "done" and "value" properties.
//
// You can create an object that satisfies both the Iterator Protocol and Iterable
// let myIterator = {
//     next: function() {
//         // return {done, value}
//     },
//     [Symbol.iterator]: function() { return this; }
// };
//

console.log("== String is an iterable object");
{
    let someString = 'hi';
    console.log(typeof someString[Symbol.iterator]); // "function"

    console.log("== String's default iterator that returns code points");
    let iterator = someString[Symbol.iterator]();
    console.log(iterator + ''); // "[object String Iterator]"

    console.log(iterator.next()); // { value: "h", done: false }
    console.log(iterator.next()); // { value: "i", done: false }
    console.log(iterator.next()); // { value: undefined, done: true }

    console.log("-- Calling another next() after done=false");
    console.log(iterator.next());
}

console.log("== Override String @@iterator");
{
    // need to construct a String object explicitly to avoid auto-boxing
    let someString = new String('hi');

    someString[Symbol.iterator] = function () {
        return {
            // this is the iterator object, returning a single element (the string "bye")
            // NOTE: you can use "this" safely inside the next() function to reference
            // the object literal "_first" property.
            next: function () {
                return this._first ? {
                    value: 'bye',
                    done: (this._first = false)
                } : {
                    done: true
                }
            },
            _first: true
        };
    };
    console.log([...someString]); // ["bye"]
    console.log(someString + ''); // "hi"
}
