const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const projects = await Projects.getProjects();
      
      let nprojects = projects.map(project => {
          if (project.completed === 0) {
              project.completed = false
          } 
          else {
            project.completed = true
          }

          return project
      })

      res.json(nprojects);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get schemes' });
    }
  });

router.post('/', async (req, res) => {
    const projectData = req.body;
  
    try {
      const project = await Projects.addProjects(projectData);
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new scheme' });
    }
  });

module.exports = router;