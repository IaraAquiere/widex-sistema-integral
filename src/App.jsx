import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/login/Login.jsx";
import Stock from "./componentes/stock/Stock.jsx";
import NavBar from "./componentes/navbar/NavBar.jsx";
import Ordenes from "./componentes/ordenes/Ordenes.jsx";
import ListarUsuarios from "./componentes/roles-permisos/listaUsuarios/ListaUsuarios.jsx";
import MiCuenta from "./componentes/micuenta/MiCuenta.jsx";
import Permisos from "./componentes/roles-permisos/permisos/Permisos.jsx";
import CambiarRol from "./componentes/roles-permisos/cambiarRol/CambiarRol.jsx";
import "./App.css";
import Roles from "./componentes/roles/Roles.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/ordenes" element={<Ordenes />} />
        <Route path="/listausuarios" element={<ListarUsuarios />} />
        <Route path="/micuenta" element={<MiCuenta />} />
        <Route path="/permisos/:pAccion/:pId_rol" element={<Permisos />}/>
        <Route path="/cambiorol" element={<CambiarRol/>}/>
        <Route path="/roles" element={<Roles/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
