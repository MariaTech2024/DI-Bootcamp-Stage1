//EXERCISE 1: Scope
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
//#1.1 - you'll see an alert displaying "inside the funcOne function 3"
//#1.2 - you'll get an error because variables declared with const cannot be reassigned. 



// #2
let a = 0;
function funcTwo() {
    a = 5;
}
function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

//#2.1 - run in the console:
funcThree() // you'll get an alert displaying "inside the funcThree function 0"
funcTwo() //updates the value of a to 5.
funcThree()//you'll get an alert displaying "inside the funcThree function 5"
//#2.2 - you'll get an error because variables declared with const cannot be reassigned. 


// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

//#3.1 - run in the console:
funcFour() //sets the global variable a to the string "hello"
funcFive() //you'll get an alert displaying "inside the funcFive function hello"



// #4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

//#4.1 - run in the console:
funcSix() //you'll see an alert displaying "inside the funcSix function test"
//#4.2. - you'll get an error because const variables can't be reassigned after they have been initialized


// #5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

//#5.1 - you'll get two alerts: "in the if block 5" and "outside of the if block 2"
//#5.2 - you'll get an error because const variables can't be reassigned after they have been initialized



// EXERCISE 2: Ternary Operator
//Transform the winBattle() function to an arrow function.
const winBattle = () => {
    return true;
}
//Create a variable called experiencePoints.
//If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);


// EXERCISE 3: Is it a string?
//Write an arrow function that checks whether the value of the argument passed, is a string or not. 
//The function should return true or false
const isString = (value) => {
    return typeof value === 'string';
}
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false


// EXERCISE 4:  Find the sum
//Create an arrow function that receives two numbers as parameters and returns the sum.

const sum = (a, b) => a + b;
console.log(sum(2, 5))



// EXERCISE 5:  Kg and grams
//First, use function declaration and invoke it.
function kgToGramsDeclaration(weightInKg) {
    return weightInKg * 1000;
}
console.log(kgToGramsDeclaration(2)); // Output: 2000

//Then, use function expression and invoke it.
const kgToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
};
console.log(kgToGramsExpression(2)); // Output: 2000

//Write in a one line comment, the difference between function declaration and function expression.
//Function declarations are available everywhere in their scope, even before they're declared in the code. Function expressions cannot be used before they're defined.
//Finally, use a one line arrow function and invoke it.
const kgToGramsArrow = weightInKg => weightInKg * 1000;

console.log(kgToGramsArrow(2)); // Output: 2000



// EXERCISE 6: Fortune teller
//Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kid.`;
    document.getElementById('fortune').innerText = sentence;
})(1, 'Alexander', 'Haifa', 'Full-Stack Developer');



// EXERCISE 7: Welcome
//Create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function (name){
    let userDiv=document.createElement('div');
    let userText=document.createTextNode(`Welcome ${name}!`);
    let userImg=document.createElement('img');
    userImg.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/c/c4/Bruce_Willis_by_Gage_Skidmore_3.jpg');
    userImg.setAttribute('width', '250');
    userImg.setAttribute('height', '350'); 
    userDiv.appendChild(userText);
    userDiv.appendChild(userImg);
    document.getElementsByTagName('nav')[0].appendChild(userDiv);
    })('Bruce');


// EXERCISE 8: Juice Bar
// Part I
//The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
function makeJuice(size) {
    //The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        document.getElementById('output').innerHTML = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
    }
    //Invoke the inner function ONCE inside the outer function.
    addIngredients('apple', 'orange', 'banana');
}
//Then invoke the outer function in the global scope. 
makeJuice('medium');

// Part II
//In the makeJuice function, create an empty array named ingredients.
function makeJuice(size) {
    let ingredients = [];
//The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }
//Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
    function displayJuice() {
        document.getElementById('output').innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    }
//The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. 
    addIngredients('apple', 'orange', 'banana');
    addIngredients('strawberry', 'cherry', 'peach');
    //Then invoke once the displayJuice function. 
    displayJuice();
}
//Finally, invoke the makeJuice function in the global scope. 
makeJuice('large');