
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, title: 'Take out the trash'},
        {id: 2, title: 'Dinner with wife'},
        {id: 3, title: 'Meeting with boss'}
      ]);
    });
};
