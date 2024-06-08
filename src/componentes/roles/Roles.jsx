import { useEffect, useState } from "react";
import { useStore } from "../../store/UseStore";
import { useNavigate } from "react-router-dom";
import Busqueda from "../busqueda/Busqueda";

const Roles = ({ Cambiar }) => {
  const { token, GetToken } = useStore();
  const [roles, setRoles] = useState([]);
  const [buscar, setBuscar] = useState("");
  const navigate = useNavigate();

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
    if (GetToken() === "") {
      navigate("/");
    }
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

  const CambiarRol = (id) => {
    Cambiar(id);
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Cambiar Rol
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Busqueda
                className1="d-flex flex-row justify-content-center m-3"
                className2="form-control form-control-lg border border-dark-subtle w-30"
                placeholder="Buscar rol"
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
                            <button
                              type="button"
                              className="btn btn-success"
                              data-bs-dismiss="modal"
                              onClick={() => CambiarRol(rol.id_rol)}
                            >
                              Cambiar
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Roles;
