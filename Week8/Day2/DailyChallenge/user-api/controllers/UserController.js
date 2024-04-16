const bcrypt = require('bcrypt');
const pool = require('../config/db');

const UserController = {
  async register(req, res) {
    const { username, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await pool.query('BEGIN');
      await pool.query('INSERT INTO users (username) VALUES ($1)', [username]);
      await pool.query('INSERT INTO hashpwd (username, password) VALUES ($1, $2)', [username, hashedPassword]);
      await pool.query('COMMIT');
      res.status(201).send('User registered successfully');
    } catch (error) {
      await pool.query('ROLLBACK');
      res.status(500).send('Error registering user');
    }
  },

  async login(req, res) {
    // Implement login logic
  },

  async getAllUsers(req, res) {
    // Implement logic to retrieve all users
  },

  async getUserById(req, res) {
    // Implement logic to retrieve user by ID
  },

  async updateUser(req, res) {
    // Implement logic to update user information
  }
};

module.exports = UserController;