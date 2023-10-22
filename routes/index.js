const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

//Homepage (http://localhost:3000)
router.get('/', mainController.home)

//Menú (http://localhost:3000/menu)
router.get('/menu', mainController.menu)

//Nosotros (http://localhost:3000/nosotros)
router.get('/nosotros', mainController.nosotros)

//Sucursales (http://localhost:3000/sucursales)
router.get('/sucursales', mainController.sucursales)

//Exportamos las variables del router
module.exports = router