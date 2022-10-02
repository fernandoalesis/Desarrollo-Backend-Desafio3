const fs = require("fs");
class Contendor {
  constructor(nameFile) {
    this.nameFile = nameFile;
  }

  getAll = async () => {
    const contenido = await fs.promises.readFile(this.nameFile, "utf8");
    const productos = JSON.parse(contenido);
    console.log(productos);
    return productos;
  };
  getById = async () => {
    try {
      if (fs.existsSync(this.nameFile)) {
        const contenido = await fs.promises.readFile(this.nameFile, "utf8");
        if (contenido) {
          const productos = JSON.parse(contenido);
          let id = Math.ceil(Math.random() * productos.length);
          const producto = productos.find((item) => item.id === id);
          return producto;
        } else {
          return "El archivo esta vacio";
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = Contendor;
