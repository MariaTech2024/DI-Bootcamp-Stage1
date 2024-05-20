"use strict";
//Daily Challenge: Type Guard with Union Types
//Create a function that uses type guards to handle different types of inputs from a union type and perform specific operations based on the input type.

function processInput(input) {
    if (typeof input === 'number') {
        return input * input; // square the number
    }
    else if (typeof input === 'string') {
        return input.toUpperCase(); // convert string to uppercase
    }
    else if (typeof input === 'boolean') {
        return !input; // negate the boolean value
    }
    else {
        throw new Error('Unsupported input type'); // handle unsupported types
    }
}

console.log(processInput(5)); // Output: 25
console.log(processInput("hello")); // Output: "HELLO"
console.log(processInput(true)); // Output: false
