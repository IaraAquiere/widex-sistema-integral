import { useEffect, useState } from "react";
import Busqueda from "../../busqueda/Busqueda";
import { useStore } from "../../../store/UseStore";



const CambiarRol = () => {
  const { token } = useStore();
  const [roles, setRoles] = useState([]);

  const obtenerRoles = async () => {
    try {
      const respuesta = await fetch(
        "http://localhost:5000/Permisos/ListarRoles",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!respuesta) {
        throw new Error("Error de red");
      }
      const datos = await respuesta.json();
      setRoles(datos);
    } catch (error) {
      console.error("Error al obtener roles:", error);
    }
  };
  useEffect(() => {
    obtenerRoles();
  }, []);

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
              <th>Rol</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {roles.map((rol) => (
              <tr>
                <td>{rol.nombre_rol}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-secondary"
                  >
                      Modificar
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                  >
                    Copiar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end">
        <div className="guardar-permisos">
          <button className="btn btn-success">Guardar</button>
        </div>
      </div>
    </>
  );
};

export default CambiarRol;
