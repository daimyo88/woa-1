import React from 'react';
import { createContext, useState } from "react";

const ThemeModeContext = createContext({});
const mode = localStorage.getItem('woaThemeMode') || 'dark';

const ThemeModeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState({mode: mode});

  const dataState = {
    themeMode,
    setThemeMode,
  };

  return (
    <ThemeModeContext.Provider value={dataState}>{children}</ThemeModeContext.Provider>
  );
};

export { ThemeModeContext, ThemeModeContextProvider };