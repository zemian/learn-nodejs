"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyBase2 = exports.MyBase = void 0;
class MyBase {
    constructor() {
    }
}
exports.MyBase = MyBase;
class MyBase2 {
    constructor() {
    }
}
exports.MyBase2 = MyBase2;
/**
 * This will not compile. You can only extend one class.
export class MyMiddleBase extends MyBase, MyBase2 implements MyInterface {
    // NOTE: sub-class must call super class constructor.
    constructor() {
        super();
    }
    hello() {
        console.log("Hello World");
    }
}
*/
