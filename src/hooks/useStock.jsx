import { useState, useEffect } from 'react';

function useStock(url, method) {
  const [cargando, setCargando] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
      setCargando('cargando...')
      setError(null);
      
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
          redirect: "follow",
      };
  
      fetch("http://localhost:5000/Stock/Listar", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            setData(JSON.parse(result))
            
            setCargando(null)
        })
        .catch((error) => {
          setError(error)
          setCargando(null)
        });
      
      
  }, [])

  return { data, cargando, error }
}

export default useStock;