//Create another file named shop.js. In shop.js, require the product objects from the products.js module.
const products = require('./products.js');
  //Create a function that takes a product name as a parameter and searches for the corresponding product object.
  function findProduct(productName) {
    return products.find(product => product.name === productName);
  }

  //Call this function with different product names and print the details of the products.
  console.log(findProduct('Samsung Galaxy S24')); //{ name: 'Samsung Galaxy S24', price: 3150, category: 'Mobile Phones' }
  console.log(findProduct('iPhone 15')); //{ name: 'iPhone 15', price: 3390, category: 'Mobile Phones' }

