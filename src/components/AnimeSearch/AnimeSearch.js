import React, { useState } from 'react';
import Search from '../Search/Search';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import styled from '@emotion/styled';

// import { AnimeListContext } from '../../context/anime-list-context';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
  //  border: 
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
    '&.Mui-focusVisible': {
        background: 'transparent',
    },
    '& .Mui-expanded .MuiButton-endIcon': {
      transform: 'translateY(-3px) rotate(90deg)',
    },
  }));

  export default function SearchPage() {
    const [advancedSearch, setAdvancedSearch] = useState(false);

    return (
        <Accordion expanded={advancedSearch === true} >
            <AccordionSummary aria-controls="advanced-search" id="advanced-search">
                <Grid 
                container 
                justifyContent='center' 
                alignItems="center"
                spacing={2}
            >
                <Grid item>
                    <Search />
                </Grid>
                <Grid item>
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
                <Paper sx={{p: '10px 15px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Paper>
            </MuiAccordionDetails>
        </Accordion>
    )
}