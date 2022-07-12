import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ThemeModeSwitcher from '../../buttons/ThemeModeSwitcher/ThemeModeSwitcher';
import Navigation from '../../navigations/Navigation/Navigation';
import MenuNavigation from '../../navigations/MenuNavigation/MenuNavigation';

import Logo from '../../logos/Logo/Logo';

export default function PageHeader() {

    return (
      <AppBar position="static" enableColorOnDark={true} >
        <Container sx={{maxWidth: '1400px'}}>
          <Toolbar disableGutters>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item sx={{minWidth: '85px'}}>
                <Logo />
              </Grid>
              <Grid id="mobile-navigation" item sx={{ display: { xs: 'flex', md: 'none' } }}> 
                  <MenuNavigation />
              </Grid>
              <Grid id="desktop-navigation" item sx={{ display: { xs: 'none', md: 'flex' } }}> 
                  <Navigation />
              </Grid>
              <Grid item id="theme-switcher">
                <ThemeModeSwitcher />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };