import React, { FC } from 'react';
import PageTitle from '../components/text/PageTitle/PageTitle';
import AnimeSearch from '../components/ui/AnimeSearch/AnimeSearch';
import AnimeList from '../components/structural/AnimeList/AnimeList';
import AnimePagination from '../components/buttons/AnimePagination/AnimePagination';
import AnimeSort from '../components/ui/AnimeSort/AnimeSort';
import AnimeListLoader from '../components/loaders/AnimeListLoader/AnimeListLoader';
import NothingFoundMessage from '../components/messages/NothingFoundMessage/NothingFoundMessage';
import ErrorMessage from '../components/messages/ErrorMessage/ErrorMessage';

import { useAppSelector } from '../hooks/redux';
import { useGetAnimeListQuery } from '../services/anime';
import { formatStartDate, formatEndDate, formatSfwFilter } from '../utils';

const SearchPage: FC = () => {
    const searchOptions = useAppSelector(state => state.searchOptions);

    const { data, isLoading, error } = useGetAnimeListQuery({
        ...searchOptions,
        startDateFilter: formatStartDate(searchOptions.startDate),
        endDateFilter: formatEndDate(searchOptions.endDate),
        sfwFilter: formatSfwFilter(searchOptions.sfw)
    });

    const animeList = data?.data;

    return (
        <>
            <PageTitle text="Anime search" />
            <AnimeSearch />
            <AnimeSort count = { data?.pagination?.items?.total } />
            { isLoading && <AnimeListLoader/> }
            { !isLoading && !error && !!animeList?.length && <AnimeList animeList = { animeList || [] } /> }
            { !isLoading && !error && !animeList?.length && <NothingFoundMessage />}
            { !isLoading && error && <ErrorMessage text="API error :(" />}
            <AnimePagination pages={ data?.pagination?.last_visible_page || 0 } />
        </>
    )
}

export default SearchPage;