import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Tasktable from '../table/Tasktable';

const Task = () => {
    return (
        <>
             <Navbar />
             <Box height={65} />
             <Box sx={{display: "flex"}}>  
             <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, pl:2}}>
            <Tasktable/>
            </Box>
            </Box>
        </>
    );
};

export default Task;