//Mini Project : Task Management API #1
//Create a Task Management API with Express.js and JSON File Storage
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();


// Middleware
app.use(bodyParser.json());

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Tasks',
  password: '01813',
  port: 5432,
});

// Routes
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter(pool));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(3008, () => {
  console.log(`Server is running on port 3008`);
});