//Se importa router principal, express, path y se asigna puerto 3000
const express = require("express");
const path = require("path");
const app = express();
const port = 3500;
const fs = require('fs');
const productos = JSON.parse(fs.readFileSync('./data/productos.json', 'utf8'));

// API del menú:

// Ruta para obtener todo el menú
app.get("/productos", (req, res) => {
  res.json(productos);
});

// Ruta para obtener un artículo del menú por su ID
app.get("/productos/:id", (req, res) => {
  const productosItem = productos.find((item) => item.id === parseInt(req.params.id));
  if (!productosItem) return res.status(404).send("El artículo no se encontró.");
  res.json(productosItem);
});

app.listen(port, () => {
  console.log(
    `API del menú en funcionamiento en el puerto ${port}`
  );
});