import { useState } from "react";
import { useStore } from "../../../store/UseStore";
import Busqueda from "../../busqueda/Busqueda";
import CambiarRol from "../cambiarRol/CambiarRol";
import "./ListaUsuarios.css";
const ListaUsuarios = () => {
  const { token } = useStore();
  const [listarUsuarios, setListarUsuarios] = useState([]);
  const [buscar, setBuscar] = useState("");

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer" + token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("localhost:5000/Permisos/ListarUsuarios", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      setListarUsuarios(JSON.parse(result));
    })
    .catch((error) => console.error(error));

  const busquedaUsuarios = (e) => {
    setBuscar(e.target.value);
  };

  const listar = !buscar
    ? listarUsuarios
    : listarUsuarios.filter((dato) =>
        dato.usuario.toLowerCase().includes(buscar.toLocaleLowerCase())
      );
  return (
    <>
      <Busqueda
        className1="d-flex flex-row justify-content-center m-3"
        className2="form-control form-control-lg border border-dark-subtle w-50  "
        placeholder="Buscar usuario"
        onChange={busquedaUsuarios}
        value={buscar}
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
            {listar.map((usuarios) => (
              <tr>
                <td>{usuarios.usuario}</td>
                <td>{usuarios.nombre_rol}</td>
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
                    <CambiarRol />
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
