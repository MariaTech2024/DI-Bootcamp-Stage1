//Exercise 1: Class Inheritance with Method Overriding
//Create a base class Animal with a method speak() that returns a string. Create a derived class Dog that extends Animal and overrides the speak() method to return a different string.
class Animal {
    speak(): string {
        return "The animal speaks";
    }
}
class Dog extends Animal {
    speak(): string {
        return "The dog barks";
    }
}
let animal = new Animal();
console.log(animal.speak()); // Output: The animal speaks

let dog = new Dog();
console.log(dog.speak()); // Output: The dog barks




//Exercise 2: Interface with Optional Properties
//Create an interface User with required properties id and name and an optional property email. Then, create a function that accepts an object of type User and returns a string with the user’s information.
interface User {
    id: number;
    name: string;
    email?: string;
}

function getUserInfo(user: User): string {
    let userInfo = `ID: ${user.id}, Name: ${user.name}`;
    if (user.email) {
        userInfo += `, Email: ${user.email}`;
    }
    return userInfo;
}

let user1: User = { id: 1, name: "John" };
console.log(getUserInfo(user1)); // Output: ID: 1, Name: John

let user2: User = { id: 2, name: "Alice", email: "alice@example.com" };
console.log(getUserInfo(user2)); // Output: ID: 2, Name: Alice, Email: alice@example.com




//Exercise 3: Type Guard with Union Types
//Create a function printInfo that accepts a union type of number or string and uses a type guard to handle each type differently.
function printInfo(input: number | string): void {
    if (typeof input === 'number') {
        console.log(`The number is: ${input}`);
    } else if (typeof input === 'string') {
        console.log(`The string is: ${input}`);
    }
}

printInfo(10); // Output: The number is: 10
printInfo("Hello"); // Output: The string is: Hello



//Exercise 4: Generic Function with Constraints
//Create a generic function filterByProperty that accepts an array of objects and a property name. The function should filter the array and return a new array containing only objects with the specified property.
function filterByProperty<T, K extends keyof T>(array: T[], property: K): T[] {
    return array.filter(obj => obj[property] !== undefined);
}

interface Person {
    name: string;
    age?: number;
}

const people: Person[] = [
    { name: "John", age: 30 },
    { name: "Alice" },
    { name: "Bob", age: 25 }
];

const filteredPeople = filterByProperty(people, 'age');
console.log(filteredPeople); // Output: [{ name: "John", age: 30 }, { name: "Bob", age: 25 }]




//Exercise 5: Using Generics with Classes and Interfaces
//Create a generic interface Store<K, V> with methods set(key: K, value: V): void and get(key: K): V | undefined. Then, create a generic class KeyValueStore<K, V> that implements the Store<K, V> interface.
interface Store<K, V> {
    set(key: K, value: V): void;
    get(key: K): V | undefined;
}

class KeyValueStore<K, V> implements Store<K, V> {
    private store: Map<K, V>;

    constructor() {
        this.store = new Map<K, V>();
    }

    set(key: K, value: V): void {
        this.store.set(key, value);
    }

    get(key: K): V | undefined {
        return this.store.get(key);
    }
}

const store = new KeyValueStore<number, string>();
store.set(1, "Apple");
store.set(2, "Banana");

console.log(store.get(1)); // Output: Apple
console.log(store.get(2)); // Output: Banana
console.log(store.get(3)); // Output: undefined