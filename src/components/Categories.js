import React from "react";
import { useGlobalContext } from "../context";

const Categories = () => {
  const { setQuery } = useGlobalContext();
  return (
    <section className="categories">
      <button
        onClick={() => {
          setQuery("characters");
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
