const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    addProjects
}


function getProjects() {
    return db('projects')
}

function addProjects(project) {

    console.log(project)

    return db('projects')
        .insert(project)
}