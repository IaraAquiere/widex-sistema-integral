import { useState, useEffect } from "react";
import { useStore } from "../../../store/UseStore";
import { useNavigate } from "react-router-dom";
import Busqueda from "../../busqueda/Busqueda";
import ModalRoles from "./modalRoles/ModalRoles.jsx";
import "./ListaUsuarios.css";


const ListaUsuarios = () => {
  const { token } = useStore();
  const [usuariosl, setUsuariosl] = useState([]);
  const [buscar, setBuscar] = useState("");
  const navigate = useNavigate();
  const listarUsuarios = async () => {
    try {
      const respuestaUsuarios = await fetch(
        "http://localhost:5000/Permisos/ListarUsuarios",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!respuestaUsuarios) {
        throw new Error("Error de red");
      }
      const datosUsuarios = await respuestaUsuarios.json();
      setUsuariosl(datosUsuarios);
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  const busquedaUsuarios = (e) => {
    setBuscar(e.target.value);
  };

  const listarBusqueda = !buscar
    ? usuariosl
    : usuariosl.filter((data) =>
        data.usuarios.toLowerCase().includes(buscar.toLocaleLowerCase())
      );
 

  return (
    <>
      <div className="titulo">
        <h1>Lista de Usuarios</h1>
      </div>
      <Busqueda
        className1="d-flex flex-row justify-content-center m-3"
        className2="form-control form-control-lg border border-dark-subtle w-30"
        placeholder="Buscar usuario"
        onChange={busquedaUsuarios}
        value={buscar}
      />
      <div className="container p-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {listarBusqueda.map((usuarios) => (
              <tr>
                <td>{usuarios.usuario}</td>
                <td>{usuarios.nombre_rol}</td>
                <td>
                  <div className="acomodar-borones">
                    <div className="cambiar-rol">
                      <button
                        type="button"
                        className="cambiar"
                        data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                      >
                        Cambiar Rol
                      </button>
                    </div>
                    <ModalRoles/>
                    <div className="cambiar-contraseña">
                      <button type="button" className="cambiar">
                        Cambiar Con
                      </button>
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

export default ListaUsuarios;
