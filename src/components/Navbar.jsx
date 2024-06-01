import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
<<<<<<< HEAD
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ClearIcon from '@mui/icons-material/Clear';
import { CartState } from '../context/Context';
import {FormControl, InputBase, Menu, MenuItem } from "@mui/material";
import { useLocation } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Loginpopup from './Loginpopup';
=======
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { createTheme, ThemeProvider } from '@mui/material/styles';
>>>>>>> 87faf5c425f709f94e3dbdd37d89c31cd4cc28d7

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

<<<<<<< HEAD
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.common.white, 0.40),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.60),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#541743',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '200px',
        '&:focus': {
          width: '300px',
        },
      },
    },
  }));

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#eddcd9' }}>
      <Typography 
        variant="h6"
        sx={{ my: 2, color: '#541743', fontWeight: '700', fontStyle: 'italic' }}
      >
        Ecommerce..
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.text}  sx={{ color: '#541743' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItemButton sx={{ textAlign: 'center' }} onClick={isLoggedIn ? handleLogout : handleLogin}>
        <ListItemText primary={isLoggedIn ? 'Logout' : 'Login'} sx={{ color: '#541743' }} />
      </ListItemButton>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" sx={{ bgcolor: '#eddcd9', minHeight: 50}}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: '#541743' }}/>
          </IconButton>
          <img  
              style={{ width: '100px', height: '60px', marginLeft: '10px' }} 
              src="./images/logo.webp" 
              alt="logo" 
            />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, 
            color: '#541743', bgcolor: '#eddcd9', fontWeight: '600', fontStyle: 'italic',
          }}
          >
            Ecommerce..
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <div className="search">
            <Search >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: '#541743'}}/>
            </SearchIconWrapper>
            {useLocation().pathname.split("/")[1] !== "cart" && (
            <FormControl >
              <StyledInputBase
                placeholder="Search a product..."
                className="m-auto"
                aria-label="Search"
                onChange={(e) => {
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
              />
            </FormControl>
          )}
          </ Search>
          </div>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, bgcolor: '#eddcd9' }}>
              {navItems.map((item) => (
                <Button key={item.text} component={Link} to={item.path} sx={{ color: '#541743' }}>
                  {item.text}
                </Button>
              ))}
              {!isLoggedIn && (
            <Button sx={{ color: '#541743' }} onClick={() => setShowLoginpopup(true)}>Login</Button>
          )}
          {isLoggedIn && (
            <Button sx={{ color: '#541743' }} onClick={handleLogout}>Logout</Button>
          )}
            </Box>
            <IconButton  onClick={handleMenuOpen}>
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon sx={{ color: '#541743' }}/>
              </Badge>
            </IconButton>
            <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            getContentAnchorEl={null}
            sx={{ minWidth: 370 }}
          >
            {cart.length > 0 ? (
              <>
                {cart.map((prod) => (
                  <MenuItem >
                  <span className="cartitem" key={prod.id}>
                    <img className="cartItemImg" src={prod.image} alt={prod.name} sx={{ width: 50, height: 50, marginRight: 10 }} />
                    <div className="cartItemDetail">
                      <span>{prod.name}</span>
                      <span>₹ {prod.price.split(".")[0]}</span>
                    </div>
                    <ClearIcon
                      fontSize="20px"
                      color='error'
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    />
                    </span>
                  </MenuItem>
                ))}
                <MenuItem>
                  <Link to="/cart" sx={{ textDecoration: 'none' }}>
                    <Button variant="outlined"
                    sx={{'&.MuiButtonBase-root': {color: '#541743', backgroundColor: '#eddcd9',
                     borderColor: '#541743', width: '95%', margin: '0 10px', textTransform: 'none' }}}
=======
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
>>>>>>> 87faf5c425f709f94e3dbdd37d89c31cd4cc28d7
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
