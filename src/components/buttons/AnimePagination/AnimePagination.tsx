import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { searchOptionsSliceActions } from '../../../store/search-options-slice';

const paginationSize = window.innerWidth > 768 ? "large" : "medium";

interface PaginationProps {
    pages: number
}

const AnimePagination: FC<PaginationProps> = ({pages}) => {
    const searchOptions = useAppSelector(state => state.searchOptions);
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
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

export default AnimePagination;