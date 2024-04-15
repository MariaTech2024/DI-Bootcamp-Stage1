// Function to load a new emoji and options from the server
async function loadNewEmoji() {
    // Send an asynchronous GET request to the '/emoji' endpoint
    const response = await fetch('/emoji');
    // Parse the JSON response
    const data = await response.json();
    // Access the HTML element where the emoji will be displayed
    const emojiDisplay = document.getElementById('emoji-display');
    // Access the HTML element where the options (buttons) will be placed
    const optionsContainer = document.getElementById('options');
    
    // Set the text of the emoji display to the received emoji
    emojiDisplay.textContent = data.emoji;

    // Clear previous options before displaying new ones
    optionsContainer.innerHTML = '';
    // Iterate over each option received from the server
    data.options.forEach(option => {
        // Create a new button for each option
        const button = document.createElement('button');
        // Set the button text to the option name
        button.textContent = option;
        // Add an event listener to handle clicks on this button
        button.onclick = () => submitGuess(data.emoji, option);
        // Append the newly created button to the options container
        optionsContainer.appendChild(button);
    });
}

// Function to submit a guess to the server
async function submitGuess(emoji, guess) {
    // Send an asynchronous POST request to the '/guess' endpoint
    const response = await fetch('/guess', {
        method: 'POST', // HTTP method
        headers: {'Content-Type': 'application/json'}, // Set headers to inform the server about the payload format
        body: JSON.stringify({emoji: emoji, guess: guess}) // Send the selected emoji and the user's guess in JSON format
    });
    // Parse the JSON response
    const result = await response.json();
    // Alert the user with the result. If wrong, also show the correct name.
    alert(result.message + (result.correct ? "" : " The correct answer was: " + result.correctName));
    // Load a new emoji after the user has made a guess
    loadNewEmoji();
}

// Initial call to load the first emoji when the page loads
loadNewEmoji();