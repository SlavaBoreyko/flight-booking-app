import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(
    axiosParams.method === "GET" || axiosParams.method === "get"
  );

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      setLoading(true);
      const result = await axios.request(params);
      setResponse(result);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (axiosParams.method === "GET" || axiosParams.method === "get") {
      fetchData(axiosParams);
    }
  }, []);

  const sendData = () => {
    fetchData(axiosParams);
  };

  return { response, error, loading, sendData };
};
