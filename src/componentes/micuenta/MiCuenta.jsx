import Tabla from "./tabla/Tabla";
import "./MiCuenta.css";
import { useEffect, useState } from "react";
import { useStore } from "../../store/UseStore";
import { useNavigate } from "react-router-dom";

const MiCuenta = () => {
  const [comprobantes, setComprobantes] = useState([]);
  const { token, GetNombre, limiteCredito, GetToken } = useStore();
  const [importeAPargar, setImporteAPagar] = useState(0);
  const navigate = useNavigate();

  const ActualizarImporte = (importeChk) => {
    setImporteAPagar(Number((importeAPargar + importeChk).toFixed(2)));
  };

  useEffect(() => {
    if (GetToken() === "") {
      navigate("/");
    }

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://localhost:5000/Comprobantes/Listar", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setComprobantes(JSON.parse(result).comprobantes);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <div className="d-flex flex-colum align-items-center justify-content-center w-100">
          <div className="container">
            <div className="row">
              <div className="p-3 p-xl-5 my-3 my-xl-4 card">
                <div className="row">
                  <div className="col">
                    <h2>Hola, {GetNombre()}!</h2>
                  </div>
                  <div className="col ">
                    <div className="limite">
                      Limite de Credito: $ {limiteCredito}
                    </div>
                    <div className="boton-pagar">
                      <div className="texto-pagar">
                        Total a pagar : $ {importeAPargar}
                      </div>
                      <button className="btn btn-success">Pagar</button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <Tabla
                    titulo="Pendientes"
                    comps={comprobantes.filter((x) => x.cancelado == false)}
                    ActualizarImporte={ActualizarImporte}
                  />
                </div>
                <div className="row">
                  <Tabla
                    titulo="Cancelados"
                    comps={comprobantes.filter((x) => x.cancelado == true)}
                  />
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
