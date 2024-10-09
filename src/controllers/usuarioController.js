const { Usuario } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

// Registrar un nuevo usuario
exports.register = async (req, res) => {
    try {
        // // Validar datos (puedes usar express-validator para esto)
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     // Retornar el primer error encontrado
        //     return res.status(400).json({
        //         success: false,
        //         errors: errors.array().map((err) => err.msg),
        //     });
        // }

        const { nombre, email, password, telefono, rol } = req.body;

        // // Encriptar contraseña
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Crear usuario
        const usuario = await Usuario.create({
            nombre,
            email,
            password,
            telefono,
            rol
        });

        res.status(201).json({
            success: true,
            data: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                telefono: usuario.telefono,
                rol: usuario.rol,
            },
            message: 'Usuario registrado correctamente',
        });
        console.log('Usuario registrado correctamente');
    } catch (error) {
        //manejar errores de Sequelize

        console.error('Error al registrar el usuario:', error);

        // Manejar errores de Sequelize (por ejemplo, email duplicado)
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({
                success: false,
                message: 'El email proporcionado ya está registrado',
            });
        }

        // Manejar otros errores de validación de Sequelize
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({
                success: false,
                message: error.errors[0].message, // Mensaje de error personalizado desde el modelo
            });
        }

        // Pasar el error al middleware de manejo de errores
        // next(error);
    }
};

// Iniciar sesión
exports.login = async (req, res) => {
    try {
        //Validar datos (puedes usar express-validator para esto)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Retornar todos los errores de validación
            return res.status(400).json({
              success: false,
              errors: errors.array().map((err) => err.msg),
            });
          }

        const { email, password } = req.body;

        // Buscar usuario por email
        const usuario = await Usuario.findOne({ where: { email } });

        // Verificar si el usuario existe
        if (!usuario) {
            return res.status(401).json({
                success: false,
                message: 'Usuario no registrado',
            });
        }

        // Vamos a imprimir en consola lo necesario para debuggear el login
        console.log('Usuario:', usuario.nombre);
        console.log('Contraseña:', usuario.password);

        // Verificar si la contraseña es correcta
        const isValidPassword = await bcrypt.compare(password, usuario.password);

        console.log('Contraseña válida:', isValidPassword);

        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                message: 'Credenciales Invalidas',
            });
        }

        // Crear token JWT
        const payload = {
            id: usuario.id,
            rol: usuario.rol,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '10h',
        });

        res.status(200).json({
            success: true,
            message: 'Sesión iniciada correctamente',
            token,
            data: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                telefono: usuario.telefono,
                rol: usuario.rol,
            },
        });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        // next(error);
    }
};



// Otros métodos: updateUsuario, etc.
