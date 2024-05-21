//Exercise 1: Class with Access Modifiers
//Create a class Person with private, protected, and public properties. Include a constructor to initialize the properties and a method that returns the full name of the person.

class Person {
    // Private properties
    private firstName: string;
    private lastName: string;

    // Public property
    public age: number;

    // Protected property
    protected address: string;

    // Constructor to initialize the properties
    constructor(firstName: string, lastName: string, age: number, address: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    // Method to return the full name of the person
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('John', 'Doe', 30, '123 Main St');
console.log(person.getFullName()); // Output: John Doe
console.log(person.age);           // Output: 30