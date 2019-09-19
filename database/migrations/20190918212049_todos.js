exports.up = function(knex) {
  return knex.schema.createTable("totos", todos => {
    todos.string("title", 120).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("todos");
};
