//Create your functions: to retrieve the elements from the DOM.
//To get the data from the API (star wars characters).
//To display the info on the DOM: the name, height, gender, birth year, and home world of the character.
//Display the data using AJAX. 

// Function to get DOM elements
function getDOMElements() {
    return {
        nameElement: document.querySelector('#name'),
        heightElement: document.querySelector('#height'),
        genderElement: document.querySelector('#gender'),
        birthYearElement: document.querySelector('#birth-year'),
        homeWorldElement: document.querySelector('#home-world'),
        fetchButton: document.querySelector('#fetch-character'),
        loadingMessage: document.querySelector('#loading-message'),
        errorElement: document.querySelector('#error')
    };
}

//Function to iterate over an array of elements obtained using getDOMElements() and set their textContent to an empty string.
window.onload = clearCharacterInfo;
function clearCharacterInfo() {
    const {nameElement, heightElement, genderElement, birthYearElement, homeWorldElement } = getDOMElements();
    [nameElement, heightElement, genderElement, birthYearElement, homeWorldElement].forEach(element => element.textContent = '');
}

// Function to get data from the Star Wars API
async function getCharacterData() {
    const randomNumber = Math.floor(Math.random() * 82) + 1;
    const apiUrl = `https://swapi.dev/api/people/${randomNumber}/`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
        throw new Error('Failed to fetch character data');
    }

    const data = await response.json();
    return data;
}

// Function to display character info on the DOM
function displayCharacterInfo(character) {
    const { nameElement, heightElement, genderElement, birthYearElement, homeWorldElement } = getDOMElements();

    nameElement.textContent = character.name;
    heightElement.textContent = `Height: ${character.height}`;
    genderElement.textContent = `Gender: ${character.gender}`;
    birthYearElement.textContent = `Birth Year: ${character.birth_year}`;

    homeWorldElement.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Loading...`

    fetch(character.homeworld)
        .then(response => response.json())
        .then(data => {
            homeWorldElement.textContent = `Home World: ${data.name}`;
        })
        .catch(error => {
            console.error('Error fetching home world:', error);
            homeWorldElement.textContent = 'Home World: Unknown';
        });
}

// Function to handle button click event
function handleButtonClick() {
    const { fetchButton, loadingMessage, errorElement } = getDOMElements();

    fetchButton.addEventListener('click', async () => {
        loadingMessage.classList.remove('hidden');
        errorElement.classList.add('hidden');

        try {
            const characterData = await getCharacterData();
            displayCharacterInfo(characterData);
        } catch (error) {
            console.error('Error fetching character data:', error);
            errorElement.classList.remove('hidden');
        } finally {
            setTimeout(() => {
                loadingMessage.classList.add('hidden');
            }, 300);
        }
    });
}

// Call the function to initialize the application
handleButtonClick();