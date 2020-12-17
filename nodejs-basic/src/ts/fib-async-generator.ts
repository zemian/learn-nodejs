class FibAsyncGenerator {
    a = 0;
    b = 1;
    async *fib() {
        while(true) {
            yield Promise.resolve(this.a);
            // Update next value
            [this.a, this.b] = [this.b, this.a + this.b];
        }
    }
    async *fibMax(n: number) {
        while(this.a < n) {
            yield Promise.resolve(this.a);
            // Update next value
            [this.a, this.b] = [this.b, this.a + this.b];
        }
    }

    async *fibMaxSlowly(n: number) {
        // Yield a value every half a second.
        while(this.a < n) {
            let p = new Promise(resolve => {
                setTimeout(() => {
                    resolve(this.a);
                }, 500);
            });
            yield p;

            // Update next value
            [this.a, this.b] = [this.b, this.a + this.b];
        }
    }
}

async function testAsyncFib() {
    let fib = new FibAsyncGenerator().fib();
    for (let i = 0; i < 10; i++) {
        console.log(await fib.next());
    }
}
async function testAsyncFibMax() {
    let fib = new FibAsyncGenerator().fibMax(1000);
    for await (let val of fib) {
        console.log(val);
    }
}
async function testAsyncFibMaxSlowly() {
    let fib = new FibAsyncGenerator().fibMaxSlowly(1000);
    for await (let val of fib) {
        console.log(val);
    }
}
// testAsyncFib();
// testAsyncFibMax();
testAsyncFibMaxSlowly();
