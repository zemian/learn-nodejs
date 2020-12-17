"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello2 = exports.HelloAlias = exports.Hello = exports.ZipCodeValidatorImpl = exports.numberRegexp = void 0;
exports.numberRegexp = /^[0-9]+$/;
class ZipCodeValidatorImpl {
    isAcceptable(s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    }
}
exports.ZipCodeValidatorImpl = ZipCodeValidatorImpl;
class Hello {
    constructor() {
        this.message = "World";
    }
    greeting() {
        console.log(this.message);
    }
}
exports.Hello = Hello;
exports.HelloAlias = Hello;
class Hello2 {
    constructor() {
        this.message = "World2";
    }
    greeting() {
        console.log(this.message);
    }
}
exports.Hello2 = Hello2;
class Hello3 {
    constructor() {
        this.message = "World3";
    }
    greeting() {
        console.log(this.message);
    }
}
// You can't use "export =" while this module contains other "export" statement!
// This only works if you have this were the only statement.
//export = Hello3;
