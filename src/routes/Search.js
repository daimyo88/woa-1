import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import AnimeSearch from '../components/AnimeSearch/AnimeSearch';
import AnimeList from '../components/AnimeList/AnimeList';
import AnimePagination from '../components/AnimePagination/AnimePagination';

export default function SearchPage() {

    return (
        <>
            <PageTitle text="Anime search" />
            <AnimeSearch />
            <AnimeList />
            <AnimePagination />
        </>
    )
}