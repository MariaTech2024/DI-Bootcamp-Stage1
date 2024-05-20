//Exercise 1: Union Types
//Create a function formatValue that accepts a parameter which can be either a string or a number. The function should return the input value formatted as a string, with different formatting based on the type of the input.

function formatValue(input) {
    if (typeof input === 'string') {
        // Format string input
        return "\"".concat(input, "\"");
    }
    else if (typeof input === 'number') {
        // Format number input
        return input.toFixed(2);
    }
    else {
        // Handle other types
        throw new Error('Unsupported input type');
    }
}
console.log(formatValue("hello")); // Output: "hello"
console.log(formatValue(3.14159)); // Output: 3.14



//Exercise 2: Array Type Annotations
//Create a function sumNumbers that takes an array of numbers as an argument and returns the sum of all numbers in the array.
function sumNumbers(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumNumbers(numbers)); // Output: 15



//Exercise 3: Type Aliases
//Create a type alias User that represents an object with name and age properties. Then, create a function introduceUser that takes a User object as an argument and returns a greeting message.

function introduceUser(user) {
    return `Hello, my name is ${user.name} and I am ${user.age} years old.`;
}

// Example usage
const user1 = { name: "Alice", age: 30 };
const user2 = { name: "Bob", age: 25 };

console.log(introduceUser(user1)); // Output: Hello, my name is Alice and I am 30 years old.
console.log(introduceUser(user2)); // Output: Hello, my name is Bob and I am 25 years old.



//Exercise 4: Optional Parameters
//Create a function greetUser that takes a name as a required parameter and a greeting as an optional parameter. The function should return a greeting message, using the provided greeting if available or a default greeting otherwise.

function greetUser(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`; // Default greeting
    }
}

console.log(greetUser("John")); // Output: Hello, John!
console.log(greetUser("Emma", "Good morning")); // Output: Good morning, Emma!



//Exercise 5: Function Overloading
//Create an overloaded function calculate that can either take two numbers and return their sum or take two strings and return their concatenation.
function calculate(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else if (typeof x === 'string' && typeof y === 'string') {
        return x + y;
    }
    else {
        throw new Error('Invalid argument types. Must be either (number, number) or (string, string).');
    }
}

console.log(calculate(5, 3)); // Output: 8
console.log(calculate('Hello', ' World')); // Output: Hello World
