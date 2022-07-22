import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import styled from '@emotion/styled';

import { uiActions } from '../../../store/ui-slice';
import { searchOptionsSliceActions } from '../../../store/search-options-slice';
import SearchInput from '../../inputs/SearchInput/SearchInput';
import AnimeFilters from '../../ui/AnimeFilters/AnimeFilters';

const Accordion = styled((props) => (
    <MuiAccordion 
      disableGutters 
      elevation={0} 
      square 
      {...props} 
    />
    ))(({ theme }) => ({
      '&:before': {
        display: 'none',
      },
    }));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      {...props}
    />
  ))(({ theme }) => ({
    border: 0,
    padding: 0,
    m: 0,
    '&.Mui-focusVisible': {
        background: 'transparent',
    },
    '& .Mui-expanded .MuiButton-endIcon': {
      transform: 'translateY(-3px) rotate(90deg)',
    },
  }));

  export default function AnimeSearch() {
    const ui = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const { advancedSearch } = ui;

    useEffect(() => {
      if(!advancedSearch) {
        dispatch(searchOptionsSliceActions.resetFilters());
      }
    },[dispatch, advancedSearch])

    return (
      <>
        <SearchInput />
        <Accordion expanded={advancedSearch === true} >
            <AccordionSummary aria-controls="advanced-search" id="advanced-search">
                <Grid 
                  container 
                  justifyContent="center" 
                  alignItems="center"
                >
                <Grid item
                  sx={{
                    m: '10px'
                  }}
                >
                    <Button 
                        color="primary"
                        variant="contained"
                        size="large"
                        sx={{pr: '15px'}}
                        endIcon={<ChevronRightIcon sx={{ml:'7px'}}/>}
                        onClick={() => dispatch(uiActions.toggleAdvancedSearch())}
                    >
                        Advanced
                    </Button>
                </Grid>
            </Grid>
            </AccordionSummary>
            <MuiAccordionDetails sx={{p: 0}}>
                <AnimeFilters />
            </MuiAccordionDetails>
        </Accordion>
      </>
    )
}