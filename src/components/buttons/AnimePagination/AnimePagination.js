import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { searchOptionsSliceActions } from '../../../store/search-options-slice';

const paginationSize = window.innerWidth > 768 ? "large" : "normal";

export default function AnimePagination({pages}) {
    const searchOptions = useSelector(state => state.searchOptions);
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
        dispatch(searchOptionsSliceActions.updateCurrentPage(value));
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