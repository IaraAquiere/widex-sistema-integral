import { useState, useEffect } from "react";
import { useStore } from "../../../store/UseStore";
import { useNavigate } from "react-router-dom";
import Busqueda from "../../busqueda/Busqueda";
import Roles from "../../roles/Roles";

import "./ListaUsuarios.css";

const ListaUsuarios = () => {
  const { token, GetToken } = useStore();
  const [usuarios, setUsuarios] = useState([]);
  const [buscarUsuarios, setBuscarUsuarios] = useState("");
  const navigate = useNavigate();
  const [cambiar, setCambiar] = useState("");

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
      setUsuarios(datosUsuarios);
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    if (GetToken() === "") {
      navigate("/");
    }
    listarUsuarios();
  }, []);

  const busquedaUsuarios = (e) => {
    setBuscarUsuarios(e.target.value);
  };

  const listarBusqueda = !buscarUsuarios
    ? usuarios
    : usuarios.filter(
        (data) =>
          data.usuario
            .toLowerCase()
            .includes(buscarUsuarios.toLowerCase()) ||
          data.nombre_rol.toLowerCase().includes(buscarUsuarios)
      );

  const CambiarRol = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "bearer " + token);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };
    const url =
      "http://localhost:5000/Permisos/GuardarUsuarioRol/" +
      cambiar +
      "/" +
      id +
      "";

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert(result);
        setCambiar("");
        listarUsuarios();
      })
      .catch((error) => console.error(error));
  };

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
        value={buscarUsuarios}
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
              <tr key={usuarios.username}>
                <td></td>
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
                        onClick={() => setCambiar(usuarios.usuario)}
                      >
                        Cambiar Rol
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Roles Cambiar={CambiarRol} />
      </div>
    </>
  );
};

export default ListaUsuarios;
