const express = require('express');

const app = express();
app.use(express.json());

const data = [
    {
        id: 1,
        title: "Introduction to JavaScript",
        content: "JavaScript is a programming language that is commonly used to create interactive effects within web browsers."
    },
    {
        id: 2,
        title: "Getting Started with React",
        content: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
        id: 3,
        title: "Python Basics",
        content: "Python is an interpreted, high-level, general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation."
    }
];

//GET all posts
app.get('/posts', (req, res) => {
    res.json(data);
});
//GET a specific post by ID
app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = findPost(id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('post not found');
    }
});
//Add a new post
app.post('/posts', (req, res) => {
    if (req.body.title && req.body.content) {
        let id = 1;
        if(data.length > 0){ 
            id = data[data.length - 1].id + 1;
        }
        const post = {
            id,
            title: req.body.title,
            content: req.body.content
        }
        data.push(post);
        res.status(201).json(post);
    } else {
        res.status(400).json({ error: 'wrong body content' });
    }
});
//Update an existing post
app.put('/posts/:id', (req, res) => {
    const post = findPost(req.params.id);

    if (post && req.body.title && req.body.content) {
        post.title = req.body.title;
        post.content = req.body.content;
        res.json(post);

    } else if (!post) {
        res.status(404).json({ error: 'post not found' });

    } else {
        res.status(400).json({ error: 'wrong body content' });
    }
});
//Delete a post
app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    console.log(typeof id);

    if (isNaN(id)) {
        res.status(400).json({ error: 'parameter is not a number' });
        return;
    }
    const i = data.findIndex(post => post.id == id);

    if (i >= 0) {
        const deleted = data.splice(i, 1);
        res.status(200).json({ msg: `post with id ${id} was deleted`, deleted });
    } else {
        res.status(400).json({ error: 'wrong id' });
    }
});

app.get('*', (req, res) => res.status(400).json({ error: 'wrong path' }));
//Function to find a post by id
function findPost(id) {
    return data.find(post => post.id == id);
}

app.listen(5000, () => console.log('listen to port 5000'));