"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mynsdemo = void 0;
// NOTE: You have to export the namespace to let user to import it!
var mynsdemo;
(function (mynsdemo) {
    class Hello {
        constructor() {
            this.name = "World";
        }
        greeting() {
            return "Hello " + this.name;
        }
    }
    mynsdemo.Hello = Hello;
    class Hello2 extends Hello {
        greeting() {
            return "Hi " + this.name;
        }
    }
    mynsdemo.Hello2 = Hello2;
})(mynsdemo = exports.mynsdemo || (exports.mynsdemo = {}));
