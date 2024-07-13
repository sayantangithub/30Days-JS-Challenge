//Activity 1: Variable declaration

//Task 1:
var a = 10;
console.log(a);

//Task2:
let b = "Task2 let variable";
console.log(b);

//Activity 2: Constant declaration

//Task3:
const c = true;
console.log(c);

//Activity 3: Data Types
//Task4:
let d = 10;
let e = "String Example";
let f = false;
let g = null;
let h = [1, 2, 3, 4, 5];

console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);

//Activity 4: Reassigning Variable
//Task5:
let i = 10;
console.log(i);
i = 20;
console.log(i);

//Activity 5: understanding const
//Task6:

const j = 100;
console.log(j);
// j = 200;
// console.log(j);//TypeError: Assignment to constant variable.

const number = 30;
const string = "string";
const boolean = true;
const obj = {
  name: "Sayantan",
  city: "Howrah",
};
const arr = [3, 5, 7];

console.log("value:", number, "type:", typeof number);
console.log("value:", string, "type:", typeof string);
console.log("value:", boolean, "type:", typeof boolean);
console.log("value:", obj, "type:", typeof obj);
console.log("value:", arr, "type:", typeof arr);

// let
let info = "Hello, world!";
console.log(info); // Hello, world!

info = "This info has been changed.";
console.log(info); // This info has been changed.

// const
const gravity = 9.8;
console.log(gravity); // 9.8

gravity = 10; // This will cause an error
console.log(gravity); // This line will not execute
