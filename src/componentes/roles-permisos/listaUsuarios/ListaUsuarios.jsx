import Busqueda from "../../busqueda/Busqueda";
import CambiarRol from "../cambiarRol/CambiarRol";
import "./ListaUsuarios.css";
const ListaUsuarios = () => {
  return (
    <>
      <Busqueda
        className1="d-flex flex-row justify-content-center m-3"
        className2="form-control form-control-lg border border-dark-subtle w-50  "
        placeholder="Buscar usuario"
      />
      <div className="container p-3">
        <table className="table table-hover  ">
          <thead>
            <tr>
              <th>Nombre usuario</th>
              <th>Rol</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <td>victoria</td>
              <td>chami</td>
              <td>
                <div className="acomodar-borones">
                <div className="cambiar-rol">
                  <button
                    type="button"
                    className="cambiar"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Cambiar Rol
                  </button>
                </div>
                <CambiarRol/>
                <div className="cambiar-contraseña">
                  <button type="button" className="cambiar">
                    Cambiar Con
                  </button>
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

export default ListaUsuarios;
