import { useState } from "react";
import { useStore } from "../../../store/UseStore";

import "./Producto.css";

const Producto = (paramProducto) => {
  const { AddProduct } = useStore();
  const [contador, setContador] = useState(0);
  const [producto, setProducto] = useState(paramProducto.paramProducto);

  const AgregarProducto = () => {
    if (contador === 0) {
      alert("No se puede agregar un producto con cantidad 0");
      return;
    }

    AddProduct({ ...producto, cantidad: contador });
    setContador(0);
  };

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <tr key={producto.id}>
      <td>{producto.descripcion}</td>
      <td>${producto.precio}</td>
      <td>{producto.stock}</td>
      <td>
        <div className="controles">
          <button className="botonesSumaResta" onClick={restar}>
            -
          </button>
          <div>{contador}</div>
          <button className="botonesSumaResta" onClick={sumar}>
            +
          </button>
        </div>
      </td>
      <td>
        <div className="boton-agregar">
          <button
            type="button"
            className="agregar-boton"
            onClick={() => AgregarProducto(producto)}
          >
            Agregar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Producto;
