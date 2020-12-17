var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
class FibAsyncGenerator {
    constructor() {
        this.a = 0;
        this.b = 1;
    }
    fib() {
        return __asyncGenerator(this, arguments, function* fib_1() {
            while (true) {
                yield yield __await(Promise.resolve(this.a));
                // Update next value
                [this.a, this.b] = [this.b, this.a + this.b];
            }
        });
    }
    fibMax(n) {
        return __asyncGenerator(this, arguments, function* fibMax_1() {
            while (this.a < n) {
                yield yield __await(Promise.resolve(this.a));
                // Update next value
                [this.a, this.b] = [this.b, this.a + this.b];
            }
        });
    }
    fibMaxSlowly(n) {
        return __asyncGenerator(this, arguments, function* fibMaxSlowly_1() {
            // Yield a value every half a second.
            while (this.a < n) {
                let p = new Promise(resolve => {
                    setTimeout(() => {
                        resolve(this.a);
                    }, 500);
                });
                yield yield __await(p);
                // Update next value
                [this.a, this.b] = [this.b, this.a + this.b];
            }
        });
    }
}
function testAsyncFib() {
    return __awaiter(this, void 0, void 0, function* () {
        let fib = new FibAsyncGenerator().fib();
        for (let i = 0; i < 10; i++) {
            console.log(yield fib.next());
        }
    });
}
function testAsyncFibMax() {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        let fib = new FibAsyncGenerator().fibMax(1000);
        try {
            for (var fib_2 = __asyncValues(fib), fib_2_1; fib_2_1 = yield fib_2.next(), !fib_2_1.done;) {
                let val = fib_2_1.value;
                console.log(val);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (fib_2_1 && !fib_2_1.done && (_a = fib_2.return)) yield _a.call(fib_2);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
function testAsyncFibMaxSlowly() {
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function* () {
        let fib = new FibAsyncGenerator().fibMaxSlowly(1000);
        try {
            for (var fib_3 = __asyncValues(fib), fib_3_1; fib_3_1 = yield fib_3.next(), !fib_3_1.done;) {
                let val = fib_3_1.value;
                console.log(val);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (fib_3_1 && !fib_3_1.done && (_a = fib_3.return)) yield _a.call(fib_3);
            }
            finally { if (e_2) throw e_2.error; }
        }
    });
}
// testAsyncFib();
// testAsyncFibMax();
testAsyncFibMaxSlowly();
