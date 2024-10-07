// controllers/userController.js
const { User } = require('../models');

exports.getAllUsers = async (req, res) => {
    try {
        console.log(User);
        // Obtiene todos los usuarios, especificando los atributos que quieres enviar
        const users = await User.findAll({
            attributes: ['id', 'subestacion'], // Excluye campos sensibles como 'password'
        });

        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener los usuarios',
        });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (user) {
            res.status(200).json({
                success: true,
                data: user,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'Usuario no encontrado',
            });
        }
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener el usuario',
        });
    }
};
