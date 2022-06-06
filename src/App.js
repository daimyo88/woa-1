import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme/theme';
import Public from './layouts/Public';

import Home from './routes/Home';
import Search from './routes/Search';
import About from './routes/About';
import Anime from './routes/Anime';
import PageNotFound from './routes/PageNotFound';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Public />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="about" element={<About />} />
            <Route path="anime/:id" element={<Anime />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

