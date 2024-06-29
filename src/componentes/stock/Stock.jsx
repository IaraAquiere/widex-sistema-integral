import { useStore } from "../../store/UseStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Producto from "./Producto/Producto";
import Busqueda from "../busqueda/Busqueda";
import Accordion from "../Accordion/Accordion";
import { CgTrash, CgFileDocument } from "react-icons/cg";

import "./Stock.css";
import CarritoStock from "./CarritoStock/CarritoStock";

const Stock = () => {
  const { items, Vaciar, token, GetToken } = useStore();
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

  const GuardarOrden = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var ordenWeb = {
      Items: items,
      Leyenda_1: document.getElementById("Leyenda_1").value,
      Leyenda_2: document.getElementById("Leyenda_2").value,
      Leyenda_3: document.getElementById("Leyenda_3").value,
      Leyenda_4: document.getElementById("Leyenda_4").value,
      Leyenda_5: document.getElementById("Leyenda_5").value,
    };

    const raw = JSON.stringify(ordenWeb);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/Stock/GuardarOrden", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert(result);
        Vaciar();
        navigate("/ordenes");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container pt-4">
      {/* accordion */}
      <Accordion
        tablaCarrito={<CarritoStock />}
        onClick={Vaciar}
        tituloboton1={"Vaciar" + CgTrash }
        onclick2={() => GuardarOrden()}
        tituloboton2={"Guardar" + CgFileDocument }  //arreglar esto
      />
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
              <th>Codigo</th>
              <th>Producto</th>
              <th>Descripcion</th>
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
