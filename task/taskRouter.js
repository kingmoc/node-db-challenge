const express = require('express');

const Task = require('./task-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const task = await Task.getTask();
      
      let ntask = task.map(task => {
          if (task.completed === 0) {
            task.completed = false
          } 
          else {
            task.completed = true
          }

          return task
      })

      res.json(ntask);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get task' });
    }
  });

router.post('/', async (req, res) => {
    const taskData = req.body;
  
    try {
      const task = await Task.addTask(taskData);
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new task' });
    }
  });

module.exports = router;