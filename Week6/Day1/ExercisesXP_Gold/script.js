//EXERCISE 1 : Nested functions
//Create nested arrow functions.
let landscape = () => {
    let result = "";
  
    let flat = (x) => {
      for (let count = 0; count < x; count++) {
        result = result + "_";
      }
    };
  
    let mountain = (x) => {
      result = result + "/";
      for (let counter = 0; counter < x; counter++) {
        result = result + "'";
      }
      result = result + "\\";
    };
  
    flat(4);
    mountain(4);
    flat(4);
  
    return result;
  };
  
  console.log(landscape());


//EXERCISE 2: Closure
//Analyse the code below
const addTo = x => y => x + y;//takes y and returns 10 + y
const addToTen = addTo(10);
addToTen(3);//the outcome of the last line would be 13


//EXERCISE 3: Currying
//Analyse the code below
const curriedSum = (a) => (b) => a + b//takes b and returns 30 + b
curriedSum(30)(1)// outcome of the last line would be 31

//EXERCISE 4: Currying
//Analyse the code below
const curriedSum = (a) => (b) => a + b;//takes b and returns 5 + b
const add5 = curriedSum(5);
add5(12);//the outcome of the last line would be 17


//EXERCISE 5: Composing
//Analyse the code below
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;//add 1 to a number
const add5 = (num) => num + 5;//add5 to a number 
compose(add1, add5)(10)//composes add1 and add5, and applies the resulting function to 10
//the outcome of the last line would be 16