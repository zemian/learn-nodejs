"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexSignatureDemo = void 0;
class IndexSignatureDemo {
    constructor() {
        // This declare "context" to hold string as key index and value can be any data.
        this.context = {};
    }
    test() {
        console.log(this.context.foo);
        console.log(this.context['foo']);
        this.context.foo = "bar";
        console.log(this.context.foo);
        console.log(this.context['foo']);
        this.context.foo2 = [1, 3, 2];
        console.log(this.context.foo2);
    }
}
exports.IndexSignatureDemo = IndexSignatureDemo;
