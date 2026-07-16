// Function in javascript
// A function is a block of code that can be defined once and executed whenever it is called. Functions can take parameters, perform operations, and return values. They help in organizing code, promoting reusability, and improving readability.

function greet(){
    console.log("Hello, welcome to the world of JavaScript!");
}
greet();

function add(a,b){
    let sum = a + b;
    console.log("The sum of " + a + " and " + b + " is: " + sum);
}
add(10,2)
add(5,7)

// arrow function : A shorter syntax for writing functions in JavaScript. Arrow functions are anonymous and change the way 'this' binds in functions.
const multiply = (x, y) => {
    return x * y;
}
let val = multiply(4, 5); // Output: 20
console.log(val);


// defult parameters : Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.
function sum(a = 0, b = 0) {
     total = a + b;
    console.log("The sum of " + a + " and " + b + " is: " + total);
}
sum(5, 10); // Output: 15
/*
rest parameters : Rest parameters allow a function to accept an indefinite number of arguments as an array, 
providing a way to handle multiple inputs.*/


function calculateSum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    console.log("The total sum is: " + total);
}
calculateSum(1, 2, 3, 4, 5); // Output: 15




/*
spread operator : The spread operator allows an iterable such as an array or string to be expanded in 
places where zero or more arguments (for function calls) or elements (for array literals) are expected. */ 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]






// return statement : The return statement is used to specify the value that a function should output when it is called. 
// It ends the function execution and sends a value back to the caller.
function square(num) {
    return num * num;
}
let result = square(5); // Output: 25
console.log(result);


// First-class functions : In JavaScript, functions are first-class citizens, meaning they can be treated like any other variable. 
// They can be assigned to variables, passed as arguments to other functions, and returned from functions.
function sayHello() {
    console.log("Hello!");
}
let greetFunction = sayHello;
greetFunction(); // Output: Hello!

/* Higher-order functions : In JavaScript, a higher-order function is a function that can take other 
functions as arguments or return a function as its result. */

function higherOrderFunction(callback) {
    callback();
}
function callbackFunction() {
    console.log("This is a callback function.");
}
higherOrderFunction(callbackFunction); // Output: This is a callback function.


// Pure vs Impure function 
function pureFunction(a, b) {
    return a + b; // This function always produces the same output for the same inputs and has no side effects.
}
function impureFunction(a) {
    console.log("Current time: " + new Date());
    return a + Math.random(); // This function produces different outputs for the same input and has side effects (logging).
}

pureFunction(2, 3); // Output: 5
impureFunction(5); // Output: Current time: [current date and time] and a random number added to 5

// closure : A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    }
}
const newFunction = outerFunction("outside");
newFunction("inside"); // Output: Outer Variable: outside, Inner Variable: inside


// iexical scoping : In JavaScript, lexical scoping means that the accessibility of variables is determined by the structure of the code (the location where functions and blocks are defined) rather than the order in which they are called.
function lexicalScopeExample() {
    let outerVar = "I am outside!";
    function innerFunction() {
        let innerVar = "I am inside!";
        console.log(outerVar); // Accessible due to lexical scoping
        console.log(innerVar);
    }
    innerFunction();
}
lexicalScopeExample(); // Output: I am outside!, I am inside!

// IIFE (Immediately Invoked Function Expression) : An IIFE is a function that is defined and executed immediately after its creation. 
// It is often used to create a new scope and avoid polluting the global namespace.
(function() {
    console.log("This is an IIFE!");
})(); // Output: This is an IIFE!


// Function Hoisting : In JavaScript, function hoisting refers to the behavior where function declarations are moved to 
// the top of their containing scope during the compilation phase. This allows functions to be called before they are defined in the code.
hoistedFunction(); // Output: This function has been hoisted!
function hoistedFunction() {
    console.log("This function has been hoisted!");
}

// Function Expressions : A function expression is a way to define a function in JavaScript. 
// Unlike function declarations, function expressions are not hoisted, meaning they cannot be called before they are defined.
const functionExpression = function() {
    console.log("This is a function expression.");
};
functionExpression(); // Output: This is a function expression.

// in function hosting, function declarations are hoisted to the top of their scope, allowing them to be called before they are defined.
//  However, function expressions are not hoisted, so they must be defined before they can be called.

// function hosting is not working in function expressions because they are treated as variables, and only the variable declaration is hoisted, not the function definition itself.

