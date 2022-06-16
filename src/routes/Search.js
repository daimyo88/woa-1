import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import AnimeSearch from '../components/AnimeSearch/AnimeSearch';
import AnimeList from '../components/AnimeList/AnimeList';
import AnimePagination from '../components/AnimePagination/AnimePagination';
import AnimeSort from '../components/AnimeSort/AnimeSort';

export default function SearchPage() {

    return (
        <>
            <PageTitle text="Anime search" />
            <AnimeSearch />
            <AnimeSort />
            <AnimeList />
            <AnimePagination />
        </>
    )
}