//EXERCISE 1 : Colors
//Display the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.”
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
  });
//Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
if (colors.includes("Violet")) {
    console.log("Yeah");
  } else {
    console.log("No...");
}


//EXERCISE 2 :  Colors #2
//Display the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.”
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    let indexPlusOne = index + 1; 
    let ordinalSuffix = ordinal[0];// Default to "th"
  
    if (indexPlusOne === 1) {
      ordinalSuffix = ordinal[1]; // "st"
    } else if (indexPlusOne === 2) {
      ordinalSuffix = ordinal[2]; // "nd"
    } else if (indexPlusOne === 3) {
      ordinalSuffix = ordinal[3]; // "rd"
    }
    console.log(`${indexPlusOne}${ordinalSuffix} choice is ${color}.`);
});  


//EXERCISE 3 : Analyzing
//Analyze these pieces of code before executing them. What will be the outputs ?
//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];//An array which starts with the string 'bread', spreads the elements of the vegetables array into the new array, adds the string 'chicken', and finally spreads the elements of the fruits array into it.
console.log(result);//['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

//------2------
const country = "USA";
console.log([...country]);//['U', 'S', 'A'] - the spread operator takes each character of the string "USA" and creates an array where each character of the string becomes an individual element.

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);//an output will be an empty array []. 



//EXERCISE 4 : Employees
//Using the map() method, push into a new array the firstname of the user and a welcome message.
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

//Using the filter() method, create a new array, containing only the Full Stack Residents.
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

//Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
const lastNameOfFullStackResidents = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);

console.log(lastNameOfFullStackResidents);



//EXERCISE 5 : Star Wars
//Use the reduce() method to combine all of these into a single string.
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combined = epic.reduce((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
  });
  
  console.log(combined);



//EXERCISE 6 : Employees #2
//Using the filter() method, create a new array, containing the students that passed the course.
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

//Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”.
passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}.`);
  });