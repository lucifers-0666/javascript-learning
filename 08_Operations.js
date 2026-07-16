// this is for arithmetic operations 
/*
it have addition, subtraction, multiplication, division and modulus operations
+ , -, *, /, %
Now this is comparison operators 
< , >, <=, >=, ==, ===, !=, !==
Now this is logical operators
And (&&), Or (||), Not (!)

assignment operators
=, +=, -=, *=, /=, %=

unary operators
++, --, +, -

ternary operator
condition ? expression1 : expression2

*/
let a = 10;
let b = 5;

add = a + b; // addition
sub = a - b; // subtraction
mul = a * b; // multiplication
div = a / b; // division
mod = a % b; // modulus
console.log("\n");
console.log("Addition: " + add);
console.log("Subtraction: " + sub);
console.log("Multiplication: " + mul);
console.log("Division: " + div);
console.log("Modulus: " + mod);

// comparison operators
let c = 10;
let d = 20;
console.log("\n");
console.log("c < d: " + (c < d));
console.log("c > d: " + (c > d));
console.log("c <= d: " + (c <= d));
console.log("c >= d: " + (c >= d));
console.log("c == d: " + (c == d));
console.log("c === d: " + (c === d));
console.log("c != d: " + (c != d));
console.log("c !== d: " + (c !== d));
console.log("\n");
// logical operators
let e = true;
let f = false;

console.log("e && f: " + (e && f));
console.log("e || f: " + (e || f));
console.log("!e: " + (!e));
console.log("\n");

// assignment operators
let g = 10;
console.log("Initial value of g: " + g);
g += 5; // g = g + 5
g -= 2; // g = g - 2
g *= 3; // g = g * 3
g /= 2; // g = g / 2
g %= 4; // g = g % 4
console.log("Final value of g: " + g);
console.log("\n");
// unary operators
let h = 5;
console.log("Initial value of h: " + h);
h++;
console.log("\n")
// ternary operator
let i = 10;
let j = 20;
let max = (i > j) ? i : j;
console.log("Max value: " + max);
