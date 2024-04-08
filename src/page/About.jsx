import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <div>
        <Navbar />
        <Box height={40}/>
        <Box component="main" >
        <h1>About ecommerce</h1>
        </Box>
        </div>
  )
}

export default About