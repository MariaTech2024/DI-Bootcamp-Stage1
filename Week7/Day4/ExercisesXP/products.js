//Exercise 1: Multiple Exports and Import using CommonJS syntax
//Create a file named products.js.Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.
const products = [
    { name: 'Samsung Galaxy S24', price: 3150, category: 'Mobile Phones' },
    { name: 'iPhone 15', price: 3390, category: 'Mobile Phones' },
    { name: 'Xiaomi', price: 3980, category: 'Mobile Phones' },
];

//Export this array using the Common JS syntax.
module.exports = products;
