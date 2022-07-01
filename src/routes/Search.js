import React, { useContext } from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import AnimeSearch from '../components/AnimeSearch/AnimeSearch';
import AnimeList from '../components/AnimeList/AnimeList';
import AnimePagination from '../components/AnimePagination/AnimePagination';
import AnimeSort from '../components/AnimeSort/AnimeSort';
import NothingFoundMessage from '../components/NothingFoundMessage/NothingFoundMessage';
import AnimeListLoader from '../components/AnimeListLoader/AnimeListLoader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

import { AnimeListContext } from '../context/anime-list-context';

export default function SearchPage() {
    const { apiError, loading, animeList } = useContext(AnimeListContext);
    return (
        <>
            <PageTitle text="Anime search" />
            <AnimeSearch />
            <AnimeSort />
            { loading && <AnimeListLoader/> }
            { !loading && !apiError && !!animeList?.length && <AnimeList /> }
            { !loading && !apiError && !animeList?.length && <NothingFoundMessage />}
            { !loading && apiError && <ErrorMessage text="API error :(" />}
            <AnimePagination />
        </>
    )
}