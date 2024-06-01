import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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

const drawerWidth = 240;
const navItems = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
];

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { state: {cart},dispatch, productDispatch } = CartState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLoginpopup, setShowLoginpopup] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginpopup(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
                    >
                      Go To Cart
                    </Button>
                  </Link>
                </MenuItem>
              </>
            ) : (
              <MenuItem>
                <span sx={{ padding: 5 }}>Cart is Empty!</span>
              </MenuItem>
            )}
          </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav> 
      <Loginpopup open={showLoginpopup} handleClose={() => setShowLoginpopup(false)} handleLogin={handleLogin} />
    </Box>
  );
}

export default NavBar;
