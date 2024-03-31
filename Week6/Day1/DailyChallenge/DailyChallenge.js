//Daily challenge: Groceries
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method. 
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
}

const cloneGroceries = () => {
    let user = client; //make the user variable equal to the client variable
    client = "Betty"; //change client variable to "Betty"

    let shopping = { ...groceries }; //create a variable named shopping that is equal to the groceries variable.

    // Change the value of the totalPrice key to 35$.
    shopping.totalPrice = "35$"; 

    // Change the value of the paid key to false.
    shopping.other.paid = false;

    console.log("user:", user); //output "John"
    console.log("client:", client); //output "Betty"
    console.log("shopping totalPrice:", shopping.totalPrice); // output "35$"
    console.log("shopping paid:", shopping.other.paid); // output "false"
}

//Invoke the cloneGroceries function
cloneGroceries();