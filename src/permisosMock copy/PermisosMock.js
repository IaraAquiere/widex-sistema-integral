const productos = [
  {
    ID: 1,
    NOMBRE_PERMISO: "/Stock/Ver Stock",
  },
  {
    ID: 2,
    NOMBRE_PERMISO: "/Stock/Articulos/Widex",
  },
  {
    ID: 3,
    NOMBRE_PERMISO: "/Stock/Articulos/Coselgi",
  },
  {
    ID: 4,
    NOMBRE_ROL: "Sucursales",
  },
  {
    ID: 5,
    NOMBRE_ROL: "Distribuidores",
  },
  {
    ID: 6,
    NOMBRE_ROL: "Fonoudiologa",
  }
];

const obtenerProductos = new Promise((resolve, reject) => {
  //Simulamos un retraso de red
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default obtenerProductos