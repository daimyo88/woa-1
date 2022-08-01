import React, { FC } from 'react';
import FullscreenContainer from '../components/containers/FullscreenContainer/FullscreenContainer';
import NothingFoundMessage from '../components/messages/NothingFoundMessage/NothingFoundMessage';

const NothingFound: FC = () => {
    return (
        <FullscreenContainer>
            <NothingFoundMessage text="Page not found :(" />
        </FullscreenContainer>
    )
}

export default NothingFound;