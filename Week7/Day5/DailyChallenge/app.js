//Create a fun emoji guessing game using an Express API.
//The game will present players with a random emoji and a set of options. Players need to guess the correct name of the emoji from the given options.
//The game will keep track of the player’s score and provide feedback on their guesses.

const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json()); // using built-in Express JSON middleware

const emojis = [
    {emoji: "😀", name: "smiling"},
    {emoji: "😂", name: "laughing"},
    {emoji: "😍", name: "smiling_heart"},
    {emoji: "😎", name: "sunglasses"},
    {emoji: "😋", name: "tasty"},
    {emoji: "🤔", name: "thinking"},
    {emoji: "😴", name: "sleeping"},
    {emoji: "🥳", name: "partying"},
    {emoji: "🤩", name: "amazing"},
    {emoji: "🤯", name: "exploding_head"}
];

//Function to get random options for the game
function getRandomOptions(n) {
    const shuffled = [...emojis].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}
//API endpoint to get a random emoji and options for guessing
app.get('/emoji', (req, res) => {
    const options = getRandomOptions(4);
    const randomEmoji = options[Math.floor(Math.random() * options.length)];
    res.json({ emoji: randomEmoji.emoji, options: options.map(opt => opt.name) });
});
//API endpoint to submit a guess and check if it is correct
app.post('/guess', (req, res) => {
    const { guess, emoji } = req.body;//Extract guess and emoji from the request body
    const correctEmoji = emojis.find(e => e.emoji === emoji);//Find the correct emoji object
    if (correctEmoji && correctEmoji.name === guess) {
        res.json({ correct: true, message: "Correct!" });
    } else {
        res.json({ correct: false, message: "Wrong!", correctName: correctEmoji ? correctEmoji.name : "" });//Incorrect guess
    }
    }
});

app.listen(3002, () => {
    console.log(`Server is running on http://localhost:3002`);
});