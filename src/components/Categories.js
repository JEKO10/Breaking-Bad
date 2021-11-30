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
        Char<span>Ac</span>ters
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
        Eis<span>O</span>des
      </button>
      <button
        onClick={() => {
          setQuery("quotes");
          setIsLoading(true);
          if (data.length > 0) {
            setIsLoading(false);
          }
        }}
      >
        Quo<span>Te</span>s
      </button>
    </section>
  );
};

export default Categories;
