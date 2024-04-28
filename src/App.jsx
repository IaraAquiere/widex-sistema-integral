import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/login/Login.jsx";
import Stock from "./componentes/stock/Stock.jsx";
import NavBar from "./componentes/navbar/NavBar.jsx";
import "./App.css";



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
