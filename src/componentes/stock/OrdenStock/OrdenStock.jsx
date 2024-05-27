import { useStore } from "../../../store/UseStore";
import { CgTrash, CgCloseR, CgFileDocument } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import "./OrdenStock.css";

const OrdenStock = () => {
  const { items, Delete, Vaciar, Total, token } = useStore();
  const navigate = useNavigate();

  const GuardarOrden = () => {
    console.log(JSON.stringify(items));

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var ordenWeb = {
      Items: items,
      Leyenda_1: document.getElementById("Leyenda_1").value,
      Leyenda_2: document.getElementById("Leyenda_2").value,
      Leyenda_3: document.getElementById("Leyenda_3").value,
      Leyenda_4: document.getElementById("Leyenda_4").value,
      Leyenda_5: document.getElementById("Leyenda_5").value,
    };

    const raw = JSON.stringify(ordenWeb);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/Stock/GuardarOrden", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        alert(result);
        Vaciar();
        navigate("/ordenes");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
            >
              Orden de Stock {items.length > 0 ? "(" + items.length + ")" : 
              {Total() == 0 ? "" : "Total:  $" + Total()}
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse">
            <div className="accordion-body">
              <table className="table table-hover table-bordered ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Importe</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {items.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.descripcion}</td>
                      <td>{product.cantidad}</td>
                      <td>$ {product.precio}</td>
                      <td>$ {product.cantidad * product.precio}</td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center">
                          <button
                            className="boton-eliminar"
                            onClick={() => Delete(product)}
                          >
                            <CgCloseR />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="row">
                <div className="col-4">
                  <input
                    id="Leyenda_1"
                    placeholder="Leyenda 1"
                    name="leyenda1"
                    type="text"
                    className="my-2 form-control"
                  />
                  <input
                    id="Leyenda_2"
                    placeholder="Leyenda 2"
                    name="leyenda2"
                    type="text"
                    className="my-2 form-control"
                  />
                  <input
                    id="Leyenda_3"
                    placeholder="Leyenda 3"
                    name="leyenda3"
                    type="text"
                    className="my-2 form-control"
                  />
                  <input
                    id="Leyenda_4"
                    placeholder="Leyenda 4"
                    name="leyenda4"
                    type="text"
                    className="my-2 form-control"
                  />
                  <input
                    id="Leyenda_5"
                    placeholder="Leyenda 5"
                    name="leyenda5"
                    type="text"
                    className="my-2 form-control"
                  />
                </div>
                <div className="col mt-3">
                  <div className="total">
                    <h4>Total: $ {Total()}</h4>
                  </div>
                  <div className="acomodar-botones">
                    <div className="p-1">
                      <button className="btn btn-danger" onClick={Vaciar}>
                        Vaciar <CgTrash />
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        className="btn btn-success"
                        onClick={() => GuardarOrden()}
                      >
                        Guardar <CgFileDocument />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdenStock;
