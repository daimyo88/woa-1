import React from 'react';
import AnimeListContainer from '../../containers/AnimeListContainer/AnimeListContainer';
import AnimeItem from '../../structural/AnimeItem/AnimeItem';

export default function AnimeList({animeList}) {

    return (
        <AnimeListContainer>
            { animeList?.map(anime => {
                return (
                    <AnimeItem {...anime} key={anime.mal_id} />
                )
            })}
        </AnimeListContainer>
    )
}