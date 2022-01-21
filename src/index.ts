import { info } from "console";

let number = 30;

// The variable greeting will only accept string values or an error will occur.
let greeting: string = 'Hello';

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

let threeDimesions: string[][][] = [[['one', 'two']]];

// objects
let person: object;
person = {name: 'Jay', age: 37};

let engineer: {
  firstName: string,
  lastName: string,
  age: number,
  jobTitle: string
};

engineer = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 30,
  jobTitle: 'Python developer'
};

// combing objects rules with declerations
let developer: {
  firstName: string,
  lastName: string,
  age: number,
  jobTitle: string
} = {
  firstName: 'Steven',
  lastName: 'Smith',
  age: 30,
  jobTitle: 'Python developer'
};

// functions
const SUBTRACT = (a: number, b: number): number => {
  return a - b;
}
console.log(SUBTRACT(10, 5));
let minus = SUBTRACT;
console.log(minus(15, 6));

function giveName(first: string, last: string) {
  return `${first} ${last}`;
}
console.log(giveName('John', 'Smith'));

// function returns a void (nothing)
let logger = (message: string): void => {
  console.log(message);
}

// function accepts string but returns any data type
// functions that accept any data type should be avoided
let anything = (info: string): any => {
  return info;
}
console.log(info([1,2,3]));

// functions that accept objects and return objects
let person1 = (data: object): object => {
  return data;
}
console.log(person1({name: 'Jay', age: 24, sex: 'male'}));

let person2 = (data: {}): {} => {
  return data;
}
console.log(person1({name: 'Jessica', age: 33, sex: 'female'}));

