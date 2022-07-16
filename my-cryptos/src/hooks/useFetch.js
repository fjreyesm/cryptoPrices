import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error2, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (res.ok) {
          const json = await res.json();
          console.log(" res.ok setData asignado y error null");
          setData(json);
          setError(null);
        } else {
          let err = new Error("Error en la petición Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";
          throw err;
        }
      } catch (error2) {
        setData(null);
        setError(error2);
        console.log("!signal.aborted catch");
      } finally {
        setLoading(false);
        console.log("!signal.aborted finally");
      }
    };

    fetchData();
  }, [url]);

  console.log("dentro del hook" + { data });
  console.log("la data dentro de  useFetch es" + { data, error2, loading });
  return { data, error2, loading };
};

export default useFetch;
