import React, { useState, useEffect, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@mui/material/Paper';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { AnimeListContext } from '../../context/anime-list-context';

const StyledTextField = styled(TextField)(({theme}) => ({
    "& .MuiOutlinedInput-root": {
        color: theme.palette.text.primary,
        height: '42px',
        "& fieldset": {
            transition: '0.3s'
        },
        "&:hover fieldset": {
            borderColor: theme.palette.primary.main,
        },
        "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.main,
            borderWidth: 1
        }
    }
  }));

export default function Search() {
    const { searchQuery, setSearchQuery } = useContext(AnimeListContext);
    const theme = useTheme();
    const [inputValue, setInputValue] = useState('');

    const keyPressHandler = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            setSearchQuery(inputValue);
        }
    } 

    useEffect(() => {
        setInputValue(searchQuery);
    },[searchQuery])

    return (
        <Grid container>
            <Grid item onKeyDown={ keyPressHandler }>
                <Paper>
                    <StyledTextField
                        id="search"
                        fullWidth
                        theme={theme}
                        value={inputValue}
                        onChange={(e)=> {setInputValue(e.target.value)}}
                        type="text"
                        variant="outlined"
                        placeholder="Search..."
                        color="secondary"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <IconButton
                                    edge="start"
                                    onClick={() => {setInputValue(''); setSearchQuery('')}}
                                >
                                    <ClearIcon sx={{color: 'primary.main'}}/>
                                </IconButton>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    onClick={() => setSearchQuery(inputValue)}
                                >
                                    <SearchIcon sx={{color: 'secondary.main'}}/>
                                </IconButton>
                                </InputAdornment>
                            )
                        }}
                    /> 
                </Paper>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    )
}