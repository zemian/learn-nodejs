class FibAsyncGenerator {
    a = 0;
    b = 1;
    async *fib() {
        while(true) {
            yield this.a;
            // Update next value
            [this.a, this.b] = [this.b, this.a + this.b];
        }
    }
    async *fibMax(n: number) {
        while(this.a < n) {
            yield this.a;
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
testAsyncFibMax();
