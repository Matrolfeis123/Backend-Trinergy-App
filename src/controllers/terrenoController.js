const { Terreno, Request } = require('../models');

// Obtener todos los terrenos
exports.getAllTerrenos = async (req, res) => {
    try {
        const terrenos = await terreno.findAll({
            include: [{ model: Request, as: 'request' }],
        });
        res.status(200).json({ success: true, data: terrenos });
    } catch (error) {
        console.error('Error al obtener los terrenos:', error);
        res.status(500).json({ success: false, message: 'Error al obtener los terrenos' });
    }
};

// Crear un nuevo terreno asociado a una solicitud específica
exports.createTerreno = async (req, res) => {
    try {
        const { requestId } = req.params;
        const { nombre, ubicacion, area, propietario, propietario_cel } = req.body;

        // Verificar que la solicitud exista
        const request = await Request.findByPk(requestId);
        if (!request) {
            return res.status(404).json({ success: false, message: 'Solicitud no encontrada' });
        }

        // Crear el terreno
        const newTerreno = await Terreno.create({
            nombre,
            ubicacion,
            area,
            requestId,
            propietario,
            propietario_cel,
        });

        res.status(201).json({ success: true, data: newTerreno });
    } catch (error) {
        console.error('Error al crear el terreno:', error);
        res.status(500).json({ success: false, message: 'Error al crear el terreno' });
    }
};
