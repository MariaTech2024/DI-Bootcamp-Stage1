// controllers/bookController.js
const books = require('../models/bookModel');

exports.createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newBook = { id: books.length + 1, title, author, publishedYear };
  books.push(newBook);
  res.status(201).json(newBook);
};