const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
const books = [];

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedBook = req.body;
  books[id] = updatedBook;
  res.json(updatedBook);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  books.splice(id, 1);
  res.sendStatus(204);
});

module.exports = router;