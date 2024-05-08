const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.send({ 
        helloMessage: 'Hello From Express',
        postMessage: 'Post to server: ' 
    });
});

// POST route to /api/world
app.post('/api/world', (req, res) => {
    const { inputValue } = req.body;
    res.send({ message: `I received your POST request. This is what you sent me: ${inputValue}` });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});