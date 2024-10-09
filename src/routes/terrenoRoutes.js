const express = require('express');
const router = express.Router();
const terrenoController = require('../controllers/terrenoController');

// Falta implementar autenticación y autorización

// Rutas para terrenos
router.get('/', terrenoController.getAllTerrenos);
router.post('/:requestId/terrenos', terrenoController.createTerreno); // Crear un terreno asociado a una request específica


module.exports = router;
