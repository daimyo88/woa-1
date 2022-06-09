import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";
import { useTheme } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import { PAGES } from '../../constants/contstants';

export default function MenuNavigation(props) {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <>
          <IconButton
              size="large"
              aria-label="navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
          </IconButton>
          <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {PAGES.map((page) => (
                      <NavLink
                          key={page.name}
                          to={page.url}
                          style={{ color: 'inherit', textDecoration: 'none' }
                          }
                      >
                      {({ isActive }) => (
                          <MenuItem 
                            onClick={handleCloseNavMenu} 
                            selected={isActive}
                            sx={{
                              display: { background: theme.palette.background },
                            }}
                          >
                            {page.name}
                            { page.name === 'Search' && <SearchIcon sx={{ml: '10px'}}/>}
                          </MenuItem>
                          )}
                      </NavLink>
              ))}
          </Menu>
      </>
  )
}