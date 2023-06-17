import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function useAxios() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [context, setContext] = useOutletContext();

  useEffect(() => {
    const getResponse = async () => {
      try {
        if (!context.token || Math.floor(Date.now() / 1000) > context.expire) {
          const response = await axios.post(
            "https://api.petfinder.com/v2/oauth2/token",
            JSON.stringify({
              grant_type: "client_credentials",
              client_id: "6FnWuZyECLR31Brr6Ftgs3srIBQEa7jgIt7DmwLpSPWGD4FpqW",
            }),
            { headers: { "content-type": "application/json" } }
          );
          const data = await response.data;
          setContext({
            token: data.access_token,
            expire: data.expires_in + Math.floor(Date.now() / 1000),
          });
        } else {
          const nextResponse = await axios.get(
            "https://api.petfinder.com/v2/animals",
            {
              headers: {
                Authorization: "Bearer " + context.token,
              },
            }
          );
          const nextData = nextResponse.data;
          setData(nextData);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
      }
    };
    getResponse();
  }, [context]);

  return [data, error, loading];
  // retuner et array med data, error og loadingstate
}

export default useAxios;
