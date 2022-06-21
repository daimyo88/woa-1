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
  const [type, setType] = useState('');
  const [rating, setRating] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const options = {
      searchQuery,
      page,
      sort,
      genres: selectedGenres,
      type,
      rating,
      status
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
  },[searchQuery, page, sort, selectedGenres, type, rating, status]);

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
    setSearchQuery,
    page,
    setPage,
    pages,
    sort, 
    setSort,
    genres,
    selectedGenres,
    setSelectedGenres,
    type,
    setType,
    rating,
    setRating,
    status,
    setStatus,
    startDate,
    setStartDate,
    endDate,
    setEndDate
  };  

  return (
    <AnimeListContext.Provider value={dataState}>{children}</AnimeListContext.Provider>
  );
};

export { AnimeListContext, AnimeListContextProvider };