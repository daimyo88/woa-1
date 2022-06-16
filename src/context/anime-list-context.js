import React, { useEffect } from 'react';
import { createContext, useState } from "react";
import getAnimeAll from '../services/getAnimeAll';

const AnimeListContext = createContext({});

const AnimeListContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [sort, setSort] = useState('&sort=desc&order_by=score');

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
      sort
    }
    const fetchAnime = async () => {
      try {
        setLoading(true);
        const anime = await getAnimeAll(options);
        setAnimeList(anime?.data?.data);
        setPages(anime?.data?.pagination?.last_visible_page || 0);
      } catch(e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchAnime(options);
  },[searchQuery, page, sort]);

  const dataState = {
    loading,
    animeList,
    searchQuery,
    setSearch,
    page,
    setPage,
    pages,
    sort, 
    setSortOrder
  };  

  return (
    <AnimeListContext.Provider value={dataState}>{children}</AnimeListContext.Provider>
  );
};

export { AnimeListContext, AnimeListContextProvider };