import { useEffect, useState } from "react";
import logoWidex from "../../assets/imagenes/widex-dark-gray-logo.png";
import useLogin from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/UseStore";

import "./Login.css";
const Login = () => {
  const [usuario, setUsuario] = useState("AGP");
  const [contraseña, setContraseña] = useState("AGP");
  const [login, setLogin] = useState(0);
  const { GetToken } = useStore();
  const navigate = useNavigate();

  const { cargando, error } = useLogin(login, usuario, contraseña);

  const handleSubmit = (e) => {
    setLogin(login + 1);
    e.preventDefault();
  };

  useEffect(() => {
    if (GetToken() !== "") {
      navigate("/ordenes");
    }
  }, []);

  return (
    <div className="todo">
      <div className="wrapper">
        <img src={logoWidex} alt="logo" />
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
          <p>{cargando}</p>
          <p>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
