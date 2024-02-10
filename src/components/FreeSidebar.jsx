import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease'; 
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import './FreeSidebarmenu.css';
import { useAppStore } from '../appStore';

const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  backgroundColor: '#173767',
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: '#173767',
    Color: '#ffffff',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function FreeSidebar() {
  const theme = useTheme();
  const navigate = useNavigate(); 
  const open = useAppStore((state) => state.dopen);

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#173767', color: '#ffffff' }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton sx={{ color: '#ffffff', '&:hover': {
                    backgroundColor: '#E2A925',
                    borderRadius: '20px 0 0 20px',
                  }, }}>
            {theme.direction === 'rtl' ? <FormatIndentDecreaseIcon /> : <FormatIndentIncreaseIcon />}
          </IconButton>
        </DrawerHeader>
        <List sx={{ backgroundColor: '#173767',color: '#ffffff', height: '100%' }}>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate( "/freelancer")}}>
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: '#E2A925',
                    borderRadius: '20px 0 0 20px',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                   <HomeOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate( "/freelancertask")}}>
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: '#E2A925',
                    borderRadius: '20px 0 0 20px',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <PushPinIcon sx={{transform: 'rotate(45deg)',}}/>
                </ListItemIcon>
                <ListItemText primary="Task" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate( "/freelancercalendar")}}>
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: '#E2A925',
                    borderRadius: '20px 0 0 20px',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                    <CalendarMonthIcon/>
                </ListItemIcon>
                <ListItemText primary="Calendar" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            </List>
           
            <List sx={{ backgroundColor: '#173767',color: '#ffffff' }}> 
            <hr className='text-secondary'/>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate( "/")}}>
              <ListItemButton
                sx={{
                  minHeight: 40,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: '#E2A925',
                    borderRadius: '20px 0 0 20px',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                   < ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}