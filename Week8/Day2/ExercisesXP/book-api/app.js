// Exercise 2 : Building a Basic CRUD API with database connection
//Build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bookController = require('./controllers/bookController');

const PORT = 5000;

app.use(bodyParser.json());

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(book => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.post('/api/books', bookController.createBook);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});