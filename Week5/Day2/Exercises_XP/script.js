//EXERCISE1: List of people
//Write code to remove “Greg” from the people array.
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);

//Write code to replace “James” to “Jason”.
people.splice(2, 3, 'Jason')
console.log(people);

//Write code to add your name to the end of the people array.
people.push('Mariia')
console.log(people);

//Write code that console.logs Mary’s index.
console.log(people.indexOf("Mary"));

//Write code to make a copy of the people array using the slice method. 
//The copy should NOT include “Mary” or your name. 
let peopleCopied = people.slice(1, 3);
console.log(peopleCopied);

//Write code that gives the index of “Foo”. Why does it return -1?
console.log(people.indexOf('Foo')); // It returns -1 because "Foo" doesn't exist in the array.

//Create a variable called last which value is the last element of the array.
let last = people[people.length - 1];
console.log(last);

//Using a loop, iterate through the people array and console.log each person.
for (let person of people) {
    console.log(person);
}

//Using a loop, iterate through the people array and exit the loop after you console.log “Devon”.
for (let person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
} 


//EXERCISE2: Your favorite colors.
//Create an array called colors where the value is a list of your five favorite colors.
let colors = ['dark blue', 'ash pink', 'white', 'red', 'light blue'];
console.log(colors);

//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
let suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}.`);
}


//EXERCISE3: Repeat the question.
//Check the data type you receive from the prompt (ie. Use the typeof method)
//While the number is smaller than 10 continue asking the user for a new number.
// let number = prompt("Enter a number: ");
// while (typeof number !== "number" || number < 10) {
//     number = parseInt(prompt("Enter a number greater than or equal to 10: "));
// }


//EXERCISE4: Building Management.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
//Console.log the number of floors in the building.
console.log(building.numberOfFloors);

//Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

//Console.log the name of the second tenant and the number of rooms he has in his apartment. 
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sarahAnddavidRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]
console.log(sarahAnddavidRent);
    
if (sarahAnddavidRent > building.numberOfRoomsAndRent.dan[1]) {
    console.log(building.numberOfRoomsAndRent.dan[1] = 1200);
}


//EXERCISE5: Family
let family = {
    father: "David",
    mother: "Emma",
    son: "James",
    daughter: "Harper"
};
console.log(family);

//Using a for in loop, console.log the keys of the object.
for (let member in family) {
    console.log(member);
}

//Using a for in loop, console.log the values of the object.
for (let member in family) {
    console.log(family[member]);
}


//EXERCISE6: Rudolf
//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

let sentence = "";
for (let word in details) {
    sentence += `${word} ${details[word]} `;
}
console.log(sentence.trim());


//EXERCISE7: Secret Group
//A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secretName = '';
const sortedNames = names.sort();
for (let firstName of sortedNames) {
    secretName += firstName[0];
}
console.log(secretName); 