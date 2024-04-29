import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/UseStore";
import Swal from "sweetalert2";
import "./Login.css";

const Login = () => {
  const [usuario, setUsuario] = useState("Victoria");
  const [contraseña, setContraseña] = useState("123456");
  const navigate = useNavigate();
  const { SetToken } = useStore();

  const mostrarAlerta = () => {
    Swal.fire({
      position: "top-end",
      title: "AVISO",
      text: "usuario y/o contraseña incorrectos",
      confirmButtonText: "Continuar",
    });
  };

  const handleSubmit = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: usuario,
      password: contraseña,
    });

    console.log(raw);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    SetToken("");
    
    fetch("http://localhost:5000/User/Login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var login = JSON.parse(result);
        if (login.token != undefined) {
          SetToken(login.token);
          console.log(result);
          navigate("/ordenes");
        } else {
          mostrarAlerta();
        }
      })
      .catch((error) => console.error(error));

    e.preventDefault();
  };

  return (
    <div className="todo">
      <div className="wrapper">
        <h1>Bienvenidos</h1>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
