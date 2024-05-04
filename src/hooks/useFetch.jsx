import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from "../store/UseStore";

function useFetch(login,usuario,contrasena) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { SetToken } = useStore();

  useEffect(() => {
    if(login > 0)
    {
      setLoading('loading...')
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
            SetToken(login.token)
            localStorage.setItem("miToken", login.token);
            navigate("/ordenes")
          } else {
            setError("no hay token")
          }
          setLoading(null)
        })
        .catch((error) => {
          setError(error)
          setLoading(null)
        });
      }
      
  }, [login])

  return { loading, error }
}

export default useFetch;