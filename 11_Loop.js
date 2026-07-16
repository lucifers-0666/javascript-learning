// A loop is a programming construct that allows you to repeat a block of code multiple times until a specified condition becomes false.

// for loop : is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.

for (let i = 0; i < 5; i++) {
  console.log(`Iteration number: ${i}`);
}

// while loop : is used when the number of iterations is not known beforehand. It continues to execute the block of code as long as the specified condition is true.

let j = 0;
while (j < 5) {
    console.log(`Iteration number: ${j}`);
    j++;
}

// do...while loop : is similar to the while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false.

let k = 0;
do {
    console.log(`Iteration number: ${k}`);
    k++;
} while (k < 5);

// Nested loops : are loops inside other loops. They are used when you need to perform a series of iterations within another series of iterations.

for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 3; n++) {
        console.log(`Outer loop iteration: ${m}, Inner loop iteration: ${n}`);
    }
}
