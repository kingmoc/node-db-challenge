
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('project_name', 255)
            .notNullable()
            .unique()
        tbl.string('project_description', 400)
        tbl.boolean('completed')            
    })
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('resource_name', 255)
            .notNullable()
            .unique()
        tbl.string('resource_description', 400)
    })
    .createTable('project_resources', tbl => {
        tbl.increments()
        //Fk
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
    .createTable('task', tbl => {
        tbl.increments()
        tbl.string('task_description',400)
            .notNullable()
            .unique()
        tbl.string('notes', 400)
        tbl.boolean('completed')
        //FK
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('task')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
