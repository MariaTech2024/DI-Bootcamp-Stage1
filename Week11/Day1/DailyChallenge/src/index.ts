//Daily Challenge: Type Guard with Union Types
//Create a function that uses type guards to handle different types of inputs from a union type and perform specific operations based on the input type.

function processInput(input: number | string | boolean): number | string | boolean {
    if (typeof input === 'number') {
        return input * input; // Return square of the number
    } else if (typeof input === 'string') {
        return input.toUpperCase(); // Return uppercase version of the string
    } else if (typeof input === 'boolean') {
        return !input; // Return negated boolean value
    } else {
        throw new Error('Unsupported input type'); // Throw error for unsupported types
    }
}

console.log(processInput(5)); // Output: 25
console.log(processInput("hello")); // Output: "HELLO"
console.log(processInput(true)); // Output: false

