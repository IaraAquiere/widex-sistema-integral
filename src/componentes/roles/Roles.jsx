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

    

    fetch(
      "HTTP://localhost:5000/Permisos/ListarRoles",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const data = JSON.parse(result);
        setRoles(result);
        console.log(data);
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
              
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {listarBusqueda.map((rol) => {
              <tr >
                <td>{rol.nombre_rol}</td>
              </tr>
            })}
          </tbody>
        </table>
    </>
  );
};

export default Roles;
