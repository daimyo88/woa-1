import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import StyledTooltip from '../StyledTooltip/StyledTooltip';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';

export default function AnimeHoverDescription({ title, synopsis, genres, rating, aired, children }) {
    const synopsisArr = synopsis?.split('.') || [];
    let shortDescpription = '';

    synopsisArr.forEach((sentence, i) => {
        if(i < 2) {
            shortDescpription+= sentence + '.';  
        }
    });

    if(shortDescpription) {
        shortDescpription+= '..';
    }

    const genresArr = genres?.map(genre => genre.name);

    return (
        <StyledTooltip
            enterDelay={300}
            enterNextDelay={300}
            disableTouchListener={true}
            title={
                <div 
                    style={{ maxWidth: '350px', padding: '10px 5px' }}
                >
                    <Typography color="secondary" variant="h3">{ title }</Typography>
                    { shortDescpription && <Typography paragraph color="text.primary">
                        { shortDescpription }
                    </Typography> }
                    { !!genresArr.length && <AdditionalInfo label="Genres: " text={ genresArr.join(', ') } /> }
                    { rating && <AdditionalInfo color="secondary" label="Rating: " text={ rating } /> }
                    { aired && <AdditionalInfo label="Aired: " text={ aired } /> }
                </div>                
            }
            placement="left"
        >
            { children }
        </StyledTooltip>
    )
}

AnimeHoverDescription.propTypes = {
    title: PropTypes.string,
    synopsis: PropTypes.string,
    genres: PropTypes.array,
    rating: PropTypes.string,
    aired: PropTypes.string,
    children: PropTypes.element
}