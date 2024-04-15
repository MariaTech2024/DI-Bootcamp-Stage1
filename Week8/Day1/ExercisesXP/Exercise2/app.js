//Exercise 2: Simple to-do list exercise using Express.js and express.Router.
const express = require('express');
const todoRouter = require('./routes/todos.js');

const app = express();
// Middleware
app.use(express.json());

// Mounting the router
app.use('/todos', todoRouter);

// Start server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});