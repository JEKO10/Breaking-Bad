import React from "react";
import { useGlobalContext } from "../context";

const Categories = () => {
  const { setQuery, setIsLoading, data } = useGlobalContext();

  return (
    <section className="categories">
      <button
        onClick={() => {
          setQuery("characters");
          setIsLoading(true);
          if (data.length > 0) {
            setIsLoading(false);
          }
        }}
      >
        Characters
      </button>
      <button
        onClick={() => {
          setQuery("episodes");
          setIsLoading(true);
          if (data.length > 0) {
            setIsLoading(false);
          }
        }}
      >
        Episodes
      </button>
      <button
        onClick={() => {
          setQuery("quotes");
        }}
      >
        Quotes
      </button>
    </section>
  );
};

export default Categories;
