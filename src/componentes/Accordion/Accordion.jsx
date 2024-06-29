import { useStore } from "../../store/UseStore";


import "./Accordion.css";

const Accordion = ({tablaCarrito, onClick1, tituloboton1, onclick2, tituloboton2 }) => {
  const { items, Total } = useStore(); 
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
              Orden de Stock
              {items.length > 0 ? " ( " + items.length + " ) " : ""}
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
                    <th>Descripcion</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Importe</th>
                  </tr>
                </thead>
                {tablaCarrito}
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
                      <button className="btn btn-danger" onClick={onClick1}>
                        {tituloboton1}
                      </button>
                    </div>
                    <div className="p-1">
                      <button
                        className="btn btn-success"
                        onClick={onclick2}
                      >
                        {tituloboton2}
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

export default Accordion;
