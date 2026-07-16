console.log(score) // in javascript if we declare a variable but do not assign any value to it then it will be undefined by default.
let score = 100;
// so in this case we are trying to access the variable score before declaring it and assigning a value to it. so it will give us an error because of temporal dead zone (TDZ) in javascript. TDZ is the time between the start of the block and the point where the variable is declared and assigned a value. during this time we can not access the variable because it is in TDZ.
// like js engine divide code like this 
/*{
    // TDZ starts

    console.log(age); // Error

    let age = 25;

    // TDZ ends
}*/

console.log(a)
var a = 10