import "./Tabla.css";
const Tabla = ({ titulo }) => {
  return (
    <>
      <div className="tabla-micuenta">
        <p className="palabra">{titulo}</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo Comprobante</th>
              <th>Nro</th>
              <th>Fecha Venc.</th>
              <th>Importe</th>
              <th>Link Pago</th>
            </tr>
          </thead>
          <tbody className="table-group">
            <tr>
              <td>12/05/21</td>
              <td>factura</td>
              <td>0003264</td>
              <td>16/06/21</td>
              <td>$1250</td>
              <td>Link</td>
            </tr>
            <tr>
              <td>12/05/21</td>
              <td>factura</td>
              <td>0003264</td>
              <td>16/06/21</td>
              <td>$1250</td>
              <td>Link</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabla;
