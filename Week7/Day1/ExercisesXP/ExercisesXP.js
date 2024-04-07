//EXERCISE 1: Comparison
//Create a function called compareToTen(num) that takes a number as an argument.
function compareToTen(num) {
    return new Promise((resolve, reject) => {
    //The promise resolves if the argument is less than or equal to 10
      if (num <= 10) {
        resolve(`${num} is less than or equal to 10.`);
    //The promise rejects if argument is greater than 10.
      } else {
        reject(`${num} is greater than 10.`);
      }
    });
  }

//In the example, the promise should reject
compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

//In the example, the promise should resolve 
compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));



//EXERCISE 2: Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 4000);// 4 seconds delay
});

promise.then(result => console.log(result));//Output "success" after 4 seconds



//EXERCISE 3: Resolve & Reject
//Create a promise that will resolve itself with a value of 3.
const resolvedPromise = Promise.resolve(3);
//Create a promise that will reject itself with the string “Boo!”
const rejectedPromise = Promise.reject('Boo!');

resolvedPromise.then(value => console.log(value));  // Output: 3
rejectedPromise.catch(error => console.log(error)); // Output: Boo!