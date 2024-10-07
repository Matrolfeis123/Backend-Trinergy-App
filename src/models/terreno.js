'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Terreno extends Model {
    static associate(models) {
      // Asociar Terrain con Request
      Terreno.belongsTo(models.Request, {
        foreignKey: 'requestId',
        as: 'request',
      });
    }
  }

  Terreno.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ubicacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      requestId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'requests',
          key: 'id',
        },
        allowNull: false,
      },
      propietario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      propietario_cel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Terreno',
      tableName: 'terrenos',
      freezeTableName: true,
    }
  );

  return Terreno;
};