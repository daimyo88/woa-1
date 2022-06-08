import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ThemeModeSwitcher from '../ThemeModeSwitcher/ThemeModeSwitcher';
import Navigation from '../Navigation/Navigation';
import MenuNavigation from '../MenuNavigation/MenuNavigation';

import Logo from '../Logo/Logo';

const Header = () => {

    return (
      <AppBar position="static" enableColorOnDark={true} >
        <Container sx={{maxWidth: '1400px'}}>
          <Toolbar disableGutters>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item sx={{minWidth: '85px'}}>
                <Logo />
              </Grid>
              <Grid item sx={{ display: { xs: 'flex', md: 'none' } }}> 
                  <MenuNavigation />
              </Grid>
              <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}> 
                  <Navigation />
              </Grid>
              <Grid item>
                <ThemeModeSwitcher />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  export default Header;