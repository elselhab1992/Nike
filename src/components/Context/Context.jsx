/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";
import { heroapi, popularsales, toprateslaes, story } from "../../data/data";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [hero, setHero] = useState(heroapi);
  const [popular, setPopular] = useState(popularsales);
  const [top, setTop] = useState(toprateslaes);
  const [stories, setStories] = useState(story);

  return (
    <AppContext.Provider
      value={{
        hero,
        setHero,
        popular,
        setPopular,
        top,
        setTop,
        stories,
        setStories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
