import Busqueda from "../busqueda/Busqueda";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/useStore";
import  useStock from "../../hooks/useStock";

import "./Ordenes.css";
const Ordenes = () => {
  const { GetToken } = useStore();
  const navigate = useNavigate();
  const { data, cargando } = useStock();
  
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
          
          {cargando ?? data.map((orden) => (
            <tr key ={orden.Id}>
              <td>{orden.nrO_PEDIDO}</td>
              <td colSpan="2">{orden.tipo}</td>
              <td colSpan="2">{orden.razoN_SOCI}</td>
              <td>{orden.fechA_PEDI}</td>
              <td>{orden.estado}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ordenes;
