//EXERCISE 1: Giphy API
//Create a program to retrieve the data from the API URL provided
const giphyURL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
//Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
fetch(giphyURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log('There was a problem with the fetch operation:', error.message));



//EXERCISE 2: Giphy API
//Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
//Make sure to check the status of the Response and to catch any occuring errors.
const sunGiphyURL = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(sunGiphyURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network connection was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log('Fetch operation error:', error.message));



//EXERCISE 3: Async function
//Create an async function, that will await for the above GET request.
//The program shouldn’t contain any then() method.
async function fetchStarship() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.result);
    } catch (error) {
        console.log('There was a problem:', error.message);
    }
}

fetchStarship();


//EXERCISE 4: Analyze
//Analyse the code provided below - what will be the outcome?
//Function that returns a Promise that resolves after 2 sec
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        // Set a timeout to resolve the promise after 2 sec
        setTimeout(() => {
            resolve('resolved'); //Resolve the promise with the string 'resolved'
        }, 2000);
    });
}

//Async function for a Promise to resolve
async function asyncCall() {
    console.log('calling'); 
    // Await the resolution of the promise returned by resolveAfter2Seconds
    let result = await resolveAfter2Seconds();
    console.log(result); //Log the result of the promise ('resolved') to the console
}

asyncCall(); //Invoke the asyncCall function
