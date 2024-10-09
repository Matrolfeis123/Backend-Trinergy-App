'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    // Método para verificar la contraseña
    validPassword(password) {
      return bcrypt.compare(password, this.password);
    }
  }
  Usuario.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'El nombre es obligatorio',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'El email ya está en uso',
        },
        validate: {
          notEmpty: {
            msg: 'El email es obligatorio',
          },
          isEmail: {
            msg: 'Debe proporcionar un email válido',
          },
        },
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'La contraseña es obligatoria',
          },
          len: {
            args: [6],
            msg: 'La contraseña debe tener al menos 6 caracteres',
          },
        },
      },
      rol: {
        type: DataTypes.ENUM(
          'Admin',
          'SIG',
          'SiteHunter',
          'ControlGestion',
          'Estandar'
        ),
        allowNull: false,
        defaultValue: 'Estandar',
        validate: {
          isIn: {
            args: [['Admin', 'SIG', 'SiteHunter', 'ControlGestion', 'Estandar']],
            msg: 'El rol proporcionado no es válido',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Usuario',
      tableName: 'usuarios',
      hooks: {
        beforeCreate: async (usuario) => {
          const salt = await bcrypt.genSalt(10); // Generar un salt con 10 rondas, que servira para encriptar la contraseña
          usuario.password = await bcrypt.hash(usuario.password, salt);
        },
        beforeUpdate: async (usuario) => {
          if (usuario.changed('password')) {
            const salt = await bcrypt.genSalt(10);
            usuario.password = await bcrypt.hash(usuario.password, salt);
          }
        },
      },
    }
  );
  return Usuario;
};