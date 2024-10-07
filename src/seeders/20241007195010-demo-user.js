'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        subestacion: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        subestacion: 'Jane Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        subestacion: 'Sam Smith',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
