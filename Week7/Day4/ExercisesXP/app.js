//Create another file named app.js. In app.js, import the array of person objects from the data.js module.
import people from './data.js';

//Write a function that calculates and prints the average age of all the persons in the array.  
  function calculateAverageAge() {
    const totalAge = people.reduce((acc, person) => acc + person.age, 0);
    return totalAge / people.length;
  }
  
  const averageAge = calculateAverageAge(people);
  console.log("Average age of people:", averageAge);//Average age of people: 27.666666666666668