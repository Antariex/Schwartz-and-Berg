const { json } = require('express');
const path = require('path');
const fs = require('fs');

const productFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productFilePath, 'utf8'));

const mainController = {

    home: (req, res, next) => {
        res.render('index');
    },

    menu: (req, res) => {
        res.render('menu', {productos}); 
    },

    nosotros: (req, res) => {
        res.render('nosotros'); 
    }
};

module.exports = mainController;