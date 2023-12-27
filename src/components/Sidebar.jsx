// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import './Sidebarmenu.css'
// // import { Button } from 'react-bootstrap';

// function Sidebar () {
//   // const [sidebarOpen, setSidebarOpen] = useState(false);

//   // const toggleSidebar = () => {
//   //   setSidebarOpen(!sidebarOpen);
//   //   };
//   return (
//     <div className='container-fluid' >
//       <div className='row'>
//         <div className='bg-[#173767] col-auto min-vh-100 d-flex justify-content-between flex-column'>
//           <div>
//           {/* <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2'> */}
//             {/* <span className='ms-1 fs-4'src="menulogo.png"></span> */}
//             {/* <img className='ms-4 bg-[#A3A3A3] rounded ' style={{ width: '105px', height: '50px' }} src="menulogo.png" alt=" " />
//             <i class="bi bi-text-indent-right"></i>
//             <span className='ms-3 d-none d-sm-inline'></span>
//           </a> */}
//           <nav className='nav'>
//           <div className="d-flex align-items-center">
//           {/* <img className='ms-9 mt-1 bg-[#A3A3A3] rounded ' style={{ width: '105px', height: '50px' }} src="menulogo.png" alt="logo" /> */}

//         {/* <Button variant="link" class="nav-link text-white fs-5 ms-4 my-1 py-2 py-sm-0">
//         <i className="bi bi-text-indent-right" onClick={e=> setSidebarOpen(!sidebarOpen)}></i>
//         </Button> */}
//          </div>
//          </nav>
//           {/* <hr className='text-secondary'/> */}
//           {/* <div className={'sidemenu-container-fluid ${sidebarMenuOpen ? "SidebarMenu":""}' }> */}
//           <ul class="nav nav-pills flex-column">
//             <li class="nav-item text-white fs-4 mt-0 my-1 py-1">
//               <a href="manager" class="nav-link text-white fs-6" aria-current="page">
//               <i class="bi bi-columns-gap"></i>
//               <span className='ms-3'>Dashboard</span>
//               </a>
//             </li>
//             <li class="nav-item text-white fs-4 my-1 py-1">
//               <a href="task" class="nav-link text-white fs-6" aria-current="page">
//               <i class="bi bi-pin-angle"></i>
//               <span className='ms-3'>Task</span>
//               </a>
//             </li>
//             <li class="nav-item text-white fs-4 my-1 py-1">
//               <a href="calendar" class="nav-link text-white fs-6" aria-current="page">
//               <i class="bi bi-calendar4-week"></i>
//               <span className='ms-3'>Calendar</span>
//               </a>
//             </li>
//             <li class="nav-item text-white fs-4 my-1 py-1">
//               <a href="contacts" class="nav-link text-white fs-6" aria-current="page">
//               <i class="bi bi-person-lines-fill"></i>
//               <span className='ms-3'>Contacts</span>
//               </a>
//             </li>
//             <li class="nav-item text-white fs-4 my-1 py-1">
//               <a href="invoicebills" class="nav-link text-white fs-6" aria-current="page">
//               <i class="bi bi-receipt-cutoff"></i>
//               <span className='ms-3'>Invoice Bills</span>
//               </a>
//             </li>
//           </ul>
//           </div>
//           <ul className="nav nav-pills flex-column mt-auto">
//           <li class="nav-item text-white fs-4 my-1 py-1">
//             <hr className='text-secondary'/>
//               <a href="/" class="nav-link text-white fs-6 align-itemcenter" aria-current="page">
//               <i class="bi bi-box-arrow-right"></i>
//               <span className='ms-3'>Logout</span>
//               </a>
//               </li>
//               </ul>
//               </div>
//         </div>
//       </div>
//     // </div>
//   )
// }

// export default Sidebar;


import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease'; 
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PushPinIcon from '@mui/icons-material/PushPin';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import './Sidebarmenu.css';
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
  // necessary for content to be below app bar
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

export default function Sidebar() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
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
        <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate( "/manager")}}>
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
                   <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate( "/task")}}>
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
                  <PushPinIcon/>
                </ListItemIcon>
                <ListItemText primary="Task" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate( "/calendar")}}>
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
            
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate( "/contacts")}}>
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
                   <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary="Contacts" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate( "/invoicebills")}}>
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
                   <ReceiptLongIcon />
                </ListItemIcon>
                <ListItemText primary="Invoice Bills" sx={{ opacity: open ? 1 : 0 }} />
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