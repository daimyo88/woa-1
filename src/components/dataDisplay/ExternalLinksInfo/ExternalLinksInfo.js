import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import StyledExternalLink from '../../text/StyledExternalLink/StyledExternalLink';
import NothingFoundMessage from '../../messages/NothingFoundMessage/NothingFoundMessage';

const StyledBox = ({children}) => {
    return (
        <Box sx={{mb: '7px', '&:last-child': { mb: 0}}} >
            { children }         
        </Box> 
    )
}

export default function ExternalLinksInfo({items, originalUrl}) {
    return (
        <>
            { !items?.length && !originalUrl && <NothingFoundMessage />}
            { !!originalUrl && 
                <StyledBox>
                    <StyledExternalLink url={originalUrl} text="MyAnimeList.net" />          
                </StyledBox> 
            } 
            { items?.map((item, i) => {
                return (
                    <StyledBox key={i}>
                        <StyledExternalLink url={item?.url} text={item?.name} />          
                    </StyledBox>
                )
            })}
        </>
    )
}

ExternalLinksInfo.propTypes = {
    items: PropTypes.array,
    originalUrl: PropTypes.string
}