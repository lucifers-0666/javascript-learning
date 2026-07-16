// this is for understanding the stringes in javascript

// there are three ways to create a string in JavaScript:
let str = "Hello, World!";
console.log(str); // Output: Hello, World

let str1 = 'this is a string';
console.log(str1); // Output: this is a string

let str2 = `this is a  anther string`;
console.log(str2); // Output: this is a string

// string use index to access the characters in a string. The index starts at 0 for the first character, 1 for the second character, and so on.
let str3 = "this is demo string for understanding the stringes in javascript";
console.log(str3[0]);
console.log(str3[7]);

// understand of template literals in javascript
let name = "Alice";
let age = 25;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Output: Hello, my name is Alice and I am 25 years old.

// ${} this is call string interpolation in javascript. it is used to insert the value of a variable or an expression into a string. it is used with template literals (backticks) to create dynamic strings that can include variables and expressions.
