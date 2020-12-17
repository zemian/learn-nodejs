class FibGenerator {
    a = 0;
    b = 1;

    *fib() {
        while(true) {
            yield this.a;
            // Update next value

            // let tmp = this.a;
            // this.a = this.b;
            // this.b = tmp + this.b;

            // We can use JS destructuring assignment to save a temp var
            [this.a, this.b] = [this.b, this.a + this.b];
        }
    }

    *fibMax(n: number) {
        while(this.a < n) {
            yield this.a;
            // Update next value
            // We can use JS destructuring assignment to save a temp var
            [this.a, this.b] = [this.b, this.a + this.b];
        }
    }
}

function testFib() {
    let fib = new FibGenerator().fib();
    for (let i = 0; i < 10; i++) {
        console.log(fib.next());
    }
}
function testFibMax() {
    let fib = new FibGenerator().fibMax(1000);
    for (let val of fib) {
        console.log(val);
    }
}
//testFibMax();

// Explicit Iterable construct
function testSymbolIterator() {
    const iterable1 = {} as any;
    iterable1[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    console.log([...iterable1]);
}
//testSymbolIterator();

// Explicitly write iterator class instead of generator function and yield
class FibGenerator2Iterator {
    a = 0;
    b = 1;
    next(): IteratorResult<number> {
        let result = this.a;
        // Update next value
        [this.a, this.b] = [this.b, this.a + this.b];

        return {value: result, done: false};
    }
}
class FibGenerator2 {
    [Symbol.iterator]() {
        return new FibGenerator2Iterator();
    }
}
function FibGenerator2Test() {
    let fib = new FibGenerator2()[Symbol.iterator]();
    for (let i = 0; i < 10; i++) {
        console.log(fib.next());
    }
}
FibGenerator2Test();
