const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { body } = require('express-validator');
const { authenticate } = require('../middleware/auth');

// Ruta para registrar un nuevo usuario
router.post('/register',
    [
        body('nombre')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres')
            .isLength({ max: 50 }).withMessage('El nombre debe tener como máximo 50 caracteres'),
        body('email')
            .isEmail().withMessage('Debe proporcionar un email válido')
            .notEmpty().withMessage('El email es obligatorio'),
        body('password')
            .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
            .matches(/\d/).withMessage('La contraseña debe contener al menos un número')
            .notEmpty().withMessage('Ingrese una contraseña'),
        body('telefono')
            .isLength({ min: 11, max: 12 }).withMessage('El teléfono debe tener 11 dígitos (569...'),
        body('rol')
            .notEmpty().withMessage('El rol es obligatorio')
            .isIn(['Admin', 'SIG', 'SiteHunter', 'ControlGestion', 'Estandar']).withMessage('Rol no válido'),
        // Agrega más validaciones según tus necesidades
    ],
    usuarioController.register);

// Ruta para iniciar sesión
router.post('/login', 
    [
        body('email')
            .isEmail().withMessage('Debe proporcionar un email válido')
            .notEmpty().withMessage('El email es obligatorio'),
        body('password')
            .notEmpty().withMessage('Ingrese una contraseña'),
    ],
    usuarioController.login
);



// Otras rutas: actualizar perfil, etc.

module.exports = router;
