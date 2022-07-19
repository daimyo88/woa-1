import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { actions } from '../../../actions/searchActions';
import { AnimeListContext } from '../../../context/anime-list-context';

const paginationSize = window.innerWidth > 768 ? "large" : "normal";

export default function AnimePagination() {
    const {searchOptions, dispatchSearch, pages} = useContext(AnimeListContext);

    const handleChange = (event, value) => {
        dispatchSearch({ type: actions.updatePage, val: value });
    };

    const pagination = (pages > 1) ? (
        <Grid container justifyContent="center" sx={{mb: '20px'}}>
            <Grid item>
                <Stack spacing={1}>
                    <Pagination 
                        siblingCount={0}
                        size={paginationSize}
                        color="primary" 
                        count={pages} 
                        page={searchOptions.page} 
                        onChange={handleChange} 
                    />
                </Stack>
            </Grid>
        </Grid>) : null;

    return pagination;

}