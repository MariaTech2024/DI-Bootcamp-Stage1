//EXERCISE 1: Analyzing the map method
[1, 2, 3].map(num => {//checks if the type of num is 'number'.
    if (typeof num === 'number') return num * 2;//if yes, it multiplies num by 2 and returns the result.
    return ;
  });//[2, 4, 6]


//EXERCISE 2: Analyzing the reduce method
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],//The callback function concatenates each sub-array (cur) to the accumulator (acc) using the concat() method
  );//[1, 2, 0, 1, 2, 3]


//EXERCISE 3: Analyze this code
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);//the callback function of map(), the num parameter represents the current element being processed, and the i parameter represents the index of that element.
    alert(num);//the alert() function pauses the script execution until the user dismisses the alert dialog.
    return num * 2;
})//if the user dismisses the alert after all elements have been processed, i will contain the index of the last element in the array, which in this case is 5 


//EXERCISE 4: Nested arrays
//Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]]. 
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const modifiedArray = array.flat(Infinity);
console.log(modifiedArray);

//Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const modifiedGreeting = greeting.map(subArray => subArray.join(' '));
console.log(modifiedGreeting);

//Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
const stringGreeting = greeting.flat().join(' ');
console.log(stringGreeting); 

//Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const freed = trapped.flat(Infinity);
console.log(freed);