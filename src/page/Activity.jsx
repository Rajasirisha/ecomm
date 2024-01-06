import React from 'react';
import Box from '@mui/material/Box';
import Tabdaily from '../components/Tabdaily';
import Dailyactivity from '../components/Dailyactivity';

const Activity = () => {
    return (
        <>
            <Dailyactivity/>
            <Box height={30} />
            <Box sx={{display: "flex"}}>  
            <Box component="main" sx={{ flexGrow: 1, p:4}}>
                <Tabdaily/>
            </Box>
            </Box>
        </> 
    );
};

export default Activity;