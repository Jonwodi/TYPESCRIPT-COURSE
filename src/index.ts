import console, { info } from "console";

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

// Arrays
let shoppingCart: string[] = [];
shoppingCart = ["Bread", "Pasta", "Chicken", "Milk"];
shoppingCart.push("Beef", "Vegetable mix");
shoppingCart[0] = "Oats";
console.log(shoppingCart);

// Array that accepts number or string values
let skills: (number | string)[] = [];
skills = ['python', 2015 ];
console.table(skills);

let oneToTen: number[] = [];
oneToTen = []
let n: number = number;
n = 1;

while (n < 11) {
  console.log(oneToTen.push(n));
  n++;
}
console.log(oneToTen);

// Tuples
type Driver = [string, Date, boolean, number];
let frank:Driver = ["frank", new Date, true, 8];
console.log(frank[0]);
console.log(frank[3]);

// Type alias
type Student = [string, boolean, number, Date];
let student1: Student = ["James", true, 50, new Date];
console.log(student1);

type Point = {
  x: number,
  y: number,
};
let pt: Point = {x: 100, y: 100};
let axis: Point = {x: 1000, y: -500};
console.log(pt);
console.log(axis);

// Interface
interface Person {
  id: number,
  firstName: string,
  lastName: string
}

let getName = (person: Person) => {
  return `${person.firstName} ${person.lastName}`;
}

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
console.log(FULLNAME);
console.log(FULLNAME2);

// Class annotation
class Teacher {
  id: number;
  name: string;
  subject: string;

  constructor(id: number, name: string, subject: string){
    this.id = id;
    this.name = name;
    this.subject = subject;
  }

  getSubject(): string {
    return `${this.name} teaches the subject ${this.subject}`;
  }
}

let teacher = new Teacher(12, 'Jamie', "Maths");
console.log(teacher.getSubject());



class Job {
  constructor(public id: number, public name: string, public job: string){
    this.id = id;
    this.name = name;
    this.job = job;
  }

  getJobTitle(): string {
    return `${this.name} works as a ${this.job}`;
  }
}

let jobTitle = new Job(55, 'Jamie', "Software Developer");
console.log(jobTitle.getJobTitle());