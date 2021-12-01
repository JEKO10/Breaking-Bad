import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const { isLoading, setIsLoading, data } = useFetch(`${query}?name=${search}`);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        data,
        query,
        setQuery,
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
