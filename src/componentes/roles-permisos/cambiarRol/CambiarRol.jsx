import { useEffect, useState } from "react";
import Busqueda from "../../busqueda/Busqueda";
import { useStore } from "../../../store/UseStore";
import { useNavigate } from "react-router-dom";

import "./CambiarRol.css";

const CambiarRol = () => {
  const { token } = useStore();
  const [roles, setRoles] = useState([]);
  const [buscarRoles, setBuscarRoles] = useState("");
  const navigate = useNavigate();

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

  const Nuevo = () => {
    navigate(`/permisos/-1/0`);
  };

  const Copiar = (id_rol) => {
    navigate(`/permisos/0/${id_rol}`);
  };

  const Modificar = (id_rol) => {
    navigate(`/permisos/${id_rol}/${id_rol}`);
  };

  const rolesBusqueda = (e) => {
    setBuscarRoles(e.target.value);
  };

  const rolesResult = !buscarRoles
    ? roles
    : roles.filter((dato) =>
        dato.nombre_rol.toLowerCase().includes(buscarRoles.toLocaleLowerCase())
      );

  return (
    <>
      <div className="titulo">
        <h1>Roles</h1>
      </div>
      <Busqueda
        className1="d-flex flex-row justify-content-center m-3"
        className2="form-control form-control-lg border border-dark-subtle w-30"
        placeholder="Buscar Rol"
        onChange={rolesBusqueda}
        value={buscarRoles}
      />
      <div className="container p-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {rolesResult.map((rol) => (
              <tr key={rol.id_rol}>
                <td></td>
                <td>{rol.nombre_rol}</td>
                <td>
                  <div className="acomodar">
                    <button
                      type="button"
                      className="modificar"
                      onClick={() => Modificar(rol.id_rol)}
                    >
                      Modificar
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => Copiar(rol.id_rol)}
                    >
                      Copiar
                    </button>
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

export default CambiarRol;
