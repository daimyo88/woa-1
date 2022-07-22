import React, { useEffect, useReducer } from "react";
import { createContext, useState } from "react";

import getAnimeAll from "../services/getAnimeAll";

import { initialSearchState, searchReducer } from "../reducers/searchReducer";
import { actions } from "../actions/searchActions";

const AnimeListContext = createContext({});

const AnimeListContextProvider = ({ children }) => {
    const [apiError, setApiError] = useState(false);
    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState(0);
    const [animeList, setAnimeList] = useState([]);
    const [count, setCount] = useState(null);

    const [searchOptions, dispatchSearch] = useReducer(
        searchReducer,
        initialSearchState
    );

    useEffect(() => {
        const options = {
            ...searchOptions,
            genres: searchOptions.selectedGenres,
            errorHandler: setApiError,
        };

        const fetchAnime = async () => {
            try {
                setLoading(true);
                setApiError(false);
                const anime = await getAnimeAll(options);
                setAnimeList(anime?.data?.data);
                setCount(anime?.data?.pagination?.items?.total);
                setPages(anime?.data?.pagination?.last_visible_page || 0);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        fetchAnime(options);
    }, [searchOptions]);

    useEffect(() => {
        const {
            selectedGenres,
            type,
            rating,
            status,
            startDate,
            endDate,
            sfw,
        } = searchOptions;
        if (
            !advancedSearch &&
            (selectedGenres.length ||
                type ||
                rating ||
                status ||
                startDate ||
                endDate ||
                sfw)
        ) {
            dispatchSearch({ type: actions.resetFilters });
        }
    }, [advancedSearch, searchOptions]);

    const dataState = {
        searchOptions,
        dispatchSearch,
        count,
        advancedSearch,
        setAdvancedSearch,
        loading,
        animeList,
        pages,
        apiError,
        setApiError,
    };

    return (
        <AnimeListContext.Provider value={dataState}>
            {children}
        </AnimeListContext.Provider>
    );
};

export { AnimeListContext, AnimeListContextProvider };
