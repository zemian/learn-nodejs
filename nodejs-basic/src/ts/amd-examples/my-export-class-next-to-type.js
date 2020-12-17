"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello4 = void 0;
/*
This is same as the "my-export-class-one.ts" example, except we placing the "export"
on same level as the class instead of placing them all at the end of the file.
 */
class Hello4 {
    constructor() {
        this.message = "Hello World";
    }
    greeting() {
        console.log(this.message);
    }
}
exports.Hello4 = Hello4;
