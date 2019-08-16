const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    addProjects,
    getProjectById
}


function getProjects() {
    return db('projects')
}

function addProjects(project) {

    return db('projects')
        .insert(project)
}

function getProjectById(id) {
    /*
    select *
    from [projects] p, [resources] r
    join [task] t
    join [project_resources] pr
        on t.project_id = p.id and p.id = pr.id
        where p.id = 1
    */

    // return db('projects as p').db('resources as r')
    //     .innerJoin('task as t','t.project_id','p.id')
    //     .innerJoin('project_resources as pr','p.id','pr.id')
    //     .where('p.id = 1', id)

    return db.select().from('projects as p').from('resources as r')
        .innerJoin('task as t','t.project_id','p.id')
        .innerJoin('project_resources as pr','p.id','pr.id')
        .where('p.id = 1', id)

    // return db('projects')
    // .where('id', id).first()

}