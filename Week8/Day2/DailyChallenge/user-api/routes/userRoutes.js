const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.post('/register', UserController.register);
router.post('/login', UserController.login);


module.exports = router;