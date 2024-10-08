'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar terrenos
    await queryInterface.bulkInsert('terrenos', [
      {
        nombre: 'Terreno A',
        ubicacion: 'Ubicación A',
        area: 100.5,
        requestId: 1, // Asegúrate de que el request con id 1 existe
        propietario: 'Juan Pérez',
        propietario_cel: '123456789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Terreno B',
        ubicacion: 'Ubicación B',
        area: 200.0,
        requestId: 1, // Asociado al mismo request
        propietario: 'María López',
        propietario_cel: '987654321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más terrenos según sea necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar terrenos
    await queryInterface.bulkDelete('terrenos', null, {});
  },
};
