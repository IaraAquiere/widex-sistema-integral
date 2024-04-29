import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/login/Login.jsx";
import Stock from "./componentes/stock/Stock.jsx";
import NavBar from "./componentes/navbar/NavBar.jsx";
import Ordenes from "./componentes/ordenes/Ordenes.jsx"
import "./App.css";



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/ordenes" element={<Ordenes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
