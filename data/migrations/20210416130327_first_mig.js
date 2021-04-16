exports.up = function(knex) {
  return knex.schema
  .createTable('projects', table => {
      table.increments('project_id');
      table.string('project_name', 100).notNullable();
      table.string('project_description', 100);
      table.boolean('project_completed', 1).defaultTo(0);
    })
    .createTable('resources', table => {
        table.increments('resource_id');
        table.string('resource_name', 100).notNullable().unique();
        table.string('resource_description', 100);
    })
    .createTable('tasks', table => {
        table.increments('task_id');
        table.string('task_description', 100).notNullable();
        table.string('task_notes', 100);
        table.boolean('task_completed', 1).defaultTo(0);
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('cascade');
    })
    .createTable('project_resources', table => {
        table.increments('project_resource_id');
        table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources')
        .onDelete('cascade');
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('cascade');
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
