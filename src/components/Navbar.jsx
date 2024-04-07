import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Search from '../components/Search';

const drawerWidth = 240;
const navItems = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
  { text: 'Login' },
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'pink' }}>
      <Typography sx={{ my: 2, color: '#8D2F4F', fontWeight: '600', fontStyle: 'italic'  }}>
        <h2>Fashion</h2>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.text}  sx={{ color: '#8D2F4F' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItemButton sx={{ textAlign: 'center' }} onClick={isLoggedIn ? handleLogout : handleLogin}>
        <ListItemText primary={isLoggedIn ? 'Logout' : 'Login'} sx={{ color: '#8D2F4F' }} />
      </ListItemButton>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: 'pink', height: 60}}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: '#8D2F4F' }}/>
          </IconButton>
          <Typography
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, 
            color: '#8D2F4F', bgcolor: 'pink', fontWeight: '600', fontStyle: 'italic',
          '&.MuiTypography-root': { height: 60} }}
          >
           <h2>Fashion</h2> 
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Search />
            <Box sx={{ display: { xs: 'none', sm: 'block' }, bgcolor: 'pink' }}>
              {navItems.map((item) => (
                <Button key={item.text} component={Link} to={item.path} sx={{ color: '#8D2F4F' }}>
                  {item.text}
                </Button>
              ))}
            </Box>
            <IconButton sx={{ color: '#8D2F4F' }}>
              <ShoppingCartIcon />
            </IconButton>
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
      <Box height={40}/>
    </Box>
  );
}

export default NavBar;