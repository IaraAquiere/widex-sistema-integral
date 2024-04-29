import { useStore } from "../../../store/UseStore";
import { CgTrash, CgCloseR, CgFileDocument } from "react-icons/cg";
import "./Accordion.css";

const Accordion = () => {
  const { items, Delete, Vaciar, Total,token } = useStore();

  const GuardarOrden = () => {
    console.log(JSON.stringify(items));

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);
    
    const raw = JSON.stringify(items);
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://localhost:5000/Stock/GuardarOrden", requestOptions)
      .then((response) => response.text())
      .then((result) => alert(result))
      .catch((error) => console.error(error));
  
  };

  return (
    <>
      <div className="accordion-flush-item mt-4">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Productos seleccionados
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse "
          data-bs-parent="#accordionFlushExample"
        >
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
                          className="boton-eliminar "
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
            <div className=" row ">
              <div className="col-4">
                <input
                  placeholder="Leyenda 1"
                  name="leyenda"
                  type="text"
                  className="my-2 form-control"
                />
                <input
                  placeholder="Leyenda 2"
                  name="leyenda"
                  type="text"
                  className="my-2 form-control"
                />
                <input
                  placeholder="Leyenda 3"
                  name="leyenda"
                  type="text"
                  className="my-2 form-control"
                />
                <input
                  placeholder="Leyenda 4"
                  name="leyenda"
                  type="text"
                  className="my-2 form-control"
                />
                <input
                  placeholder="Leyenda 5"
                  name="leyenda"
                  type="text"
                  className="my-2 form-control"
                />
              </div>
              <div className="col mt-3 ">
                <div className="total ">
                  <h4>Total: $ {Total()}</h4>
                </div>
                <div className="acomodar-botones ">
                  <div className="p-1">
                    <button className="btn btn-danger " onClick={Vaciar}>
                      Vaciar <CgTrash />
                    </button>
                  </div>
                  <div className="p-1">
                    <button className="btn btn-success " onClick={() => GuardarOrden()}>
                      Guardar <CgFileDocument />
                    </button>
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

export default Accordion;
