const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [];
let count = 1;

// GET all todos
router.get("/", (req, res) => {
    res.status(200).json(todos);
});

// POST a new todo
router.post("/", (req, res) => {
    const { title } = req.body;
    // Check if title is provided
    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }
    try {
        // Create new todo object
        const newTodo = { id: count++, title };
        // Add new todo to the todos array
        todos.push(newTodo);
        // Respond with the newly created todo
        res.status(201).json(newTodo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
});

// PUT update a todo by id
router.put("/:id", (req, res) => {
    const { title } = req.body;
    const { id } = req.params;

    // Check if both title and id are provided
    if (!title || !id) {
        return res.status(400).json({ error: "Both title and id are required" });
    }

    // Find the index of the todo with the given id
    const todoIndex = todos.findIndex((todo) => todo.id === Number(id));
    // If todo not found, return 404 error
    if (todoIndex === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }

    try {
        // Update the title of the todo
        todos[todoIndex].title = title;
        // Respond with the updated todo
        res.status(200).json(todos[todoIndex]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
});

// DELETE a todo by id
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    // Check if id is valid
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid id" });
    }

    // Find the index of the todo with the given id
    const todoIndex = todos.findIndex((todo) => todo.id === Number(id));
    // If todo not found, return 404 error
    if (todoIndex === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }

    try {
        // Remove the todo from the todos array
        todos.splice(todoIndex, 1);
        // Respond with no content (204)
        res.status(204).send();
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;