"use strict";

//Exercise 1: Class with Access Modifiers
//Create a class Person with private, protected, and public properties. Include a constructor to initialize the properties and a method that returns the full name of the person.
class Person {
    // Constructor to initialize the properties
    constructor(firstName, lastName, age, address) {
        // Private properties
        this.firstName = firstName;
        this.lastName = lastName;
        // Public property
        this.age = age;
        // Protected property
        this.address = address;
    }
    // Method to return the full name of the person
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('John', 'Doe', 30, '123 Main St');
console.log(person.getFullName()); // Output: John Doe
console.log(person.age); // Output: 30
// console.log(person.address);    // Error: Property 'address' is protected
// console.log(person.firstName);  // Error: Property 'firstName' is private
// console.log(person.lastName);   // Error: Property 'lastName' is private




//Exercise 2: Extending Interfaces
//Create an interface Vehicle with common properties and methods, then create another interface Car that extends Vehicle and includes additional properties specific to a car.
// Implement the Sedan class that adheres to the Car interface
class Sedan {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    // Implement the start method
    start() {
        return `The ${this.make} ${this.model} is starting.`;
    }
}

const mySedan = new Sedan('Toyota', 'Camry', 4);
console.log(mySedan.start()); // Output: The Toyota Camry is starting.
console.log(mySedan.make); // Output: Toyota
console.log(mySedan.model); // Output: Camry
console.log(mySedan.numberOfDoors); // Output: 4




//Exercise 3: Using Intersection Types
//Create a function that combines two objects using intersection types and returns a new object containing all properties from both objects.
function combineObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Engineer", city: "New York" };
const combinedObject = combineObjects(obj1, obj2);
console.log(combinedObject);
// Output: { name: 'Alice', age: 25, job: 'Engineer', city: 'New York' }




//Exercise 4: Using Generics with Classes
//Create a generic class Stack that represents a stack data structure. The class should support operations like push, pop, and isEmpty.
class Stack {
    constructor() {
        this.items = [];
    }
    // Push method to add an element of type T to the stack
    push(item) {
        this.items.push(item);
    }
    // Pop method to remove the top element from the stack and return it
    pop() {
        return this.items.pop();
    }
    // isEmpty method to check whether the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
    // Optional: peek method to view the top element without removing it
    peek() {
        return this.items[this.items.length - 1];
    }
}

const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // Output: 20
console.log(numberStack.isEmpty()); // Output: false
console.log(numberStack.pop()); // Output: 10
console.log(numberStack.isEmpty()); // Output: true
const stringStack = new Stack();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.pop()); // Output: world
console.log(stringStack.isEmpty()); // Output: false
console.log(stringStack.pop()); // Output: hello
console.log(stringStack.isEmpty()); // Output: true




//Exercise 5: Using Generics with Functions
//Create a generic function filterArray that accepts an array and a predicate function, and returns a new array containing elements that satisfy the predicate.
function filterArray(array, predicate) {
    const result = [];
    for (const element of array) {
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}

// Filtering an array of numbers
const numbers = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Output: [2, 4]
// Filtering an array of strings
const words = ["hello", "world", "typescript", "filter"];
const containsO = (word) => word.includes("o");
const wordsWithO = filterArray(words, containsO);
console.log(wordsWithO); // Output: ["hello", "world"]