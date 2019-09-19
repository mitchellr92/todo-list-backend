exports.up = function(knex) {
  return knex.schema.createTable("todos", todos => {
    todos.string("title", 120).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("todos");
};
