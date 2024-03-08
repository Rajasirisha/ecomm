import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
import TabBarcont from '../components/TabBarcont';

const Contacts = () => {
    return (
        <>
             <Navbar />
             <Box height={30} />
             <Box sx={{display: "flex"}}>  
             <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p:4}}>
            <TabBarcont/>
            </Box>
            </Box>
        </> 
    );
};

export default Contacts;