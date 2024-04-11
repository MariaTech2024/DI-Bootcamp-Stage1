//In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to the JSONPlaceholder API to fetch data for all posts.

const axios = require('axios');

function fetchPosts() {
    return axios('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.data)
        .catch(err => {
            console.log(err);
            return { err };
        });
}

module.exports = { fetchPosts };