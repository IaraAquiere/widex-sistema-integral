import { useEffect, useState } from "react";
import "./Login.css";
import logoWidex from '../../assets/imagenes/widex-dark-gray-logo.png';
import useFetch from "../../hooks/useFetch"


const Login = () => {
  const [usuario, setUsuario] = useState("Victoria");
  const [contraseña, setContraseña] = useState("123456");
  const [login,setLogin] = useState(0);

  const { loading, error } = useFetch(login,usuario,contraseña);

  const handleSubmit = (e) => {
    setLogin(login + 1);
    e.preventDefault();
  };

  return (
    <div className="todo">
      <div className="wrapper">
       <img src={logoWidex} alt="" />
        <form onSubmit={handleSubmit}>
          <div className="text-login">
            <p>Usuario</p>
            <input
              type="text"
              onChange={(e) => setUsuario(e.target.value)}
              value={usuario}
              required
            />
          </div>
          <div className="text-login">
            <p>Contraseña</p>
            <input
              type="password"
              onChange={(e) => setContraseña(e.target.value)}
              value={contraseña}
              required
            />
          </div>
          <div className="d-grid gap-8 col-8 mx-auto">
            <div className="me-md-16 mt-4">
              <button type="submit" className="boton-iniciar">
                Iniciar
              </button>
            </div>
          </div>
          <p>{loading}</p>
          <p>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
