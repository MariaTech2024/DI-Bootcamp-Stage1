//Daily Challenge : Union Type Validator
//Create a function called validateUnionType that accepts a value and an array of allowed types (as strings). The function should check if the value is of one of the allowed types and return true if it is; otherwise, it should return false. Use this function to validate the type of variables in a program.
function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    return allowedTypes.includes(valueType);
}

// Demonstrating the usage of validateUnionType function

// Example variables with different types
const str: string = "Hello, world!";
const num: number = 42;
const bool: boolean = true;
const obj: object = { key: "value" };
const arr: any[] = [1, 2, 3];
const func: Function = () => { console.log("This is a function"); };

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
