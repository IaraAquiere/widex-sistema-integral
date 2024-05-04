import Busqueda from "../busqueda/Busqueda";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/UseStore";


import "./Ordenes.css";
const Ordenes = () => {
  const { GetToken } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(GetToken === "")
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
            <tr>
              <td>1256</td>
              <td colSpan="2">hola como va</td>
              <td colSpan="2"> victoria aquiere</td>
              <td>13/07/2023</td>
              <td>Ingresado</td>
              <td>23452</td>
              <td>00000000045</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ordenes;
