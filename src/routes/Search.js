import React, { useContext } from 'react';
import PageTitle from '../components/text/PageTitle/PageTitle';
import AnimeSearch from '../components/ui/AnimeSearch/AnimeSearch';
import AnimeList from '../components/structural/AnimeList/AnimeList';
import AnimePagination from '../components/buttons/AnimePagination/AnimePagination';
import AnimeSort from '../components/ui/AnimeSort/AnimeSort';
import AnimeListLoader from '../components/loaders/AnimeListLoader/AnimeListLoader';
import NothingFoundMessage from '../components/messages/NothingFoundMessage/NothingFoundMessage';
import ErrorMessage from '../components/messages/ErrorMessage/ErrorMessage';

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