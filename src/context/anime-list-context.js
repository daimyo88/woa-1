import React, { useEffect } from 'react';
import { createContext, useState } from "react";
import getAnimeAll from '../services/getAnimeAll';

const AnimeListContext = createContext({});

const AnimeListContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const options = {
      searchQuery
    }
    const fetchAnime = async () => {
      try {
        const anime = await getAnimeAll(options);
        setAnimeList(anime?.data?.data)
      } catch(e) {
        console.log(e);
      }
    }
    fetchAnime(options);
  },[searchQuery]);

  const dataState = {
    animeList,
    searchQuery,
    setSearchQuery
  };  

  return (
    <AnimeListContext.Provider value={dataState}>{children}</AnimeListContext.Provider>
  );
};

export { AnimeListContext, AnimeListContextProvider };