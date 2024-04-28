import { useState } from "react";
import { useStore } from "../../../store/UseStore";

const Tabla = (paramProducto) => {
  const { AddProduct, token } = useStore();
  const [contador, setContador] = useState(0);
  const [producto, setProducto] = useState(paramProducto.paramProducto);

  const AgregarProducto = () => {
    AddProduct({ ...producto, cantidad: contador });
    setContador(0);
  };

  const sumar = () => {
    if (contador < producto.stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > stock) {
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
          <button onClick={restar}>-</button>
          <div>{contador}</div>
          <button onClick={sumar}>+</button>
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

export default Tabla;
