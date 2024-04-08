//EXERCISE1: Find the numbers divisible by 23.
//Create a function call displayNumbersDivisible() that takes no parameter.
//In the function, loop through numbers 0 to 500.
//Console.log all the numbers divisible by 23.
//At the end, console.log the sum of all numbers that are divisible by 23.

function displayNumbersDivisible() {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum:", sum);
}
displayNumbersDivisible();
displayNumbersDivisible(3);
displayNumbersDivisible(45);


//EXERCISE2: Shopping List.
//Add the stock and prices objects to your js file.
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

//Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
const shoppingList = ["banana", "orange", "apple"];

//Create a function called myBill() that takes no parameters.
//The function should return the total price of your shoppingList. 
function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
        }
    }
    return total;
}

console.log(myBill());


//EXERCISE3: What’s in my wallet?
//Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments.

function changeEnough(itemPrice, amountOfChange) {
    const values = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;
//In the function, determine whether or not you can afford the item. 
    for (let i = 0; i < amountOfChange.length; i++) {
        totalChange += values[i] * amountOfChange[i];
    }

    return totalChange >= itemPrice;
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));


//EXERCISE4: Vacations Costs
//Define a function called hotelCost().
//It should ask the user for the number of nights they would like to stay in the hotel.
//If the user doesn’t answer or if the answer is not a number, ask again.
//The hotel costs $140 per night. The function should return the total price of the hotel.
function hotelCost() {
    let nights;
    do {
        nights = prompt("How many nights would you like to stay in the hotel?");
    } while (isNaN(nights) || nights === null || nights === "");

    return nights * 140;
}

//Define a function called planeRideCost().
//It should ask the user for their destination.
//If the user doesn’t answer or if the answer is not a string, ask again.
//The function should return a different price depending on the location.
function planeRideCost() {
    let destination;
    do {
        destination = prompt("What is your destination (London, Paris, or other)?")?.toLowerCase();
    } while (!destination || (destination !== "london" && destination !== "paris" && destination !== "other"));

    switch (destination) {
        case "london":
            return 183;
        case "paris":
            return 220;
        default:
            return 300;
    }
}
//Define a function called rentalCarCost().
//It should ask the user for the number of days they would like to rent the car.
//If the user doesn’t answer or if the answer is not a number, ask again.
//Calculate the cost to rent the car. The car costs $40 everyday.
//If the user rents a car for more than 10 days, they get a 5% discount.
//The function should return the total price of the car rental.

function rentalCarCost() {
    let days;
    do {
        days = prompt("How many days would you like to rent the car?");
    } while (isNaN(days) || days === null || days === "");

    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95; // Apply 5% discount for rentals over 10 days
    }
    return cost;
}
//Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    console.log (`The hotel cost: $${hotel}, the plane tickets cost: $${plane}, the car rental cost: $${car}.`);
    total_cost = hotel + plane + car
    return `The total cost: $${total_cost}`
}
    
console.log(totalVacationCost());