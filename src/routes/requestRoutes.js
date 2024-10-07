const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');
console.log(requestController);

// Ruta para obtener todas las solicitudes
router.get('/', requestController.getAllRequests);

// Ruta para obtener una solicitud por id
router.get('/:id', requestController.getRequestById); //Pendiente de desarrollo en el controlador

// Ruta para crear una nueva solicitud
router.post('/', requestController.createRequest);

// Ruta para actualizar una solicitud
router.put('/:id', requestController.updateRequest);

module.exports = router;
