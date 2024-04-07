//Create two functions. Each function should return a promise.
//The first function called makeAllCaps(), takes an array of words as an argument
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        //If all the words in the array are strings, resolve the promise.
        if (words.every(word => typeof word === 'string')) {
            //the array of words uppercased. 
            resolve(words.map((word) => word.toUpperCase()));
        //Reject the promise with a reason.
        } else {
            reject('Not all items in the array are strings!');
        }
    });
}

//The second function called sortWords(), takes an array of words uppercased as an argument 
function sortWords(words) {
    return new Promise((resolve, reject) => {
        //If the array length is bigger than 4, resolve the promise.
        if (words.length >= 4) {
            //the array of words sorted in alphabetical order. 
            resolve(words.sort());
        //reject the promise with a reason.
        } else {
            reject('The array is too short!');
        }
    });
}

//Case1
const arr = [1, "pear", "banana"];
makeAllCaps(arr)
      .then(sortWords)
      .then(result => console.log(result))
      .catch(error => console.error(error));//Not all items in the array are strings!

//Case2
const arr1 = ["apple", "pear", "banana"];
makeAllCaps(arr1)
      .then(sortWords)
      .then(result => console.log(result))
      .catch(error => console.error(error));//The array is too short!      

//Case3
const arr2 = ["apple", "pear", "banana", "melon", "kiwi"];
makeAllCaps(arr2)
      .then(sortWords)
      .then(result => console.log(result))
      .catch(error => console.error(error));
//["APPLE","BANANA", "KIWI", "MELON", "PEAR"]