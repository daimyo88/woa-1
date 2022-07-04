import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import StyledExternalLink from '../StyledExternalLink/StyledExternalLink';
import NothingFoundMessage from '../NothingFoundMessage/NothingFoundMessage';

export default function ExternalLinksInfo({items}) {
    return (
        <>
            { !items?.length && <NothingFoundMessage />}
            { items?.map((item, i) => {
                return (
                    <Box sx={{mb: '7px', '&:last-child': { mb: 0}}} key={i}>
                        <StyledExternalLink url={item?.url} text={item?.name} />          
                    </Box>
                )
            })}
        </>
    )
}

ExternalLinksInfo.propTypes = {
    items: PropTypes.array,
}