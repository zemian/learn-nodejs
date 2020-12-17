"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        return "Hello " + this.name;
    }
    ;
}
exports.Person = Person;
var person = new Person("Zemian");
console.log("person", person);
console.log("person.greeting()", person.greeting());
class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}
var employee = new Employee("Zemian", "Developer");
console.log("employee", employee);
console.log("employee.greeting()", employee.greeting());
