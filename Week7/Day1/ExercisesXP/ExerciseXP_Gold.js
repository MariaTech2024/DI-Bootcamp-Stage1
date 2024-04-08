//Exercise 1 : Promise.all()
//Use the Promise.all that will accept the 3 promises below.
//The method should accept an array of promises and return an array of resolved values. 

const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(42); 
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});


Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // Output: Array [3, 42, "foo"]
  })
  .catch(error => {
    console.error("One or more promises were rejected:", error);
  });

//Exercise 2 : Analyse Promise.all()
//Analyse the code below - what will be the output?
function timesTwoAsync(x) {//function that takes a number x and returns a Promise that resolves to x * 2
    return new Promise(resolve => resolve(x * 2));
  }
  
  const arr = [1, 2, 3]; 
  const promiseArr = arr.map(timesTwoAsync); // Creates an array of promises
  
  Promise.all(promiseArr)
    .then(result => {
      console.log(result); // Logs: [2, 4, 6]
    });