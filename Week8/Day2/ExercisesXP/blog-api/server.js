// Exercise 1 : Building a RESTful API with database connection
//Users should be able to create, read, update, and delete blog posts using different endpoints.

const express = require('express');
const postsRouter = require('./routes/posts.js');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/posts', postsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server error' });
  });

// Error handling for invalid routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

// Error handling for server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});