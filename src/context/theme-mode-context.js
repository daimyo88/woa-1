import React from 'react';
import { createContext, useState } from "react";

const ThemeModeContext = createContext({});

const ThemeModeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState({mode: 'dark'});

  const dataState = {
    themeMode,
    setThemeMode,
  };

  return (
    <ThemeModeContext.Provider value={dataState}>{children}</ThemeModeContext.Provider>
  );
};

export { ThemeModeContext, ThemeModeContextProvider };