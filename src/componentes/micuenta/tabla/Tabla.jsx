import { useEffect, useState } from "react";
import "./Tabla.css";

const Tabla = ({ titulo, comps, ActualizarImporte }) => {
  const [comprobantes, setComprobantes] = useState([]);

  const checkClick = (e, importeCheck) => {
    if (e.target.checked) ActualizarImporte(Number(importeCheck.toFixed(2)));
    else ActualizarImporte(Number((importeCheck * -1).toFixed(2)));
  };

  useEffect(() => {
    setComprobantes(comps);
  }, [comps]);

  return (
    <>
      <div className="tabla-micuenta">
        <p className="palabra">{titulo}</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Fecha</th>
              <th>Tipo Comprobante</th>
              <th>Nro</th>
              <th>Importe</th>
              <th>Pendiente</th>
            </tr>
          </thead>
          <tbody className="table-group">
            {comprobantes == undefined ? (
              <tr></tr>
            ) : (
              comprobantes.map((x) => (
                <tr key={x.n_comp}>
                   {x.pendiente <= 0 ? <td></td> : <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox"
                      onClick={(e) => checkClick(e, parseFloat(x.importe))}
                    />
                  </td>}
                  <td>{x.fecha_emis}</td>
                  <td>{x.t_comp}</td>
                  <td>{x.n_comp}</td>
                  <td>{x.importe}</td>
                  <td>{x.pendiente}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabla;
