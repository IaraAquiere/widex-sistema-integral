import { useEffect, useState } from "react";
import "./Tabla.css";

const Tabla = ({ titulo, comps, pendientecheck, pendiente }) => {
  const [comprobantes,setComprobantes] = useState([]);

  useEffect(() => {
    setComprobantes(comps)
  },[comps]);
  
  return (
    <>
      <div className="tabla-micuenta">
        <p className="palabra">{titulo}</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>{pendientecheck}</th>
              <th>Fecha</th>
              <th>Tipo Comprobante</th>
              <th>Nro</th>
              <th>Importe</th>
              <th>Pendiente</th>
            </tr>
          </thead>
          <tbody className="table-group">
          { 
          comprobantes == undefined ? <tr></tr> :
          comprobantes.map( (x) => 
              <tr key={x.n_comp}>
                <td>{pendiente}</td>
              <td>{x.fecha_emis}</td>
              <td>{x.t_comp}</td>
              <td>{x.n_comp}</td>
              <td>{x.importe}</td>
              <td>{x.pendiente}</td>
              </tr> 
              )}

          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabla;
