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