import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';

import AnimeGalleryLoader from '../../loaders/AnimeGalleryLoader/AnimeGalleryLoader';
import NothingFoundMessage from '../../messages/NothingFoundMessage/NothingFoundMessage';
import ErrorMessage from '../../messages/ErrorMessage/ErrorMessage';

import { useGetAnimePicturesQuery } from '../../../services/anime';

const cols = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;

export default function AnimeGallery({id}) {

    const { data, isLoading, error } = useGetAnimePicturesQuery(id);
    const pictures = data?.data;

    return (
        <>
            { isLoading && !error && <AnimeGalleryLoader />}
            { !isLoading && !error && !pictures.length && <NothingFoundMessage />}
            { !isLoading && error && <ErrorMessage text="API error :(" />}
            { !isLoading && !error &&  !!pictures.length && <ImageList variant="woven" cols={cols} gap={8}>
                    { pictures?.map((picture, i) => (
                        <ImageListItem key={i}>
                            <img src={ picture?.jpg?.large_image_url } alt={`gallery ${i}`} />
                        </ImageListItem>
                    ))}
            </ImageList> }
        </>
    )
}

AnimeGallery.propTypes = {
    id: PropTypes.number.isRequired,
}