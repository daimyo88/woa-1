import React, { useState, useEffect } from 'react';
import getAnimePictures from '../../services/getAnimePictures';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import AnimeGalleryLoader from '../AnimeGalleryLoader/AnimeGalleryLoader';
import NothingFoundMessage from '../NothingFoundMessage/NothingFoundMessage';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const cols = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;

export default function AnimeGallery({id}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        const getPictures = async () => {
            try {
                const response = await getAnimePictures(id, setError);
                setPictures(response?.data?.data);
            } finally {
                setLoading(false);
            }

        }
        getPictures();
    },[id]);

    return (
        <>
            { loading && !error && <AnimeGalleryLoader />}
            { !loading && !error && !pictures.length && <NothingFoundMessage />}
            { !loading && error && <ErrorMessage text="API error :(" />}
            { !loading && !error &&  !!pictures.length && <ImageList variant="woven" cols={cols} gap={8}>
                    { pictures?.map((picture, i) => (
                        <ImageListItem key={i}>
                            <img src={ picture?.jpg?.large_image_url } alt={`gallery ${i}`} />
                        </ImageListItem>
                    ))}
            </ImageList> }
        </>
    )
}