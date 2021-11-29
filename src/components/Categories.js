import React from "react";
import { useGlobalContext } from "../context";

const Categories = () => {
  const { setQuery, setIsLoading, data } = useGlobalContext();
  return (
    <section className="categories">
      <button
        onClick={() => {
          setQuery("characters");
          if (data.length > 4) {
            setIsLoading(false);
          }
        }}
      >
        Characters
      </button>
      <button
        onClick={() => {
          setQuery("episodes");
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
