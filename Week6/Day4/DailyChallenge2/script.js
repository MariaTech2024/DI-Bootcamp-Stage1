//collect all arguments passed to the function into an array
function allTruthy(...args) {
    //iterates over each argument using a for...of loop
    for (let arg of args) {
        //checks if the argument is false.
        if (!arg) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log(allTruthy(true, true, true)); //True
console.log(allTruthy(true, false, true)); //False
console.log(allTruthy(5, 4, 3, 2, 1, 0)); //False
