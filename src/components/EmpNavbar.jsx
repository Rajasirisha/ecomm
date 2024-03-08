import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import MuiAppBar from '@mui/material/AppBar';
import { useAppStore } from '../appStore';
import EmpProfile from '../Popup/EmpProfile';
import { useNavigate } from 'react-router-dom';

const AppBar = styled(MuiAppBar, {
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}));

export default function EmpNavbar() {
  const [profilePopupOpen, setProfilePopupOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const updateOpen = useAppStore((state) => state.updateOpen);
  const dopen = useAppStore((state) => state.dopen);
  const navigate = useNavigate(); 

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const openProfilePopup = () => {
    setProfilePopupOpen(true);
    handleMenuClose();
    handleMobileMenuClose();
  };

  const closeProfilePopup = () => {
    setProfilePopupOpen(false);
  };

  const handleProfileDetails = (profileDetails) => {
    openProfilePopup(profileDetails);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={openProfilePopup}>Profile</MenuItem>
      <MenuItem onClick={()=>{navigate( "/")}}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 5 new notifications"
          color="#000000"
        >
          <Badge badgeContent={5} color="error">
            <NotificationsIcon sx={{color: '#173767'}}/>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="#000000"
        >
          <AccountCircleIcon sx={{ color: '#173767' }}/>
          <ListItemText primary="Name" sx={{ marginLeft: 1, color: '#173767' }}/>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', height: '60px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#000000"
            aria-label="open drawer"
            sx={{ mr: 1, '&:hover': {
              backgroundColor: '#E2A925',
              borderRadius: '50%',
            },}}
            onClick={()=>updateOpen(!dopen)}
          >
            {dopen ? 
            (<FormatIndentDecreaseIcon sx={{color: '#173767' }}/>) : (<FormatIndentIncreaseIcon sx={{color: '#173767' }}/>)}
          </IconButton>
          <img className='mt-1 mr-5 rounded ' 
          style={{ width: '90px', height: '40px' }} 
          src="menulogo.png" 
          alt="logo" />
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Welcome Name...
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 5 new notifications"
              color="#000000"
            >
              <Badge badgeContent={5} color="error">
                <NotificationsIcon sx={{color: '#173767' }}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#000000"
            >
            <AccountCircleIcon sx={{ color: '#173767' }}/>
            <ListItemText primary="Name" sx={{ marginLeft: 1, color: '#173767' }}/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="#000000"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <EmpProfile isOpen={profilePopupOpen} onClose={closeProfilePopup} onEmpProfilePage={handleProfileDetails}/>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}