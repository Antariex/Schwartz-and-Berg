//Se importa router principal, express, path y se asigna puerto 3000
const mainRouter = require("./routes/index");
const productosRouter = require("./routes/menu"); 
const express = require("express");
const path = require("path");
const app = express();

// Motor de vistas
app.set("view engine", "ejs");

//Servidor escuchando app en el puerto 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('App principal corriendo en el puerto 3000');
  console.log('http://localhost:3000')
});

//Enrutador principal (http://localhost:3000/)
app.use(mainRouter);

//Middlewares: Disponibilidad de la carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Exportar app
module.exports = app;