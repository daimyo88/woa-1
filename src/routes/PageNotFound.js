import React from 'react';
import FullscreenContainer from '../components/containers/FullscreenContainer/FullscreenContainer';
import NothingFoundMessage from '../components/messages/NothingFoundMessage/NothingFoundMessage';

export default function NothingFound(){
    return (
        <FullscreenContainer>
            <NothingFoundMessage text="Page not found :(" />
        </FullscreenContainer>
    )
}