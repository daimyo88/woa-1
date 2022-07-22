import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@mui/material/Paper';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { actions } from '../../../actions/searchActions';
import { AnimeListContext } from '../../../context/anime-list-context';

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

export default function SearchInput() {
    const { searchOptions, dispatchSearch } = useContext(AnimeListContext);
    const search = useSelector(state => state.searchOptions);
    console.log(search.searchQuery);
    const theme = useTheme();
    const [inputValue, setInputValue] = useState('');

    const keyPressHandler = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            dispatchSearch({ type: actions.updateSearchQuery, val: inputValue })
        }
    } 

    useEffect(() => {
        setInputValue(searchOptions.searchQuery);
    },[searchOptions.searchQuery])

    return (
        <Grid container wrap="nowrap" justifyContent="center">
            <Grid item>
                <Paper onKeyDown={ keyPressHandler } >
                    <StyledTextField
                        id="search"
                        fullWidth
                        theme={theme}
                        value={inputValue}
                        onChange={(e)=> {setInputValue(e.target.value);}}
                        type="text"
                        variant="outlined"
                        placeholder="Search..."
                        color="secondary"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton
                                        edge="start"
                                        onClick={() => {setInputValue(''); dispatchSearch({ type: actions.updateSearchQuery, val: ''});}}
                                    >
                                        <ClearIcon sx={{color: 'primary.main'}}/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    /> 
                </Paper>          
            </Grid>
            <Grid item>
                <Button 
                    color="secondary"
                    variant="contained"
                    size="large"
                    sx={{ml: '10px'}}
                    endIcon={<SearchIcon />}
                    onClick={() => { dispatchSearch({ type: actions.updateSearchQuery, val: inputValue}) }}
                >
                    Search
                </Button>     
            </Grid>
        </Grid>
    )
}