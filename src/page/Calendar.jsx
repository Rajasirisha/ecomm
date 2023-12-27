import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
import { Calendar } from "antd";

const Calendarpicker = () => {
    return (
        <>
        <Navbar />
        <Box height={40} />
        <Box sx={{display: "flex"}}>  
        <Sidebar />
       <Box component="main" sx={{ flexGrow: 1, p:3}}>
       <h1 >Calendar - Tasks Deadline</h1>
       <Calendar/>
       </Box>
       </Box>
   </> 
    );
};

export default Calendarpicker;