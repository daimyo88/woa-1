import React, { useState, useEffect, FC, KeyboardEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

import { searchOptionsSliceActions } from '../../../store/search-options-slice';

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

const SearchInput: FC = () => {
    const searchOptions = useAppSelector(state => state.searchOptions);
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState('');

    const keyPressHandler = (e: KeyboardEvent) => {
        let key = e.key || e.keyCode;
        if(key === 13 || key === 'Enter') {
            e.preventDefault();
            dispatch(searchOptionsSliceActions.updateSearchQuery(inputValue));
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
                                        onClick={() => {setInputValue(''); dispatch(searchOptionsSliceActions.updateSearchQuery(''));}}
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
                    onClick={() => { dispatch(searchOptionsSliceActions.updateSearchQuery(inputValue)) }}
                >
                    Search
                </Button>     
            </Grid>
        </Grid>
    )
}

export default SearchInput;