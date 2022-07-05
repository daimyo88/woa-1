import React, { useContext } from 'react';

import AnimeListContainer from '../../containers/AnimeListContainer/AnimeListContainer';
import AnimeItem from '../../structural/AnimeItem/AnimeItem';
import { AnimeListContext } from '../../../context/anime-list-context';

export default function AnimeList() {
    const { animeList } = useContext(AnimeListContext);

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