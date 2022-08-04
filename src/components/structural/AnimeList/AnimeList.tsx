import React, { FC } from 'react';
import AnimeListContainer from '../../containers/AnimeListContainer/AnimeListContainer';
import AnimeItem from '../AnimeItem/AnimeItem';
import AnimeProps from '../../../models/AnimeItem';

const AnimeList: FC<{animeList: AnimeProps[]}> = ({animeList}) => {

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

export default AnimeList;