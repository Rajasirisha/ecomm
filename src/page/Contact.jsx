import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Box height={40}/>
      <Box component="main" >
      <h1>Contact details</h1>
      </Box>
    </div>
  )
}

export default Contact
