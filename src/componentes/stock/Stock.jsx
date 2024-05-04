import { useStore } from "../../store/UseStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabla from "./tabla/Tabla";
import Accordion from "./accordion/Accordion";
import Busqueda from "../busqueda/Busqueda";
import "./Stock.css";

const Stock = () => {
  const { token,GetToken } = useStore();
  const [buscador, setBuscador] = useState("");
  const [productos, setProductos] = useState([]);

  const navigate = useNavigate();

  const URL = "http://localhost:5000/";

  const showData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };
    console.log(URL + "Productos/Listar");
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
        dato.descripcion.toLowerCase().includes(buscador.toLocaleLowerCase())
      );

  useEffect(() => {
    if(GetToken === "")
    {
      console.log(token);
      navigate("/");
    }

    showData();
  }, []);

  return (
    <div className="container">
      <div className=" accordion   p-3" id="accordionFlushExample">
        {/* accordion */}
        <Accordion />
        {/* busqueda de productos */}
        <Busqueda
          className1="d-flex flex-row justify-content-center m-4"
          className2="form-control border border-dark-subtle w-50"
          onChange={busquedaProductos}
          value={buscador}
          placeholder="Buscar Productos"
        />
      </div>
      {/* tabla de productos */}
      <div>
        <table className="table table-hover table-bordered ">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group-divider" >
            {resultado.map((producto) => (
              <Tabla paramProducto={producto} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stock;
