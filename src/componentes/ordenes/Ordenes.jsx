import Busqueda from "../busqueda/Busqueda";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/UseStore";
import  useStock from "../../hooks/useStock";

import "./Ordenes.css";
const Ordenes = () => {
  const { GetToken } = useStore();
  const navigate = useNavigate();
  const { data, cargando } = useStock();
  const [buscar, setBuscar] = useState("");

  const productoBusqueda= (e) => {
    setBuscar(e.target.value);
  };

  const resultado = !buscar
    ? data
    : data.filter((dato) =>
        dato.razoN_SOCI.toLowerCase().includes(buscar.toLocaleLowerCase())
      );
  
  useEffect(() => {
    if(GetToken() === "")
    {
      navigate("/");
    }
  }, []);

  return (
    <div className="table-wrapper">
      <Busqueda
        className1="d-flex flex-row justify-content-center m-3"
        className2="form-control form-control-lg border border-dark-subtle w-50  "
        placeholder="Buscar Orden"
        onChange={productoBusqueda}
          value={buscar}
      />
      <div className="tabla-busqueda">
        <table className="table table-hover table-bordered ">
          <thead>
            <tr>
              <th>Numero</th>
              <th colSpan="2">Tipo</th>
              <th colSpan="2">Cliente</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Nro. Entrega</th>
              <th>Factura</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
          {resultado.length === 0 ? (
              <div className="d-flex justify-cotents-center">
                <p>No se encontro ningun pedido</p>
              </div>
            ) : (
              cargando ??
              resultado.map((orden) => (
                <tr key={orden.Id}>
                  <td>{orden.nrO_PEDIDO}</td>
                  <td colSpan="2">{orden.tipo}</td>
                  <td colSpan="2">{orden.razoN_SOCI}</td>
                  <td>{orden.fechA_PEDI}</td>
                  <td>{orden.estado}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ordenes;
