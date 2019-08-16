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
      res.status(500).json({ message: 'Failed to get projects' });
    }
  });

router.get('/:id', async (req, res) => {
    const projectId = req.params.id;
  
    try {
      const project = await Projects.getProjectById(projectId);
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get Project' });
    }
  })

router.post('/', async (req, res) => {
    const projectData = req.body;

    if(!projectData.completed) {
        projectData.completed = false
    }
    console.log(projectData)
  
    try {
      const project = await Projects.addProjects(projectData);
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new project' });
    }
  });

module.exports = router;