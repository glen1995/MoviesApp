import { BASE_URL, APP_KEY } from "../config/api_config";
import { useEffect, useState } from "react";
const apiRequest = (type, queryString) => {
  const myAbortController = new AbortController();
  let url = "";
  let searchType;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  switch (type) {
    case "movie":
      searchType = "movie";
      url = `${BASE_URL}${searchType}/${queryString}?api_key=${APP_KEY}&language=en-US&page=1`;
      break;
    case "tv":
      searchType = "tv";
      url = `${BASE_URL}${searchType}/${queryString}?api_key=${APP_KEY}&language=en-US&page=1`;
      break;
    default:
      throw new Error("You must pass type");
  }

  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url, { signal: myAbortController.signal });
        const json = await res.json();

        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    return () => {
      myAbortController.abort()
    };
  }, [url]);

  return { response, error, isLoading, url };
};

export default apiRequest;
