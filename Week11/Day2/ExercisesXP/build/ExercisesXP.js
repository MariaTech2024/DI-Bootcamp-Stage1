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
