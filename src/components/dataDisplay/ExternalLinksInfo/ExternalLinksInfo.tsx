import React, { FC } from 'react';
import { Box } from '@mui/system';
import StyledExternalLink from '../../text/StyledExternalLink/StyledExternalLink';
import NothingFoundMessage from '../../messages/NothingFoundMessage/NothingFoundMessage';

interface ExternalLinksProps {
    items: Array<{ url: string, name: string }>,
    originalUrl: string
}

const StyledBox: FC = ({children}) => {
    return (
        <Box sx={{mb: '7px', '&:last-child': { mb: 0}}} >
            { children }         
        </Box> 
    )
}

const ExternalLinksInfo: FC<ExternalLinksProps> = ({items, originalUrl}) => {
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

export default ExternalLinksInfo;