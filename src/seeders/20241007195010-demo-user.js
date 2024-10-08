'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        subestacion: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subestacion: 'Jane Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
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
