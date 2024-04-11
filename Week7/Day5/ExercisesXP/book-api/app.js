//Exercise 2: Building a Basic CRUD API with Express.js
//In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.
const express = require('express');
const app = express();

// Initialize an increment variable to track the ID of new books
let increment = 4; // Assuming the last book ID is 3


const books = [
    { id: 1, title: 'First Book', author: 'Author1', publishedYear: 2006 },
    { id: 2, title: 'Second Book', author: 'Author2', publishedYear: 2024 },
    { id: 3, title: 'Third Book', author: 'Author3', publishedYear: 1989 },
];

app.use(express.json());

app.get('/api/books', (req, res) => {
    res.json(books);
});
//Get a specific book by ID
app.get('/api/books/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.status(400).json({ error: 'id is not a number' });
    }
    //Find the book with the given ID
    const book = books.find(book => book.id == id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ error: 'Book not found' })
    }
});
//Add a new book
app.post('/api/books', (req, res) => {
    //Check if request body contains required data
    if (req.body.title && req.body.author && req.body.publishedYear) {
        //Create a new book object from the request body
        const new_book = req.body;
        //Assign a new ID to the new book
        new_book.id = increment++;
        //Add the new book to the array of books
        books.push(new_book);
        //Respond with success message and the new book
        res.status(200).json({ msg: 'added', new_book });
    } else {
        //If request body data is missing, return an error message
        res.status(400).json({ error: 'wrong body data' });
    }
});

app.listen(5000, () => console.log('listen to port 5000'));