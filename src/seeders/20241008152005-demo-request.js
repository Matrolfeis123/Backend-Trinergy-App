'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('requests', [
      {
        estado: 'Pendiente',
        linea: 'Línea 1',
        radio_busqueda: 10.5,
        subestacion: 'Subestación Central',
        segmento_proyecto: 'Utility Solar',
        usuarioSIG: 'usuario_sig',
        siteHunter: 'site_hunter',
        fecha_creacion: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estado: 'Completado',
        linea: 'Línea 2',
        radio_busqueda: 15.0,
        subestacion: 'Subestación Norte',
        segmento_proyecto: 'BESS',
        usuarioSIG: 'usuario_sig2',
        siteHunter: 'site_hunter2',
        fecha_creacion: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más requests según sea necesario
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar requests
    await queryInterface.bulkDelete('requests', null, {});
  },
};
