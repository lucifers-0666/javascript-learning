// array in javascript 
// array is a special type of object that is used to store multiple values in a single variable. it is a collection of elements, each identified by an index or a key. arrays are used to store lists of data, such as numbers, strings, or objects. they can be created using square brackets [] and can hold any type of data, including other arrays.


let fruits = ["apple", "banana", "orange",1.2, 3];
console.log(fruits); // Output: ["apple", "banana", "orange"]

// length property : returns the number of elements in an array.
console.log(fruits.length); // Output: 3

// push() method : adds one or more elements to the end of an array and returns the new length of the array.
fruits.push("grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// pop() method : removes the last element from an array and returns that element.
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: grape
console.log(fruits); // Output: ["apple", "banana", "orange"]

// shift() method : removes the first element from an array and returns that element.
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: apple
console.log(fruits); // Output: ["banana", "orange"]

// unshift() method : adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "banana", "orange"]

// splice() method : changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
fruits.splice(1, 1, "mango");
console.log(fruits); // Output: ["kiwi", "mango", "orange"]

// slice() method : extracts a section of an array and returns it as a new array, without modifying the original array.
let slicedFruits = fruits.slice(0, 2);
console.log(slicedFruits); // Output: ["kiwi", "mango"]
console.log(fruits); // Output: ["kiwi", "mango", "orange"]

// Sort : sort take alwaye take one function 


// indexOf() method : returns the index of the first occurrence of a specified value in an array. If the value is not found, it returns -1.
console.log(fruits.indexOf("mango")); // Output: 1
console.log(fruits.indexOf("grape")); // Output: -1

// includes() method : determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(fruits.includes("mango")); // Output: true
console.log(fruits.includes("grape")); // Output: false