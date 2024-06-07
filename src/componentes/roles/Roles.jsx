import React, { useEffect, useState } from "react";
import { useStore } from "../../store/UseStore";
import Busqueda from "../busqueda/Busqueda";

const Roles = () => {
  const { token } = useStore();
  const [roles, setRoles] = useState([]);
  const [buscar, setBuscar] = useState("");

  const GetData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("HTTP://localhost:5000/Permisos/ListarRoles", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setRoles(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    GetData();
  }, []);

  const busquedaUsuarios = (e) => {
    setBuscar(e.target.value);
  };
  const listarBusqueda = !buscar
    ? roles
    : roles.filter((data) =>
        data.nombre_rol.toLowerCase().includes(buscar.toLocaleLowerCase())
      );

  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Cambiar Rol
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Busqueda
                className1="d-flex flex-row justify-content-center m-3"
                className2="form-control form-control-lg border border-dark-subtle w-30"
                placeholder="Buscar usuario"
                onChange={busquedaUsuarios}
                value={buscar}
              />
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="table-group">
                  {listarBusqueda != [] ? (
                    listarBusqueda.map((rol) => (
                      <tr key={rol.id_rol}>
                        <td>{rol.nombre_rol}</td>
                        <td>
                          <div>
                            <button type="button" className="btn btn-success">
                              Agregar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <td></td>
                  )}
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                Cambiar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roles;
