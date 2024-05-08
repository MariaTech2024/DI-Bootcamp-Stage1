//Exercise 1 : Divisible by three
let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    // Check if the number is divisible by 3
    let isDivisibleByThree = (number % 3 === 0);
    
    // Log the result
    console.log(isDivisibleByThree);
}

/** 
//Exercise 2 : Attendance

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  };
  
  // Function to greet the user based on their name and the guest list
  function greetUser(guestList) {
    // Prompt the user for their name
    const name = prompt("Please enter your name:");
  
    // Check if the entered name exists in the guest list object
    if (name in guestList) {
      // If the name exists in the object, log the name and the country
      console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
    } else {
      // If the name does not exist in the object, log "Hi! I'm a guest."
      console.log("Hi! I'm a guest.");
    }
  }
  
  // Call the function to greet the user
  greetUser(guestList);


//Exercise 3 : Playing with numbers

  let age = [20, 5, 12, 43, 98, 55];

        // Function to calculate the sum of all the numbers in the age array
        function calculateSum() {
            // Initialize sum to 0
            let sum = 0;

            // Iterate through the age array and add each number to the sum
            for (let i = 0; i < age.length; i++) {
                sum += age[i];
            }

            // Return the calculated sum
            return sum;
        }

        // Function to find the highest age in the age array
        function findHighestAge() {
            // Initialize the highest age with the first age in the array
            let highestAge = age[0];

            // Iterate through the age array to find the highest age
            for (let i = 1; i < age.length; i++) {
                // Update the highest age if the current age is greater
                if (age[i] > highestAge) {
                    highestAge = age[i];
                }
            }

            // Return the highest age found
            return highestAge;
        }

        // Function to display the results
        function displayResults() {
            // Get the sum and highest age
            const sum = calculateSum();
            const highestAge = findHighestAge();

            // Display the results in the specified elements
            document.getElementById("sum-result").innerText = `Sum of all ages: ${sum}`;
            document.getElementById("highest-age-result").innerText = `Highest age: ${highestAge}`;
        }

*/