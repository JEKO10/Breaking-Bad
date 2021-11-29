import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const { isLoading, setIsLoading, data } = useFetch(`${query}`);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        data,
        query,
        setQuery,
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
