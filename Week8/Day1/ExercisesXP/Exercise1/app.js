//Exercise 1: Creating a Simple Express.js Application with Routes
const express = require('express');
const app = express();
//Import the router module
const indexRouter = require('./routes/index.js');
//Middleware to parse incoming requests with JSON payloads
app.use(express.json());
//Mount the router module for handling routes
app.use('/', indexRouter);

app.listen(3000, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log(`Server is running on port 3000`);
    }
});