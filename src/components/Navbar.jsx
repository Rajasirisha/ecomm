import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const navItems = [
  { text: 'Find suppliers', path: '/' },
  { text: 'Find service tags', path: '/service-tags' },
];

const serviceTags = [
  { text: 'Service 1', path: '/service1' },
  { text: 'Service 2', path: '/service2' },
];

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleServiceTagMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleServiceTagMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <AppBar component="nav" sx={{ bgcolor: 'white', minHeight: 40 }}>
          <Toolbar>
            <img  
              style={{ width: '150px', height: '60px', marginLeft: '10px' }} 
              src="./images/habotlogo.png" 
              alt="logo" 
            />
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', gap: '20px' }}>
              {navItems.map((item) => (
                item.text === 'Find service tags' ? (
                  <Box key={item.text} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                      aria-controls="service-tags-menu"
                      aria-haspopup="true"
                      onClick={handleServiceTagMenuOpen}
                      sx={{ color: '#6D6E71', textTransform: 'none'}}
                    >
                      {item.text}
                      <ArrowDropDownIcon />
                    </Button>
                  </Box>
                ) : (
                  <Button 
                    key={item.text} 
                    component={Link} 
                    to={item.path} 
                    sx={{ color: '#6D6E71', textTransform: 'none' }}
                  >
                    {item.text}
                  </Button>
                )
              ))}
              <Button 
                variant="outlined" 
                sx={{ 
                  color: '#00732F', 
                  borderColor: '#00732F', 
                  borderRadius: '5px', 
                  textTransform: 'none', 
                  marginRight: '10px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  fontWeight: '700'
                }}
              >
                Login / Signup
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Menu
          id="service-tags-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleServiceTagMenuClose}
          MenuListProps={{
            'aria-labelledby': 'service-tags-button',
          }}
        >
          {serviceTags.map((tag) => (
            <MenuItem key={tag.text} component={Link} to={tag.path} onClick={handleServiceTagMenuClose}>
              {tag.text}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </ThemeProvider>
  );
}

export default NavBar;
