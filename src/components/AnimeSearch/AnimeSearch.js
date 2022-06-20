import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import styled from '@emotion/styled';

import { AnimeListContext } from '../../context/anime-list-context';
import SearchInput from '../SearchInput/SearchInput';
import AnimeFilters from '../AnimeFilters/AnimeFilters';

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

  export default function SearchPage() {
    const {advancedSearch, setAdvancedSearch} = useContext(AnimeListContext);

    return (
        <Accordion expanded={advancedSearch === true} >
            <AccordionSummary aria-controls="advanced-search" id="advanced-search">
                <Grid 
                  container 
                  justifyContent="center" 
                  alignItems="center"
                >
                <Grid item>
                    <SearchInput />
                </Grid>
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
                        onClick={() => setAdvancedSearch(!advancedSearch)}
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
    )
}