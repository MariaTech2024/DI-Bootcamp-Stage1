//Exercise 3: Basic API for managing a list of books using Express.js and express.Router.
const express = require('express');
const app = express();
const booksRouter = require('./routes/books');

app.use(express.json());

app.use('/books', booksRouter);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});