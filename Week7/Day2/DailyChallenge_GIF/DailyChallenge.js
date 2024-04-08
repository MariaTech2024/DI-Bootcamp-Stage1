//Daily Challenge: Gifs
//Create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).

//Event listener for form submission
document.getElementById('gifForm').addEventListener('submit', function(event) {
    event.preventDefault();//Prevent default form submission behavior

    const category = document.getElementById('category').value;//Get the category value entered by the user
    const giphyURL = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
//Fetch a random GIF from the Giphy API
    fetch(giphyURL)
        .then(response => response.json())
        .then(data => {
            const gifURL = data.data.images.original.url; //Extract the URL of the fetched GIF
//Create a new div element to hold the GIF
            const gifElement = document.createElement('div');
            gifElement.innerHTML = `
                <img src="${gifURL}" alt="${category} gif">
                <button class="delete">DELETE</button>
            `;
//Append the div containing the GIF to the gifContainer
            document.getElementById('gifContainer').appendChild(gifElement);
        })
        .catch(error => console.error('Error fetching gif:', error));
});
//Event listener for clicking on elements within the gifContainer
document.getElementById('gifContainer').addEventListener('click', function(event) {
    //Check if the clicked element has the class 'delete'
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});
//Event listener for clicking on the deleteAll button
document.getElementById('deleteAll').addEventListener('click', function() {
    //Clear the entire contents of the gifContainer
    document.getElementById('gifContainer').innerHTML = '';
});