const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

//Homepage (http://localhost:3000)
router.get('/', mainController.home)

router.get('/menu', mainController.menu)

//Exportamos las variables del router
module.exports = router