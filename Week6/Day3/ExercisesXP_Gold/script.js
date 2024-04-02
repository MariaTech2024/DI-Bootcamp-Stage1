//Exercise 1 : keys and values
//Create a function that takes an object and returns the keys and values as separate arrays.
//Return the keys sorted alphabetically, and their corresponding values in the same order.
function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const values = keys.map(key => obj[key]);
    return [keys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));// [["a", "b", "c"], [1, 2, 3]]
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));//[["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));//[["key1", "key2", "key3"], [true, false, undefined]]

//Exercise 2 : Counter class
//Analyze the code below, what will be the output?
// Define a Counter class with a constructor and an increment method
class Counter {
    constructor() {
      this.count = 0; // Initialize count property to 0
    }
  
    increment() {
      this.count++; // Increment the count by 1
    }
  }
  
  // Create a new instance of Counter and assign it to counterOne
  const counterOne = new Counter();
  counterOne.increment(); // Increment counterOne's count to 1
  counterOne.increment(); // Increment counterOne's count to 2
  
  // Assign counterOne to counterTwo, making them references to the same Counter instance
  const counterTwo = counterOne;
  counterTwo.increment(); // Increment the shared count to 3
  
  console.log(counterOne.count); // Output: 3
  // The output is 3 because counterOne and counterTwo refer to the same Counter instance.
  
  