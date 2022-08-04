import React, { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import FullscreenContainer from '../../containers/FullscreenContainer/FullscreenContainer';

const PageLoader: FC = () => {
    return (
        <FullscreenContainer>
            <CircularProgress size={60} color="secondary" />
        </FullscreenContainer>
    )
}

export default PageLoader;