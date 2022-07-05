import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@emotion/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import AnimeListContainer from '../../containers/AnimeListContainer/AnimeListContainer';
import { AnimeListContext } from '../../../context/anime-list-context';
import { SORT_OPTIONS } from '../../../constants/contstants';

export default function AnimeSort() {
    const theme = useTheme();
    const { count, sort, setSort, setPage } = useContext(AnimeListContext);

    const handleChange = (event) => {
        setSort(event.target.value);
        setPage(1);
    };

    return (
        <Box sx={{m: '10px 0 15px'}}>
            { !!count && <AnimeListContainer>
                <Grid 
                    container 
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{p: '0 12px'}}
                >
                    <Grid 
                        item 
                        sx={{
                            '@media(max-width: 546px)': {
                                width: '100%',
                                order: 2,
                                textAlign: 'center'
                            }
                        }}
                    >
                        <Typography variant="h2" color="secondary" sx={{m: 0, fontWeight: '400'}}>
                            {`Search results (${count}):`}
                        </Typography>
                    </Grid>
                    <Grid 
                        item
                        sx={{
                            '@media(max-width: 546px)': {
                                width: '100%',
                                order: 1,
                                mb: '10px'
                            }
                        }}
                    >
                        <FormControl 
                            sx={{ 
                                minWidth: 190,
                                '@media(max-width: 546px)': {
                                    display: 'flex',
                                    justifyContent: 'center'
                                }           
                            }} 
                            size="small"
                        >
                            <InputLabel style={{color: theme.palette.secondary.light }} id="sort">Sort by</InputLabel>
                            <Select
                                id="sort"
                                label="Sort by"
                                value={sort}
                                onChange={handleChange}
                                color="primary"
                                IconComponent={KeyboardArrowDownIcon}
                            > 
                                { SORT_OPTIONS.map(({title, value}) => {
                                    return (
                                        <MenuItem key={value} style={{background: theme.palette.background}} value={value}>{title}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </AnimeListContainer> }
        </Box>
    )
}