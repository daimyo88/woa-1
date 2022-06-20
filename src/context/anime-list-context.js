import React, { useEffect } from 'react';
import { createContext, useState } from "react";
import getAnimeAll from '../services/getAnimeAll';
import getAnimeGenres from '../services/getAnimeGenres';

const AnimeListContext = createContext({});

const AnimeListContextProvider = ({ children }) => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [animeList, setAnimeList] = useState([]);
  const [count, setCount] = useState(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [sort, setSort] = useState('&sort=desc&order_by=score');
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const setSearch = (value) => {
    setSearchQuery(value);
    setPage(1);
  } 

  const setSortOrder = (value) => {
    setSort(value);
    setPage(1);
  } 

  useEffect(() => {
    const options = {
      searchQuery,
      page,
      sort,
      genres: selectedGenres
    }
    const fetchAnime = async () => {
      try {
        setLoading(true);
        const anime = await getAnimeAll(options);
        setAnimeList(anime?.data?.data);
        setCount(anime?.data?.pagination?.items?.total);
        setPages(anime?.data?.pagination?.last_visible_page || 0);
      } catch(e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchAnime(options);
  },[searchQuery, page, sort, selectedGenres]);

  useEffect(() => {
    const fetchAnimeGenres = async () => {
      setTimeout(async () => {
          try {
            const genresList = await getAnimeGenres();
            setGenres(genresList?.data?.data);
          } catch(e) {
            console.log(e);
          }

        }, process.env.REACT_APP_API_DELAY)
    }
    fetchAnimeGenres();
  }, []);

  const dataState = {
    count,
    advancedSearch,
    setAdvancedSearch,
    loading,
    animeList,
    searchQuery,
    setSearch,
    page,
    setPage,
    pages,
    sort, 
    setSortOrder,
    genres,
    selectedGenres,
    setSelectedGenres
  };  

  return (
    <AnimeListContext.Provider value={dataState}>{children}</AnimeListContext.Provider>
  );
};

export { AnimeListContext, AnimeListContextProvider };