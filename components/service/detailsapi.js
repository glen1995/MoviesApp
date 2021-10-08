import { BASE_URL, APP_KEY } from "../config/api_config";
import { useEffect, useState } from "react";
const detailsRequest = (type, id) => {
  const myAbortController = new AbortController();
  let url = "";
  let searchType;
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  switch (type) {
    case "movie":
      searchType = "movie";
      url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${APP_KEY}`;
      break;
    case "tv":
      searchType = "tv";
      url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${APP_KEY}`;
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
      myAbortController.abort();
    };
  }, [url]);

  return { response, error, isLoading};
};

export default detailsRequest;
