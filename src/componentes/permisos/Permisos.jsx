import { useEffect, useState } from "react";
import Busqueda from "../busqueda/Busqueda";
import obtenerProductos from "../../permisosMock copy/PermisosMock";

const Permisos = () => {
  const [permisos, setPermisos] = useState([]);
  const [buscador, setBuscador] = useState("");

  useEffect(() => {
    obtenerProductos.then((respuesta) => {
      setPermisos(respuesta);
    });
  }, []);

  const busquedaPermisos = (e) => {
    setBuscador(e.target.value);
  };

  const resultado = !buscador
    ? permisos
    : permisos.filter((data) =>
        (data.NOMBRE_PERMISO && data.NOMBRE_PERMISO.toLowerCase().includes(buscador.toLocaleLowerCase()))
      );

  return (
    <>
      <Busqueda
        className1="d-flex flex-row justify-content-center m-3"
        className2="form-control form-control-lg border border-dark-subtle w-50  "
        placeholder="Buscar Orden"
        onChange={busquedaPermisos}
        value={buscador}
      />
      <div className="container p-3">
        <table className="table table-hover table-bordered ">
          <thead>
            <tr>
              <th>Permiso</th>
              <th> </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {resultado.map((permiso) => (
              <tr key={permiso.ID}>
                <td>{permiso.NOMBRE_PERMISO}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Permisos;
