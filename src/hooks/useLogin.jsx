import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from "../store/UseStore";

function useLogin(login,usuario,contrasena) {
  const [cargando, setCargando] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { SetToken,SetRol,SetNombre, SetLimite } = useStore();

  useEffect(() => {
    if(login > 0)
    {
      setCargando('cargando...')
      setError(null);
      
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        username: usuario,
        password: contrasena,
      });
      console.log(raw)
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch("http://localhost:5000/User/Login", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          var login = JSON.parse(result);
          if (login.token != undefined) {
            console.log(login);
            SetToken(login.token)
            SetLimite(login.limiteCredito)
            SetNombre(usuario)
            SetLimite
            SetRol(login.rol);
            localStorage.setItem("miToken", login.token);
            navigate("/ordenes")
          } else {
            setError("usuario y/o comtraseña incorrecto/s")
          }
          setCargando(null)
        })
        .catch((error) => {
          setError(error)
          setCargando(null)
        });
      }
      
  }, [login])

  return { cargando, error }
}

export default useLogin;