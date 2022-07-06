import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import FullscreenContainer from '../../containers/FullscreenContainer/FullscreenContainer';

export default function PageLoader(){
    return (
        <FullscreenContainer>
            <CircularProgress size={60} color="secondary" />
        </FullscreenContainer>
    )
}