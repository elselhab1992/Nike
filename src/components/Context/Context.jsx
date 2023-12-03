/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";
import { heroapi, popularsales } from "../../data/data";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [hero, setHero] = useState(heroapi);
  const [popular, setPopular] = useState(popularsales);

  return (
    <AppContext.Provider value={{ hero, setHero, popular, setPopular }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
