const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');
const {authenticate} = require('../middleware/auth');
const { body, param } = require('express-validator');


console.log(requestController);

// Ruta para obtener una solicitud por id junto con sus terrenos
router.get('/:id/terrenos', authenticate, requestController.getRequestWithTerrenos);

// Ruta para obtener todas las solicitudes
router.get('/', authenticate, requestController.getAllRequests);

// Ruta para obtener una solicitud por id
router.get('/:id', authenticate, requestController.getRequestById); //Pendiente de desarrollo en el controlador

// Ruta para crear una nueva solicitud
router.post('/', authenticate, requestController.createRequest);

// Ruta para actualizar una solicitud
router.put('/:id', authenticate, requestController.updateRequest);

module.exports = router;
