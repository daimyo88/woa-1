import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import getAnime from '../services/getAnime';

export default function Anime() {
    const [loading, setLoading] = useState(true);
    const [anime, setAnime] = useState(null);
    let params = useParams();

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                // JIKAN API allows only 3 requests per second. React renders twice in development mode 
                // so it causes API errors
                setTimeout(async () => {
                    const animeData = await getAnime(params.id);
                    setAnime(animeData?.data?.data);
                }, 3 * +process.env.REACT_APP_API_DELAY)
            } finally {
                setLoading(false);
            }
        }

        fetchAnime();
    }, [params]);

    console.log(anime);

    return (
        <div>{ params.id }</div>
    )
}