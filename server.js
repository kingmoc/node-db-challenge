const express = require('express');
const helmet = require('helmet');
const ProjectsRouter = require('./projects/projectsRouter')
const ResourceRouter = require('./resources/resourcesRouter')
const TaskRouter = require('./task/taskRouter')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', ProjectsRouter); 
server.use('/api/resources', ResourceRouter); 
server.use('/api/task', TaskRouter); 


module.exports = server;