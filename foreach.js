// ForEach : is a method that executes a provided function once for each array element. It is used to iterate over the elements of an array and perform a specific action on each element.
// callback function : is a function that is passed as an argument to another function and is executed after the completion of that function. In the case of forEach, the callback function is executed for each element in the array.


/*
forEach() is an array method that executes a callback function once for each element in an array.

Interview Definition

forEach() is an array method that iterates over every element of an array and executes a callback function for each element. 
It does not return a new array.


What is a Callback Function?

A callback function is simply a function that is passed as an argument to another function, so that the receiving function can call it later.

Interview Definition

A callback function is a function passed as an argument to another function, which is then invoked by that function at an appropriate time.
*/
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});