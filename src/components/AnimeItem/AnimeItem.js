import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import { Box } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { useTheme } from '@emotion/react';

const AdditionalInfo = ({label, text, color = 'primary'}) => {
    const theme = useTheme();
    const textColor = color === 'primary' ? theme.palette.primary.light : theme.palette.secondary.light;
    return (
        <Typography paragraph sx={{m:0}}>
            <span style={{color: textColor }}>{ label } </span>{ text }
        </Typography>
    )
}

const HoverDescription = ({anchorEl, open, synopsis, genres, rating, aired }) => {
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
        <Popper 
            open={open} 
            anchorEl={anchorEl} 
            transition
            placement="left"
            sx={{ zIndex: 5000}}
        >
            {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
                <Paper 
                    sx={{ maxWidth: '350px', p: '10px 15px', backgroundColor: 'background' }}
                    elevation={5}
                >
                    { shortDescpription && <Typography paragraph>
                        { shortDescpription }
                    </Typography> }
                    { !!genresArr.length && <AdditionalInfo label="Genres: " text={ genresArr.join(', ') } /> }
                    { rating && <AdditionalInfo color="secondary" label="Rating: " text={ rating } /> }
                    { aired && <AdditionalInfo label="Aired: " text={ aired } /> }
                </Paper>
            </Fade>
            )}
        </Popper>
    )
}

export default function AnimeItem({mal_id, title, images, score, type, synopsis, genres, rating, aired}) {

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
      };
    
      const handlePopoverClose = () => {
        setAnchorEl(null);
        setOpen(false);
      };
  
    return (
        <Grid 
            item 
            sx={{
                width: '249px',
                p: '0 12px',
                mb: '24px'
            }}>
            <Link 
                to={`/anime/${mal_id}`}
                style={{
                    textDecoration: 'none'
                }}
            >
                <Paper 
                    sx={{
                        '&:hover h3': {
                            color: 'secondary.main'
                        }
                    }}
                >
                    <Box 
                        style={{position: 'relative'}}
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                    >
                        <HoverDescription 
                            anchorEl={anchorEl} 
                            open={open} 
                            synopsis={synopsis} 
                            genres={genres}
                            aired={aired?.string}
                            rating={rating}
                        />
                        <Chip 
                            color="primary"
                            size="small" 
                            sx={{
                                position: 'absolute',
                                top: '5px',
                                right: '5px'
                            }}
                            icon={<StarIcon style={{color: '#FFDF00'}}/>} 
                            label={score ? score : 'N/A'} 
                        />
                        <Chip 
                            color="secondary"
                            size="small"
                            sx={{
                                position: 'absolute',
                                top: '5px',
                                left: '5px'
                            }}
                            label={type} 
                        />
                        <img 
                            style={{
                                display: 'block', 
                                width: '100%', 
                                height: '300px', 
                                objectFit: 'cover'
                            }} 
                            src={images?.jpg?.large_image_url} 
                            alt={title}
                        />
                    </Box>
                    <Typography 
                        sx={{
                            transition: '0.3s',
                            p: '10px 15px',
                            m: 0,
                            fontWeight: '400',
                        }} 
                        variant="h3"
                        align="center"
                    >
                        {title}
                    </Typography>
                </Paper>
            </Link>
        </Grid>
    )
}