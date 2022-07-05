import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import Typography from '@mui/material/Typography';
import StyledInternalLink from '../../text/StyledInternalLink/StyledInternalLink';
import StyledExternalLink from '../../text/StyledExternalLink/StyledExternalLink';
import NothingFoundMessage from '../../messages/NothingFoundMessage/NothingFoundMessage';

export default function RelatedInfo({items}) {
    const theme = useTheme();
    return (
        <>
        { !items?.length && <NothingFoundMessage />}
        { items?.map((item, i) => {
            const textColor = i%2 === 0 ? theme.palette.primary.light : theme.palette.secondary.light;
            return (
                <Typography key={i} paragraph sx={{mb:'3px'}} color="text.primary">
                    <span style={{display: 'block', color: textColor }}>{ `${item?.relation}: ` } </span>
                    { item?.entry?.map((entry, _i) => {
                        const url = entry?.type === 'anime' ? `/anime/${entry?.mal_id}` : entry?.url;
                        const type = entry?.type === 'anime' ? '' : ` (${entry?.type})`;
                        const linkText = entry?.name + type;
                        const link = entry?.type === 'anime' ? 
                            <StyledInternalLink url={url} text={linkText} /> : 
                            <StyledExternalLink url={url} text={linkText} />;
                        return (
                            <span style={{display: 'block'}} key={entry?.mal_id}>
                                { link }
                            </span>
                        )
                    })}
                </Typography>
            )
        })}
        </>
    )
}

RelatedInfo.propTypes = {
    items: PropTypes.array,
}