import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import { Box } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@mui/material';
import AnimeHoverDescription from '../../dataDisplay/AnimeHoverDescription/AnimeHoverDescription';
import AnimeItemProps from '../../../models/AnimeItem';

const AnimeItem: FC<AnimeItemProps> = ({mal_id, title, images, score, type, synopsis, genres, rating, aired}) => {
    const theme = useTheme();

    let animeTitle = title;

    if (animeTitle.length > 30) {
        animeTitle = animeTitle.substring(0, 30) + '...';
    }
  
    return (
        <Grid 
            item 
            sx={{
                width: '249px',
                p: '0 12px',
                mb: '24px'
            }}>
            <AnimeHoverDescription 
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
            </AnimeHoverDescription>
        </Grid>
    )
}

export default AnimeItem;