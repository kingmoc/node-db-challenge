const db = require('../data/db-config.js');

module.exports = {
    getTask,
    addTask
}


function getTask() {
    /*
    select t.id, p.project_name, t.task_description, t.notes, t.completed
    from [task] t
    join [projects] p
        on t.project_id = p.id
    */
    return db('task as t')
        .innerJoin('projects as p', 't.project_id','p.id')
        .select('t.id', 'p.project_name', 't.task_description', 't.notes', 't.completed')
}

function addTask(task) {

    return db('task')
        .insert(task)
}