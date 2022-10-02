const express = require("express");
const Contenedor = require("./Contenedor");
const fs = require("fs");

// Base de datos
const listaproductos = new Contenedor("productos.txt");

//Pages

const home = () => {
  return `
  <div style="background-color:rgb(46, 46, 46) ; display: flex; flex-direction: column; align-items: center;justify-content: center; height: 100%;width: 100%;">
        <h1 style="color:whitesmoke; font-size: 48px;font-family: 'Courier New', Courier, monospace  ">
        Desafío Server</h1>
        <div style="margin:0 auto ;">
        <a href="/productos"  style="text-decoration:none ;">
            <button style="background-color: whitesmoke; color:rgb(46, 46, 46);font-family: 'Courier New', Courier, monospace; width: 10rem;border-radius: 8px; margin:1rem;" >
                <h3 style="background-color: whitesmoke; color:rgb(46, 46, 46); font: size 24px;"> Productos</h3>
            </button>
        </a>
        <a href="/productoRandom"  style="text-decoration:none ;">
            <button style="background-color: whitesmoke; color:rgb(46, 46, 46);font-family: 'Courier New', Courier, monospace; width: 10rem;border-radius: 8px; margin:1rem;" >
                <h3 style="background-color: whitesmoke; color:rgb(46, 46, 46); font: size 24px;"> Producto Random</h3>
            </button>
         </a>
        </div>
    </div>`;
};
const productoPage = () => {
  listaproductos.getAll().then((res) => console.log(res));

  return `
    <div style="background-color:rgb(46, 46, 46) ; display: flex; flex-direction: column; align-items: center;justify-content: center; height: 100%;width: 100%;">
          <h1 style="color:whitesmoke; font-size: 48px;font-family: 'Courier New', Courier, monospace  ">
          Productos</h1>

          <div style="margin:0 auto ;">
            <a href="/"  style="text-decoration:none ;">
                <button style="background-color: whitesmoke; color:rgb(46, 46, 46);font-family: 'Courier New', Courier, monospace; width: 10rem;border-radius: 8px; margin:1rem;" >
                    <h3 style="background-color: whitesmoke; color:rgb(46, 46, 46); font: size 24px;"> Home</h3>
                </button>
            </a>

          </div>
      </div>`;
};
const productoRandomPage = () => {
  let numAleatorio = listaproductos.length;
  listaproductos.getById().then((res) => console.log(res));
  return `
    <div style="background-color:rgb(46, 46, 46) ; display: flex; flex-direction: column; align-items: center;justify-content: center; height: 100%;width: 100%;">
          <h1 style="color:whitesmoke; font-size: 48px;font-family: 'Courier New', Courier, monospace  ">
          Producto Random</h1>
          <div style="margin:0 auto ;">
            <a href="/"  style="text-decoration:none ;">
                <button style="background-color: whitesmoke; color:rgb(46, 46, 46);font-family: 'Courier New', Courier, monospace; width: 10rem;border-radius: 8px; margin:1rem;" >
                    <h3 style="background-color: whitesmoke; color:rgb(46, 46, 46); font: size 24px;"> Home</h3>
                </button>
            </a>

          </div>
      </div>`;
};

//Creamos el servidor con Express
const app = express();
const port = 8080;
//Rutas
app.get("/", (req, res) => {
  res.send(` ${home()}`);
});
app.get("/productos", (req, res) => {
  res.send(` ${productoPage()}`);
});
app.get("/productoRandom", (req, res) => {
  res.send(` ${productoRandomPage()}`);
});

//Levantamos server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
