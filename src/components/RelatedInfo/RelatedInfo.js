import React from 'react';
import { useTheme } from '@emotion/react';
import Typography from '@mui/material/Typography';
import StyledInternalLink from '../StyledInternalLink/StyledInternalLink';
import StyledExternalLink from '../StyledExternalLink/StyledExternalLink';
import NothingFoundMessage from '../NothingFoundMessage/NothingFoundMessage';

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
                        const delimeter = _i < item?.entry?.length - 1 ? ', ' : '';
                        const linkText = entry?.name + type + delimeter;
                        const link = entry?.type === 'anime' ? 
                            <StyledInternalLink url={url} text={linkText} /> : 
                            <StyledExternalLink url={url} text={linkText} />;
                        return (
                            <React.Fragment key={entry?.mal_id}>
                                { link }
                            </React.Fragment>
                        )
                    })}
                </Typography>
            )
        })}
        </>
    )
}