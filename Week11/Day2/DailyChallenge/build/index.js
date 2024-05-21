"use strict";

function validateUnionType(value, allowedTypes) {
    const valueType = typeof value;
    return allowedTypes.includes(valueType);
}

// Demonstrating the usage of validateUnionType function

// Example variables with different types
const str = "Hello, world!";
const num = 42;
const bool = true;
const obj = { key: "value" };
const arr = [1, 2, 3];
const func = () => { console.log("This is a function"); };

// Allowed types
const allowedTypes1 = ["string", "number", "boolean"];
const allowedTypes2 = ["object"];
const allowedTypes3 = ["function"];
const allowedTypes4 = ["string", "number", "object", "function"];

// Validating the types of variables
console.log(validateUnionType(str, allowedTypes1)); // true
console.log(validateUnionType(num, allowedTypes1)); // true
console.log(validateUnionType(bool, allowedTypes1)); // true
console.log(validateUnionType(obj, allowedTypes1)); // false

console.log(validateUnionType(obj, allowedTypes2)); // true
console.log(validateUnionType(arr, allowedTypes2)); // true

console.log(validateUnionType(func, allowedTypes3)); // true

console.log(validateUnionType(str, allowedTypes4)); // true
console.log(validateUnionType(num, allowedTypes4)); // true
console.log(validateUnionType(obj, allowedTypes4)); // true
console.log(validateUnionType(func, allowedTypes4)); // true