"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = exports.MyMiddleBase = exports.MyBase = void 0;
class MyBase {
    constructor() {
    }
}
exports.MyBase = MyBase;
class MyMiddleBase extends MyBase {
    // NOTE: sub-class must call super class constructor.
    constructor() {
        super();
    }
    hello() {
        console.log("Hello World");
    }
}
exports.MyMiddleBase = MyMiddleBase;
class MyClass extends MyMiddleBase {
}
exports.MyClass = MyClass;
