import React, { useContext } from 'react';

import AnimeListContainer from '../AnimeListContainer/AnimeListContainer';
import AnimeListLoader from '../AnimeListLoader/AnimeListLoader';
import AnimeItem from '../AnimeItem/AnimeItem';
import { AnimeListContext } from '../../context/anime-list-context';
import NothingFoundMessage from '../NothingFoundMessage/NothingFoundMessage';

export default function AnimeList() {
    const { loading, animeList } = useContext(AnimeListContext);

    return (
        <>
            { loading && <AnimeListLoader/> }
            { !loading && !!animeList?.length && 
                <AnimeListContainer>
                    { animeList?.map(anime => {
                        return (
                            <AnimeItem {...anime} key={anime.mal_id} />
                        )
                    })}
                </AnimeListContainer>
            }
            {!loading && !animeList?.length && <NothingFoundMessage />}
        </>
    )
}