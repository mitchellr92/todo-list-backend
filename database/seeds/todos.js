
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'Take out the trash'},
        {id: 2, title: 'Dinner with wife'},
        {id: 3, title: 'Set up the pool'}
      ]);
    });
};
