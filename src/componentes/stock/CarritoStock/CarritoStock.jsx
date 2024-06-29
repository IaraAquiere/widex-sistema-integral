import { useStore } from "../../../store/UseStore";
import { CgCloseR } from "react-icons/cg";

const CarritoStock = () => {
    const { items, Delete } = useStore();
  return (
    <>
      <tbody className="table-group-divider">
        {items.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>
              <img
                className="imgProducto"
                src="https://eshop.widex.pro/-/media/Global/BABY/Baby%20440%20BTE/BABY440-rite-Pearlwhite.ashx"
                alt="fotoprueba"
              />
            </td>
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
    </>
  );
};

export default CarritoStock;
