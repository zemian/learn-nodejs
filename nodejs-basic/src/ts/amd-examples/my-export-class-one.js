"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloClass1 = void 0;
/*
A normal "export" is used in a module to export one or more named objects.
The user must import the same exact name to use it.
 */
class HelloClass1 {
    constructor() {
        this.message = "Hello World";
    }
    greeting() {
        console.log(this.message);
    }
}
exports.HelloClass1 = HelloClass1;
