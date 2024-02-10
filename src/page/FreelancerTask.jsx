import React from 'react';
import FreeNavbar from '../components/FreeNavbar';
import Box from '@mui/material/Box';
import FreeSidebar from '../components/FreeSidebar';
import FreeTasktable from '../table/FreeTasktable';

const Freelancer = () => {
  return (
    <>
        <FreeNavbar />
        <Box height={40} />
        <Box sx={{display: "flex"}}>  
        <FreeSidebar />
       <Box component="main" sx={{ flexGrow: 1, p:3}}>
       <FreeTasktable />
       </Box>
       </Box>
   </> 
  )
}

export default Freelancer