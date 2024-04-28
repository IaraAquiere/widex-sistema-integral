import { useState, useEffect } from 'react';

function useFetch(url,token,tipo,body) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      setLoading('loading...')
      setData(null);
      setError(null);
      
      const myHeaders = new Headers();
      
      myHeaders.append("Authorization", "Bearer " + token);
    
      
      let requestOptions = {
        method: tipo,
        redirect: "follow"
      };

      if(body != '')
      {
        const raw = JSON.stringify(body);
        myHeaders.append("Content-Type", "application/json");
        
        requestOptions = {...requestOptions,body : raw, Headers : myHeaders};
      }
      
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((res) => {
            setLoading(false);
            res.data.content && setData(res.data.content);
            res.content && setData(res.content);
        })
        .catch((error) => {
            setLoading(false)
            setError(error)
        });
  }, [body,tipo,url,token])

  return { data, loading, error }
}

export default useFetch;