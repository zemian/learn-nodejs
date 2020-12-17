/// <reference path="namespace-mylib1.ts" />
var nsmylib;
(function (nsmylib) {
    class NsMyLibHello {
        constructor() {
            this.name = "World";
        }
        greeting() {
            return "Hello " + this.name;
        }
    }
    nsmylib.NsMyLibHello = NsMyLibHello;
})(nsmylib || (nsmylib = {}));
