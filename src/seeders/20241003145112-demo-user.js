// seeders/XXXXXXXXXXXXXX-demo-user.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 10,
        subestacion: 'Subestacion 1',
      },
      {
        id: 2,
        subestacion: 'Subestacion 2',
      },
      {
        id: 3,
        subestacion: 'Subestacion 3',
      },
      {
        id: 4,
        subestacion: 'Subestacion 4',
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
