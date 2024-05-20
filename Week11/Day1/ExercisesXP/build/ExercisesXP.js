"use strict";

//Exercise 1: Hello, World! Program
//Create a TypeScript program that logs the message “Hello, World!” to the console.
const helloWorld = 'Hello world!';
console.log(helloWorld);



//Exercise 2: Type Annotations
//Define a variable age of type number and a variable name of type string, and log them to the console.
const myAge = 30;
const myName = "John Smith";
console.log("Name: ".concat(myName, ", Age: ").concat(myAge));



//Exercise 3: Union Types
//Use union types to declare a variable that can hold either a string or a number.
let id;
id = "123ABC"; // valid, id is a string
console.log(id); // Output: 123ABC
id = 456; // valid, id is a number
console.log(id); // Output: 456



//Exercise 4: Control Flow with if...else
//Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
function checkNumber(number) {
    if (number > 0) {
        return "positive";
    } else if (number < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

console.log(checkNumber(10));  // Output: positive
console.log(checkNumber(-5));  // Output: negative
console.log(checkNumber(0));   // Output: zero


//Exercise 5: Function Overloading
//Create a function called add that can add two numbers together or concatenate two strings.
// Function implementation
function add(a, b) {
    return a + b;
}

// Testing the function
let sum = add(5, 10); // Should return 15
let concatenated = add("Hello, ", "world!"); // Should return "Hello, world!"

console.log(sum); // 15
console.log(concatenated); // "Hello, world!"




//Exercise 6: Tuple Types
//Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
function getDetails(myName, age) {
    const greeting = `Hello, ${myName}!`;
    return [myName, age, greeting];
}

// Example usage:
const [name, age, greeting] = getDetails("John", 30);
console.log(myName); // John
console.log(age); // 30
console.log(greeting); // Hello, John!



//Exercise 7: Object Type Annotations
//Create a function createPerson that returns an object representing a person, with properties for name and age, using object type annotations.
function createPerson(name, age) {
    return { name: name, age: age };
}


const person = createPerson("John Doe", 35);
console.log(person); // Output: { name: 'John Doe', age: 35 }




//Exercise 8: Type Assertions
//Given an HTML element, use a type assertion to cast it to a specific type and access its properties.
// Assume you have an HTML element with id 'myElement'
//const myElement = document.getElementById('myElement');
//if (myElement instanceof HTMLInputElement) {
    //console.log(myElement.value);
//}


//Exercise 9: switch Statement with Complex Conditions
//Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.
function getAction(userRole) {
    let action;
    switch (userRole) {
        case 'admin':
            action = 'Admin actions';
            break;
        case 'editor':
        case 'author':
            action = 'Edit content';
            break;
        case 'viewer':
            action = 'View content';
            break;
        default:
            action = 'No action';
            break;
    }
    return action;
}


console.log(getAction('admin')); // Output: Admin actions
console.log(getAction('editor')); // Output: Edit content
console.log(getAction('author')); // Output: Edit content
console.log(getAction('viewer')); // Output: View content
console.log(getAction('guest')); // Output: No action




//Exercise 10: Function Overloading with Default Parameters
//Create an overloaded function greet that can either take a name and greet the person, or take no arguments and return a default greeting.
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return 'Hello, there!';
    }
}

console.log(greet()); // Output: Hello, there!
console.log(greet("Alice")); // Output: Hello, Alice!