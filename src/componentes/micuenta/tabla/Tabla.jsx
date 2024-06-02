import { useEffect, useState } from "react";
import "./Tabla.css";

const Tabla = ({ titulo, comps, importeAPagar, setImporteAPagar }) => {
  const [comprobantes,setComprobantes] = useState([]);



  const checkClick = (e, importeCheck) =>
    {   
      let x = importeAPagar
      if(e.target.checked)
      {
        x += importeCheck
      } else
      {
        x -= importeCheck
      }  
      setImporteAPagar(x)  
      console.log(x)
    }

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
              <th></th>
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
                <td>

                <div class="form-check form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox"
                          onClick={ (e) => checkClick(e, Number(x.importe)) }
                        />
                      </div>
                </td>
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
