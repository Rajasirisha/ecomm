import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
// import { Calendar } from "antd";

const Calendar = () => {
    return (
        <>
        <Navbar />
        <Box height={30} />
        <Box sx={{display: "flex"}}>  
        <Sidebar />
       <Box component="main" sx={{ flexGrow: 1, p:4}}>
       <h1>Welcome to Calendar</h1>
       </Box>
       </Box>
   </> 
    );
};

export default Calendar;