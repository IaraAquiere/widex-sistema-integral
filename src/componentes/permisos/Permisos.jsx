import Busqueda from "../busqueda/Busqueda";
import PermisosMock from "../../permisosMock/PermisosMock"

const Permisos = () => {
  return (
    <>
    <Busqueda
    className1="d-flex flex-row justify-content-center m-3"
    className2="form-control form-control-lg border border-dark-subtle w-50  "
    placeholder="Buscar Orden"
    />
      <div className="container p-3">
        <table className="table table-hover table-bordered ">
          <thead>
            <tr>
              <th>Permiso</th>
              <th>check</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
              <tr>
               <td></td>
              <td>
                <div className="form-check form-switch  ">
                    <div className="d-flex justify-content-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  ></input>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Permisos;
