const express = require("express");
const app = express();
const port = 3000;
const mainRouter = require("./routes/index");
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(mainRouter);

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

module.exports = app;
