import { useState, useEffect } from "react";

export const useFetch = <Model extends {}>(url: string) => {
  const [data, setData] = useState<Model | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error: any) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { loading, error, data };
};
