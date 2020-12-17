"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloClassMany2 = exports.HelloClassMany1 = void 0;
/*
A normal "export" is used in a module to export one or more named objects.
The user must import the same exact name to use it.
 */
class HelloClassMany1 {
    constructor() {
        this.message = "Hello World";
    }
    greeting() {
        console.log(this.message);
    }
}
exports.HelloClassMany1 = HelloClassMany1;
class HelloClassMany2 {
    constructor() {
        this.message = "Hello World";
    }
    greeting() {
        console.log(this.message);
    }
}
exports.HelloClassMany2 = HelloClassMany2;
