import Accordion from "../Accordion/Accordion";
import { useNavigate } from "react-router-dom";

import "../VerOrden/VerOrden.css"


const VerOrden = () => {
  const navigate = useNavigate();

  const volverOrdenes = () => {
    navigate("/ordenes");
  };
  

  const CargarOrden = () => {
    const articulos = [
      { id: 1, descripcion: "Japi", precio: 10, cantidad: 1 },
      { id: 1, descripcion: "Japi", precio: 10, cantidad: 1 },
    ];
    setItems(articulos);
  };


  return (
    <>
    <div className="container pt-4">
      <div className="titulo-ver-orden">
      <h2 >Vista de Orden</h2>
      </div>
      <Accordion
        tablaCarrito={
          <tbody className="table-group-divider">
           
          </tbody>
        }
        classnameAccordion1="accordion accordion-flush border "
        ariaExpanded="true"
        classnameAccordion2="accordion-button collapsed"
        tituloboton1="Salir"
        onClick1={() => volverOrdenes()}
      />
      </div>
    </>
  );
};

export default VerOrden;
