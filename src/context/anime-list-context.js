import React, { useEffect, useCallback } from 'react';
import { createContext, useState } from "react";
import { useLocation } from 'react-router-dom';

import getAnimeAll from '../services/getAnimeAll';
import getAnimeGenres from '../services/getAnimeGenres';

const AnimeListContext = createContext({});

const AnimeListContextProvider = ({ children }) => {
  let location = useLocation();
  const [apiError, setApiError] = useState(false);
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
  const [sfw, setSfw] = useState(false);

  const resetFilters = useCallback(() => {
    if(selectedGenres.length || type || rating || status || startDate || endDate || sfw) {
      setPage(1);
      setSelectedGenres([]);
      setType('');
      setRating('');
      setStatus('');
      setStartDate(null);
      setEndDate(null);
      setSfw(false);
    }
  },[selectedGenres, type, rating, status, startDate, endDate, sfw]);

  useEffect(() => {
    const options = {
      searchQuery,
      page,
      sort,
      genres: selectedGenres,
      type,
      rating,
      status,
      startDate,
      endDate,
      sfw,
      errorHandler: setApiError
    }
    const fetchAnime = async () => {
      try {
        setLoading(true);
        setApiError(false);
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
  },[searchQuery, page, sort, selectedGenres, type, rating, status, startDate, endDate, sfw]);

  useEffect(() => {
    const fetchAnimeGenres = async () => {
      // JIKAN API allows only 3 requests per second. React renders twice in development mode 
      // so it causes API errors
      setTimeout(async () => {
          try {
            const response = await getAnimeGenres();
            setGenres(response?.data?.data);
          } catch(e) {
            console.log(e);
          }
        }, process.env.REACT_APP_API_DELAY)
    }

    if(location.pathname === '/search' && !genres?.length) {
      fetchAnimeGenres();
    }
    
  }, [location, genres]);

  useEffect(() => {
      if(!advancedSearch && (selectedGenres.length || type || rating || status || startDate || endDate || sfw)) {
        resetFilters();
      }
  }, [resetFilters, advancedSearch, selectedGenres, type, rating, status, startDate, endDate, sfw]);

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
    setEndDate,
    sfw,
    setSfw,
    resetFilters,
    apiError,
    setApiError
  };  

  return (
    <AnimeListContext.Provider value={dataState}>{children}</AnimeListContext.Provider>
  );
};

export { AnimeListContext, AnimeListContextProvider };