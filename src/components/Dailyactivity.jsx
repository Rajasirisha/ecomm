import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Link } from 'react-router-dom';
import { AppBar } from '@mui/material';

export default function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', height: '60px' }}>
        <Toolbar>
          <img
            className='mt-1 mr-5 rounded'
            style={{ width: '90px', height: '40px' }}
            src="menulogo.png"
            alt="logo"
          />

          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Candidate Daily Activity
          </Typography>

          <div style={{ flexGrow: 1 }} />
          <Link to="/manager">
            <CancelRoundedIcon sx={{ color: '#173767', cursor: 'pointer' }} />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
