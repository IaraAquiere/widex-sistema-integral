import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/login/Login.jsx";
import Stock from "./componentes/stock/Stock.jsx";
import NavBar from "./componentes/navbar/NavBar.jsx";
import Ordenes from "./componentes/ordenes/Ordenes.jsx";
import Permisos from "./componentes/permisos/Permisos.jsx";
import MiCuenta from "./componentes/micuenta/MiCuenta.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/ordenes" element={<Ordenes />} />
        <Route path="/permisos" element={<Permisos />} />
        <Route path="/micuenta" element={<MiCuenta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
