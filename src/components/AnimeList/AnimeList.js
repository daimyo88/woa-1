import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function AnimeList() {

    const [animes, setAnimes] = useState(null);
    console.log(animes)
    useEffect(() => {
        const getAnimes = async () => {
            try{
                const anime = await axios.get(process.env.REACT_APP_API_URL + '/anime');
                setAnimes(anime.data.data);
            } catch(e) {
                console.log(e);
            }
        }
        getAnimes();
        
    },[]);

    return (
        <>
            { !animes && <div>Loading</div> }
            { !!animes?.length && animes.map(anime => {
                return (
                    <div key={anime.mal_id}>{ anime.title }</div>
                )
            })}
        </>
    )
}