import { useEffect, useState } from "react";
import Busqueda from "../../busqueda/Busqueda";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../../store/UseStore";

import "./Permisos.css";

const Permisos = () => {
  const [IdRol, setIdRol] = useState(0);
  const [permisos, setPermisos] = useState([]);
  const [buscador, setBuscador] = useState("");
  const [NombreRol, setNombreRol] = useState("");
  const navigate = useNavigate();
  const { token, GetToken } = useStore();
  const routeParams = useParams();

  const GetData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    console.log(routeParams.pId_rol);

    fetch(
      "HTTP://localhost:5000/Permisos/ListarPorRol/" + routeParams.pId_rol,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const data = JSON.parse(result);
        setNombreRol(data.nombre_rol);
        setPermisos(data.permisos);
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  const GuardarData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      id_rol: IdRol,
      nombre_rol: NombreRol,
      permisos: permisos,
    });
    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/Permisos/Guardar", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert(result);
        navigate("/cambiorol");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (GetToken() === "") {
      navigate("/");
    }
    setIdRol(routeParams.pId_rol);
    GetData();
    if (routeParams.pAccion <= 0) {
      setIdRol(0);
    }
  }, []);

  const busquedaPermisos = (e) => {
    setBuscador(e.target.value);
  };

  const resultado = !buscador
    ? permisos
    : permisos.filter((data) =>
        data.NOMBRE_PERMISO.toLowerCase().includes(buscador.toLocaleLowerCase())
      );

  const clickhandler = (permiso) => {
    const pos = permisos.findIndex(
      (item) => item.id_permiso === permiso.id_permiso
    );
    const newArray = [...permisos];
    newArray[pos].activo = !permiso.activo;
    setPermisos(newArray);
  };

  const cambioNombreRol = (e) => {
    setNombreRol(e.target.value);
  };

  return (
    <>
      {routeParams.pAccion <= 0 ? (
        <div className="nuevo-rol">
          <div className="titulo-nombre">
            <h4 className="nombre-titulo">Nombre Rol:</h4>
          </div>
          <div className="input-nombre">
            <input
              className="form-control form-control border border-dark-subtle w-10"
              type="text"
              placeholder="Nombre Nuevo Rol"
              value={NombreRol}
              onChange={cambioNombreRol}
            />
          </div>
        </div>
      ) : (
        <div className="container">
          <h1>{NombreRol}</h1>
        </div>
      )}

      <Busqueda
        className1="d-flex flex-row justify-content-center m-3"
        className2="form-control form-control-lg border border-dark-subtle w-50  "
        placeholder="Buscar Orden"
        onChange={busquedaPermisos}
        value={buscador}
      />
      <div className="container p-3">
        <table className="table table-hover  ">
          <thead>
            <tr>
              <th>Permiso</th>
              <th> </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {resultado.map((permiso) => (
              <tr key={permiso.id_permiso}>
                <td>{permiso.nombre_permiso}</td>
                <td>
                  <div className="form-check form-switch  ">
                    <div className="d-flex justify-content-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={permiso.activo}
                        onChange={() => clickhandler(permiso)}
                      ></input>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end">
        <div className="guardar-permisos">
          <button className="btn btn-success" onClick={() => GuardarData()}>
            Guardar
          </button>
        </div>
      </div>
    </>
  );
};

export default Permisos;
