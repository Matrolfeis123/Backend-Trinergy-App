'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      linea: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      radio_busqueda: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subestacion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      segmento_proyecto: {
        type: Sequelize.ENUM,
        values: ['PMG/D', 'BESS', 'Utility Solar', 'Utility Eolico', 'Utility Solar + BESS'],
        allowNull: false,
      },
      usuarioSIG: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      siteHunter: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fecha_creacion: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('requests');
  },
};
