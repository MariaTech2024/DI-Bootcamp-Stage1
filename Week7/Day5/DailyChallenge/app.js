//Create a fun emoji guessing game using an Express API.
//The game will present players with a random emoji and a set of options. Players need to guess the correct name of the emoji from the given options.
//The game will keep track of the player’s score and provide feedback on their guesses.

const express = require('express');
const { getResults, setResults } = require('./file.js');
const { emojiArray } = require('./data.js');

const app = express();
app.use(express.json());
app.use(express.static('public'));
//To get the list of emojis
app.get('/emojis', (req, res) => {
    //Map each emoji to an object containing its ID, character, and names
    const emojis = emojiArray.map(emoji => {
        //Create a new array with the wrong names and add the correct name
        const names = [...emoji.wrongNames];
        const { id, character } = emoji;
//Add the correct name and sort the array alphabetically
        names.push(emoji.shortName);
        names.sort();

        return {
            id,
            character,
            names
        }
    });
//If emojis are found, send them as a response
    if (emojis) {
        res.status(200).json(emojis);
    } else {
        //If emojis are not found, send an error response
        res.status(500).json('something went wrong');
    }
})
//Guessing the name of an emoji
app.post('/emojis/:id', (req, res) => {
    //Extract the name from the request body and the ID from the URL params
    const { name } = req.body;
    let { id } = req.params;
    id = Number(id);
    //Find the emoji object with the given ID
    const emojiObj = emojiArray.find(emoji => emoji.id == id);
    if (!emojiObj) {
        res.status(404).json({ error: 'emoji not found' });
        return;
    }
    const { shortName } = emojiObj;
//Check if the guessed name matches the correct name of the emoji
    if (shortName === name) {
        res.status(200).json({ isTrue: true });
    } else {
        res.status(200).json({ isTrue: false });
    }
});
//Update leaderboard results
app.put('/results', async (req, res) => {
    const { dateTime, score } = req.body;
    //Retrieve current results from file
    const results = await getResults();

    if (!results) {
        console.log('results are ', results);
        res.status(500).json({ error: 'wrong data' });
        return;
    }
//Add new result to results array and sort by score
    results.push({ dateTime, score });
    results.sort((res1, res2) => res2.score - res1.score);
//Write updated results to file
    const success = await setResults(results);
    if (success) {
        res.status(201).json({ added: { dateTime, score } });
    } else {
        res.status(500).json({ error: 'error during writing json file' });
    }
});
//Get leaderboard results
app.get('/results', async (req, res) => {
    //Retrieve results from file
    const results = await getResults();
    if (!results) {
        console.log('results are ', results);
        res.status(500).json({ error: 'wrong data' });
        return;
    }
    res.status(200).json(results);
})

app.listen(4000, () => console.log('listen to port 4000'));