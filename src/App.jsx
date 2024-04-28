import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componentes/login/Login.jsx";
import Stock from "./componentes/stock/Stock.jsx";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
