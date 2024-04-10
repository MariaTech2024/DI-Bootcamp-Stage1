//Exercise 5: Creating and Using a Custom Module
//In math.js, define a simple custom module that exports functions for addition and multiplication.
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  multiply
};
  