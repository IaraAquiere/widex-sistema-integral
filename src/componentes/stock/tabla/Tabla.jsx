import { useState } from "react";
import { useStore } from "../../../store/UseStore";


const Tabla = (paramProducto) => {
  
  const { AddProduct, token} = useStore();
  const [contador, setContador] = useState(1);
  const [producto, setProducto] = useState(paramProducto.paramProducto);
  

  
  const AgregarProducto = () => {
    AddProduct({...producto,cantidad: contador});
    setContador(1)
  };

  const sumar = () => {
    if (contador < 5) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
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
        <div className="boton-agregar">
            <button
              type="button"
              className="agregar-boton"
              onClick={() => AgregarProducto(producto)}
            >
              Agregar
            </button>
          </div>

  </tr>
  );
};

export default Tabla;
