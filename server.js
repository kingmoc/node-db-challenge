const express = require('express');
const helmet = require('helmet');
<<<<<<< HEAD
const ProjectsRouter = require('./projects/projectsRouter')
const ResourceRouter = require('./resources/resourcesRouter')
const TaskRouter = require('./task/taskRouter')
=======
const RecipesRouter = require('./recipes/recipesRouter');
>>>>>>> 188f878e5f336d2aff55c2859415ece0cc9e1ac7

const server = express();

server.use(helmet());
server.use(express.json());

<<<<<<< HEAD
server.use('/api/projects', ProjectsRouter); 
server.use('/api/resources', ResourceRouter); 
server.use('/api/task', TaskRouter); 
=======
server.use('/api/recipes', RecipesRouter); 
>>>>>>> 188f878e5f336d2aff55c2859415ece0cc9e1ac7


module.exports = server;