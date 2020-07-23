class Foo {
    constructor() {
        this.name = 'Foo' + Math.random();
    }
}
console.log([new Foo(), new Foo()]);
