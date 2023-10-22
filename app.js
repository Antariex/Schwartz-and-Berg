//Se importa router principal, express, path y se asigna puerto 3000
const mainRouter = require("./routes/index");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Motor de vistas
app.set("view engine", "ejs");

//Servidor escuchando app en el puerto 3000
  console.log('Servidor corriendo en el puerto 3000');
  console.log('http://localhost:3000');

//Enrutador principal (http://localhost:3000/)
app.use(mainRouter);

//Middlewares: Disponibilidad de la carpeta public
app.use(express.static(path.join(__dirname, "public")));


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


// Exportar app
module.exports = app;