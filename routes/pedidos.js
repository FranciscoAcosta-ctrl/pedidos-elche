const express = require('express');
const router = express.Router()

const pedidoController = require('../controllers/pedidoController');

//Mostrar todos los alumnos (GET)
router.get('/', pedidoController.mostrar)

//Cancelar Pedido (GET)
router.get('/borrar/:id', pedidoController.borrar)

//Ver Pedido (GET)
router.get('/ver/:id', pedidoController.ver)

module.exports = router