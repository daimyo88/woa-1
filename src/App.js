import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeModeContextProvider } from "./context/theme-mode-context";

import Public from './layouts/Public';
import ThemeProvider from './theme/ThemeProvider';
import { AnimeListContextProvider } from './context/anime-list-context';
import Home from './routes/Home';
import Search from './routes/Search';
import About from './routes/About';
import Contact from './routes/Contact';
import Anime from './routes/Anime';
import PageNotFound from './routes/PageNotFound';

export default function App() {

  return (
    <BrowserRouter>
      <ThemeModeContextProvider>
        <ThemeProvider>
            <AnimeListContextProvider>
                <Routes>
                  <Route path="/" element={<Public />}>
                    <Route index element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="anime/:id" element={<Anime />} />
                    <Route path="*" element={<PageNotFound />} />
                  </Route>
                </Routes>
            </AnimeListContextProvider>
        </ThemeProvider>
      </ThemeModeContextProvider>
    </BrowserRouter>
  );
}

