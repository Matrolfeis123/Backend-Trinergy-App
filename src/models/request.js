'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate(models) {
      // Define asociaciones si las hay
      Request.hasMany(models.Terreno, {
        foreignKey: 'requestId',
        as: 'terrenos',
      });
    }
  }

  Request.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      linea: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'La línea es obligatoria',
          },
        },
      },
      radio_busqueda: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: {
            args: [0],
            msg: 'El radio de búsqueda debe ser un número positivo',
          },
        },
      },
      subestacion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'La subestación es obligatoria',
          },
        },
      },
      segmento_proyecto: {
        type: DataTypes.ENUM('PMG/D', 'BESS', 'Utility Solar', 'Utility Eolico', 'Utility Solar + BESS'),
        allowNull: false,
        validate: {
          isIn: {
            args: [['PMG/D', 'BESS', 'Utility Solar', 'Utility Eolico', 'Utility Solar + BESS']],
            msg: 'El segmento de proyecto debe ser uno de los valores válidos',
          },
        },
      },
      usuarioSIG: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'El usuario SIG es obligatorio',
          },
        },
      },
      siteHunter: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'El Site Hunter es obligatorio',
          },
        },
      },
      fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: {
            msg: 'La fecha de creación debe ser una fecha válida',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Request',
      tableName: 'requests',
      freezeTableName: true,
    }
  );

  return Request;
};