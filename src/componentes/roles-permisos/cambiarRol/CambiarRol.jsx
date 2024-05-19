

const CambiarRol = () => {
  return (
    <>
      <div
        className="modal "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Roles
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <select className="form-select" aria-label="Multiple select example">
                <option selected>Seleccionar un Rol</option>
                <option select>Fonoudiologas</option>
                <option select>Sucursales</option>
                <option select>Distribuidores</option>
              </select>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary">
                Guardar
              </button>

              <button className="btn btn-success">
                Crear nuevo Rol
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CambiarRol;
