'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      {
        nombre: 'Matias',
        email: 'mfernandez10uc.cl',
        telefono: '1234567890',
        password: '$2b$10$b6kg7MzHRccrkYMrA2Iozupa/lyrY.wrpHBvJXzo2mBIBvb4.wj8.',
        rol: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más usuarios si lo deseas
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};