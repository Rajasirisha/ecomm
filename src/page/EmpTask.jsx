import React from 'react';
import EmpNavbar from '../components/EmpNavbar';
import Box from '@mui/material/Box';
import EmpSidebar from '../components/EmpSidebar';
import EmpTasktable from '../table/EmpTasktable';

const Employee = () => {
  return (
    <>
        <EmpNavbar />
        <Box height={40} />
        <Box sx={{display: "flex"}}>  
        <EmpSidebar />
       <Box component="main" sx={{ flexGrow: 1, p:3}}>
       <EmpTasktable />
       </Box>
       </Box>
   </> 
  )
}

export default Employee