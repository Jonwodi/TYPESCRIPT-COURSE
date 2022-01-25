"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importStar(require("console"));
let number = 30;
// The variable greeting will only accept string values or an error will occur.
let greeting = 'Hello';
// error occured because greeting only accepts string values not number values.
// greeting = 9;
// assigning a variable to null or undefined means that 
let nothing = null;
let doesNotExist = undefined;
let empty = null;
nothing = 20;
doesNotExist = 'Goodbye';
empty = [1, 2, 3];
let now = new Date();
let colours = ['red', 'blue', 'green', 10];
let threeDimesions = [[['one', 'two']]];
// objects
let person;
person = { name: 'Jay', age: 37 };
let engineer;
engineer = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    jobTitle: 'Python developer'
};
// combing objects rules with declerations
let developer = {
    firstName: 'Steven',
    lastName: 'Smith',
    age: 30,
    jobTitle: 'Python developer'
};
// functions
const SUBTRACT = (a, b) => {
    return a - b;
};
console_1.default.log(SUBTRACT(10, 5));
let minus = SUBTRACT;
console_1.default.log(minus(15, 6));
function giveName(first, last) {
    return `${first} ${last}`;
}
console_1.default.log(giveName('John', 'Smith'));
// function returns a void (nothing)
let logger = (message) => {
    console_1.default.log(message);
};
// function accepts string but returns any data type
// functions that accept any data type should be avoided
let anything = (info) => {
    return info;
};
console_1.default.log((0, console_1.info)([1, 2, 3]));
// functions that accept objects and return objects
let person1 = (data) => {
    return data;
};
console_1.default.log(person1({ name: 'Jay', age: 24, sex: 'male' }));
let person2 = (data) => {
    return data;
};
console_1.default.log(person1({ name: 'Jessica', age: 33, sex: 'female' }));
// Arrays
let shoppingCart = [];
shoppingCart = ["Bread", "Pasta", "Chicken", "Milk"];
shoppingCart.push("Beef", "Vegetable mix");
shoppingCart[0] = "Oats";
console_1.default.log(shoppingCart);
// Array that accepts number or string values
let skills = [];
skills = ['python', 2015];
console_1.default.table(skills);
let oneToTen = [];
oneToTen = [];
let n = number;
n = 1;
while (n < 11) {
    console_1.default.log(oneToTen.push(n));
    n++;
}
console_1.default.log(oneToTen);
let frank = ["frank", new Date, true, 8];
console_1.default.log(frank[0]);
console_1.default.log(frank[3]);
let student1 = ["James", true, 50, new Date];
console_1.default.log(student1);
let pt = { x: 100, y: 100 };
let axis = { x: 1000, y: -500 };
console_1.default.log(pt);
console_1.default.log(axis);
let getName = (person) => {
    return `${person.firstName} ${person.lastName}`;
};
let john = {
    id: 123,
    firstName: 'John',
    lastName: 'Smith'
};
let david = {
    id: 246,
    firstName: 'David',
    lastName: 'Smith'
};
const FULLNAME = getName(john);
const FULLNAME2 = getName(david);
console_1.default.log(FULLNAME);
console_1.default.log(FULLNAME2);
// Class annotation
class Teacher {
    constructor(id, name, subject) {
        this.id = id;
        this.name = name;
        this.subject = subject;
    }
    getSubject() {
        return `${this.name} teaches the subject ${this.subject}`;
    }
}
let teacher = new Teacher(12, 'Jamie', "Maths");
console_1.default.log(teacher.getSubject());
class Job {
    constructor(id, name, job) {
        this.id = id;
        this.name = name;
        this.job = job;
        this.id = id;
        this.name = name;
        this.job = job;
    }
    getJobTitle() {
        return `${this.name} works as a ${this.job}`;
    }
}
let jobTitle = new Job(55, 'Jamie', "Software Developer");
console_1.default.log(jobTitle.getJobTitle());
