let object = {
    name: "zaid ",
    age: 20,
    email: "test@gmail.com"
};
//console.log(object.name); // Output: zaid

// acces the key have in it 
//object in we use obj.key so it give error 
for (let key in object) {
    console.log(key, object[key])

}
// copying object 

// spraed oprater : is use to make copy of object
let copyObject = { ...object };
console.log(`this is copy of spared oprater copyObject: ${JSON.stringify(copyObject)}`);

// neated object
let neatedObject = {
    name: "zaid",
    age: 20,
    email: "test@gmail.com",
    address: {
        state: "sindh",
        city: "karachi"
    }
}
console.log(`this is neated object: ${JSON.stringify(neatedObject)}`);

// in spraed oprater we can copy the neated object but it will not copy the neated object it will copy the reference of neated object
let copyNeatedObject = { ...neatedObject };
console.log(`this is copy of neated object: ${JSON.stringify(copyNeatedObject)}`); // so we use JSON.parse(JSON.stringify(neatedObject)) to copy the neated object
let copyNeatedObject2 = JSON.parse(JSON.stringify(neatedObject));
console.log(`this is copy of neated object using JSON.parse(JSON.stringify(neatedObject)): ${JSON.stringify(copyNeatedObject2)}`);

// Object.keys() method is used to get the keys of an object
let keys = Object.keys(object);
console.log(`this is keys of object: ${keys}`);

// Object.values() method is used to get the values of an object
let values = Object.values(object);
console.log(`this is values of object: ${values}`);

// Object.entries() method is used to get the key-value pairs of an object
let entries = Object.entries(object);
console.log(`this is entries of object: ${entries}`);

// diffreance between refeacne copy and deep copy 

/*
In JavaScript, a “reference copy” (shallow copy) shares inner objects with the original, while a deep copy creates a completely independent clone of all nested data.

Core idea
Reference copy / shallow copy: Top-level object/array is new, but nested objects/arrays are still the same references as the original.

Deep copy: New structure where every nested object/array is also cloned, so changes in the copy never affect the original.

Reference / shallow copy
For objects/arrays, JavaScript works with references.

Examples of reference copy / shallow copy:
*/


const original = { a: 1, nested: { x: 10 } };

// Pure reference (no copy)
const ref = original; // ref and original point to same object

// Shallow copy
const shallow = { ...original };        // or Object.assign({}, original)
const arrShallow = originalArray.slice(); // arrays
Behavior:

// Updating top-level on the copy is safe:

// Updating nested objects leaks back:


// Reason: nested in both objects points to the same memory location.

// Deep copy
// Deep copy recursively copies all nested levels:

const original = { a: 1, nested: { x: 10 } };

// Common patterns
const deep1 = structuredClone(original); // modern, browser/Node
const deep2 = JSON.parse(JSON.stringify(original)); // with limitations
// Or manual recursion / libraries like lodash.cloneDeep

