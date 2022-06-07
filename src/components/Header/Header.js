import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import ThemeModeSwitcher from '../ThemeModeSwitcher/ThemeModeSwitcher';
import Navigation from '../Navigation/Navigation';
import MenuNavigation from '../MenuNavigation/MenuNavigation';

const Header = () => {

    return (
      <AppBar position="static" enableColorOnDark={true} >
        <Container sx={{maxWidth: '1400px'}}>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <MenuNavigation />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Navigation />
            </Box>

            <ThemeModeSwitcher />
  
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  export default Header;