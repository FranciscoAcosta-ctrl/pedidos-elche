const express = require('express');
const router = express.Router()

const pedidoController = require('../controllers/pedidoController');
const userController = require('../controllers/userController');

//Mostrar todos los alumnos (GET)
router.get('/', pedidoController.mostrar)


//router.get('/', userController.usuarios)

//Cancelar Pedido (GET)
router.get('/realizar/:id', pedidoController.realizar)


router.get('/cancelar/:id', pedidoController.cancelar)

//Ver Pedido (GET)
router.get('/ver/:id', pedidoController.ver)

module.exports = router