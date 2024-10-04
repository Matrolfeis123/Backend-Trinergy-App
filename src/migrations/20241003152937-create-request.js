'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
      linea: {
        type: Sequelize.STRING
      },
      radio_busqueda: {
        type: Sequelize.FLOAT
      },
      subestacion: {
        type: Sequelize.STRING
      },
      segmento_proyecto: {
        type: Sequelize.STRING
      },
      usuarioSIG: {
        type: Sequelize.STRING
      },
      siteHunter: {
        type: Sequelize.STRING
      },
      fecha_creacion: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Requests');
  }
};