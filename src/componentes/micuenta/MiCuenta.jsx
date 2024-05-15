import Tabla from "./tabla/Tabla";
import "./MiCuenta.css";
const MiCuenta = () => {
  return (
    <>
      <div id="root">
        <div className="d-flex flex-colum align-items-center justify-content-center w-100">
          <div className="container">
            <div className="row">
              <div className="p-3 p-xl-5 my-3 my-xl-4 card">
                <div className="row">
                  <div className="col">
                    <h2>Hola, usuario!</h2>
                  </div>
                  <div className="col ">
                    <div className="estado">Limite de Credito:</div>
                  </div>
                </div>
                <div className="row">
                  <Tabla titulo="Pendientes" />
                </div>
                <div className="row">
                  <Tabla titulo="Cancelados" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiCuenta;
