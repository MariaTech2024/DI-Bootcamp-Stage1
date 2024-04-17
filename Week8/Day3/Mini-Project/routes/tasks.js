const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  // GET /tasks
  router.get('/', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM tasks');
      res.json(rows);
    } catch (error) {
      console.error('Error fetching tasks', error);
      res.status(500).send('Error fetching tasks');
    }
  });

  // GET /tasks/:id
  router.get('/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
      const { rows } = await pool.query('SELECT * FROM tasks WHERE id = $1', [taskId]);
      if (rows.length > 0) {
        res.json(rows[0]);
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      console.error('Error fetching task', error);
      res.status(500).send('Error fetching task');
    }
  });

  // POST /tasks
  router.post('/', async (req, res) => {
    const { title } = req.body;
    if (!title) {
      return res.status(400).send('Title is required');
    }
    try {
      const { rows } = await pool.query('INSERT INTO tasks (title) VALUES ($1) RETURNING *', [title]);
      res.status(201).json(rows[0]);
    } catch (error) {
      console.error('Error creating task', error);
      res.status(500).send('Error creating task');
    }
  });

  // PUT /tasks/:id
  router.put('/:id', async (req, res) => {
    const taskId = req.params.id;
    const { title } = req.body;
    if (!title) {
      return res.status(400).send('Title is required');
    }
    try {
      const { rows } = await pool.query('UPDATE tasks SET title = $1 WHERE id = $2 RETURNING *', [title, taskId]);
      if (rows.length > 0) {
        res.json(rows[0]);
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      console.error('Error updating task', error);
      res.status(500).send('Error updating task');
    }
  });

  // DELETE /tasks/:id
  router.delete('/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
      const result = await pool.query('DELETE FROM tasks WHERE id = $1', [taskId]);
      if (result.rowCount > 0) {
        res.status(204).send();
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      console.error('Error deleting task', error);
      res.status(500).send('Error deleting task');
    }
  });

  return router;
};