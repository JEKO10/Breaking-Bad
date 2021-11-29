import { useState, useEffect } from "react";

const apiLink = "https://www.breakingbadapi.com/api/";

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`${apiLink}${urlParams}`);
  }, [urlParams]);

  return { isLoading, data, setIsLoading };
};

export default useFetch;
