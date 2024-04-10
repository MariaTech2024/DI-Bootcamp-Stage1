//In app.js, require the lodash package and the custom math module.
const _ = require('lodash');
const math = require('./math.js');

//Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.
const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log('Sum:', sum);//Sum: 15

const resultAddition = math.add(4, 5);
console.log('Result of addition:', resultAddition);//Result of addition: 9

const resultMultiplication = math.multiply(4, 5);
console.log('Result of multiplication:', resultMultiplication);//Result of multiplication: 20