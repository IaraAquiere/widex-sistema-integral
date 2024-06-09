import { useStore } from "../../store/UseStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Producto from "./Producto/Producto";
import OrdenStock from "./OrdenStock/OrdenStock";
import Busqueda from "../busqueda/Busqueda";

import "./Stock.css";

const Stock = () => {
  const { token, GetToken } = useStore();
  const [buscador, setBuscador] = useState("");
  const [productos, setProductos] = useState([]);

  const navigate = useNavigate();

  const URL = "http://localhost:5000/";

  const showData = async () => {
    const myHeaders = new Headers();
    const tk = GetToken();
    myHeaders.append("Authorization", "Bearer " + tk);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(URL + "Productos/Listar", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var data = JSON.parse(result);
        setProductos(data);
      })
      .catch((error) => console.error(error));
  };

  const busquedaProductos = (e) => {
    setBuscador(e.target.value);
  };

  const resultado = !buscador
    ? productos
    : productos.filter((dato) =>
        dato.descripcion.toLowerCase().includes(buscador.toLowerCase())
      );

  useEffect(() => {
    if (GetToken() === "") {
      navigate("/");
    }

    showData();
  }, []);

  return (
    <div className="container pt-4">
      {/* accordion */}
      <OrdenStock />
      {/* busqueda de productos */}
      <Busqueda
        className1="d-flex flex-row justify-content-center m-4"
        className2="form-control border border-dark-subtle w-50"
        onChange={busquedaProductos}
        value={buscador}
        placeholder="Buscar Productos"
      />
      {/* tabla de productos */}
      <div>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {resultado.map((producto) => (
              <Producto key={producto.id} paramProducto={producto} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stock;
