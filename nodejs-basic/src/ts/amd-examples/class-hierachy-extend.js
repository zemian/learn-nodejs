"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = exports.MyBase = void 0;
class MyBase {
    hello() {
        console.log("Base");
    }
}
exports.MyBase = MyBase;
class MyClass extends MyBase {
    hello() {
        console.log("Hello World");
    }
}
exports.MyClass = MyClass;
console.log(new MyClass().hello());
