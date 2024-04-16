// routes/posts.js
const express = require('express');
const router = express.Router();
const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/posts');

// GET /posts
router.get('/', getAllPosts);

// GET /posts/:id
router.get('/:id', getPostById);

// POST /posts
router.post('/', createPost);

// PUT /posts/:id
router.put('/:id', updatePost);

// DELETE /posts/:id
router.delete('/:id', deletePost);

module.exports = router;