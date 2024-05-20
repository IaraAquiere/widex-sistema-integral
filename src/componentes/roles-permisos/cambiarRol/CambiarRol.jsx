import React, { useState, useEffect } from "react";
import { useStore } from "../../../store/UseStore";

const CambiarRol = ({ boton1, boton2, cerrarModal}) => {
  const { token } = useStore();
  const [roles, setRoles] = useState([]);
  const [rolSeleccionado, setRolSeleccionado] = useState("");

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

  const handleSeleccionar = (event) => {
    setRolSeleccionado(event.target.value);
  };

  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Roles
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <select
                className="form-select"
                aria-label="Seleccionar un rol"
                value={rolSeleccionado}
                onChange={handleSeleccionar}
              >
                <option selected>Seleccionar un rol</option>

                {roles.map((rol) => (
                  <option>{rol.nombre_rol}</option>
                ))}
              </select>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss={cerrarModal}
              >
                {boton1}
              </button>
              <button type="button" class="btn btn-primary" >
                {boton2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CambiarRol;
