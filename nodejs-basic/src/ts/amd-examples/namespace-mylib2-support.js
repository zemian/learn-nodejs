"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NsMyLibHello = void 0;
const nsmylib2 = require("./namespace-mylib2");
class NsMyLibHello {
    constructor() {
        this.name = "World";
    }
    greeting() {
        return "Hello " + this.name;
    }
}
exports.NsMyLibHello = NsMyLibHello;
nsmylib2.NsMyLibHello = NsMyLibHello;
