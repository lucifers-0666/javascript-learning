console.log(x)
var x = 10  // in var declaration, the variable is hoisted to the top of its scope and initialized with undefined. So when we try to access it before the declaration, it will return undefined instead of throwing an error.

console.log(y)
let y = 20 // in let declaration, the variable is hoisted to the top of its scope but not initialized. So when we try to access it before the declaration, it will throw a ReferenceError because it is in the temporal dead zone (TDZ).

console.log(z)
const z = 30 // in const declaration, the variable is hoisted to the top of its scope but not initialized. So when we try to access it before the declaration, it will throw a ReferenceError because it is in the temporal dead zone (TDZ).