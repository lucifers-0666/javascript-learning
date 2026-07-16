// // type of variabel 

// const accId = 1234567890; // we can not change the value of accId because it is declared with const 
// let accName = "John Doe"; // string
// var isActive = true; // boolean
// city = "rajkot"

// console.log(city);
// accName= "zaid amreliya"
// city = "new york"

// console.table({city,accId,accName,isActive})

// // console.log(city);
// // console.log(accId);
// // console.log(accName);
// // console.log(isActive);

// let accountStat 
// console.log(accountStat) // in javascript if we declare a variable but do not assign any value to it then it will be undefined by default.

var a = 10
{// this is block scope
    let b = 20
    console.log(b)

}
console.log(a) // in javascript if we declare a variable but do not assign any value to it then it will be undefined by default.

let a1 = 10
a1 = 20
console.log(a1) // this is example for variable reassigning in javascript. we can reassign the value of variable if it is declared with let or var but we can not reassign the value of variable if it is declared with const.


var b1 = 30
var b2 = 40
console.log(b2) //this is example for variable redeclaring in javascript. we can redeclare the variable if it is declared with var but we can not redeclare the variable if it is declared with let or const.

