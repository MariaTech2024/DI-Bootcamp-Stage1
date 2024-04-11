//Exercise 3: Building a Basic CRUD API with Express and Axios using a Data Module
//In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js and Axios to retrieve data from the JSONPlaceholder API and respond with that data in your own API. You’ll also create a separate module to handle data retrieval using Axios.

const express = require('express');

//Importing fetchPosts function from dataService.js
const { fetchPosts } = require('./data/dataService.js');

//Creating Express application
const app = express();

//Parse JSON requests
app.use(express.json());

//Handle GET requests for fetching posts
app.get('/api/posts', (req, res) => {
    //Calling fetchPosts function, which returns a promise
    fetchPosts()
        .then(posts => {
            //If posts are fetched successfully, send them in the response
            if (posts) {
                res.status(200).json(posts);
            } else {
                //If there are no posts, send a server error response
                res.status(500).json({ resp: posts });
            }
        })
        //Catching any errors that occur during fetching posts
        .catch(err => res.status(500).json({ err }));
});

app.listen(5000, () => console.log('Listening on port 5000'));