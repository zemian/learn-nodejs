// Note that member declaration is required before it can be initialized in the constructor.
// Compare to JS class, you don't have to declare it. See js/hello-class.js
class Foo {
    constructor() {
        this.name = 'Foo' + Math.random();
    }
}
console.log([new Foo(), new Foo()]);
