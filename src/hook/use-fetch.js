import { useCallback, useState } from "react";
const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (query, applyData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(query.url, {
        method: query.method ? query.method : "GET",
        headers: query.headers ? query.headers : {},
        body: JSON.stringify(query.body) ? JSON.stringify(query.body) : null,
      });
      if (!response.ok) {
        throw new Error("Sunucu hatası!...");
      }
      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError(error.message || "Error...");
    }
    setLoading(false);
  }, []);

  return {
    error,
    loading,
    sendRequest,
  };
};

export default useFetch;
