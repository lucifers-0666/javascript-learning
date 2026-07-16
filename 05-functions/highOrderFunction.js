/*
What is a Higher-Order Function (HOF)?
Interview Definition

A Higher-Order Function is a function that either accepts one or more functions as arguments, returns a function, or both.

This is one of the most important JavaScript interview topics. In fact, methods like forEach(), map(), filter(), reduce(), and even setTimeout() are examples of Higher-Order Functions (HOFs).

*/
// map method : creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// filter method : creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// reduce method : executes a reducer function on each element of the array, resulting in a single output value.
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15