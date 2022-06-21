import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import { Box } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.tooltipBackground,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.tooltipBackground,
    },
  }));

const AdditionalInfo = ({label, text, color = 'primary'}) => {
    const theme = useTheme();
    const textColor = color === 'primary' ? theme.palette.primary.light : theme.palette.secondary.light;
    return (
        <Typography paragraph sx={{m:0}} color="text.primary">
            <span style={{color: textColor }}>{ label } </span>{ text }
        </Typography>
    )
}

const HoverDescription = ({ title, synopsis, genres, rating, aired, children }) => {
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
            arrow
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

export default function AnimeItem({mal_id, title, images, score, type, synopsis, genres, rating, aired}) {
    const theme = useTheme();

    let animeTitle = title;

    if (animeTitle.length > 36) {
        animeTitle = animeTitle.substring(0, 36) + '...';
    }
  
    return (
        <Grid 
            item 
            sx={{
                width: '249px',
                p: '0 12px',
                mb: '24px'
            }}>
            <HoverDescription 
                title={title}
                synopsis={synopsis} 
                genres={genres}
                aired={aired?.string}
                rating={rating}
            >
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
                        >
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
                        <Grid 
                            container
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                minHeight: '62px',
                                [theme.breakpoints.down('sm')]: {
                                    minHeight: '58px'
                                }
                            }}
                        >
                            <Grid item>
                                <Typography 
                                    sx={{
                                        transition: '0.3s',
                                        p: '10px',
                                        m: 0,
                                        fontWeight: '400',
                                    }} 
                                    variant="h3"
                                    align="center"
                                >
                                    {animeTitle}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Link>
            </HoverDescription>
        </Grid>
    )
}