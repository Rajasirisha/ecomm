import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';
import TabBarcont from '../components/TabBarcont';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';

const Contacts = () => {
    return (
        <>
             <Navbar />
             <Box height={30} />
             <Box sx={{display: "flex"}}>  
             <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p:4}}>
            <h1>Welcome to Contacts</h1>
            <TabBarcont/>
            {/* <Grid container alignItems="center" justifyContent="flex-end" spacing={1}>
             <Grid item>
                <Search />
              </Grid>
            <Grid item>
             <Button variant="filled" 
             sx={{ backgroundColor: '#173767',
              position: 'relative', 
             color: '#fff',
             height: '30px',
             textTransform: 'none', 
             borderRadius: '20px',
             '&:hover': {
              backgroundColor: '#E2A925',
              color: '#fff',
              }, }}>
                <AddIcon sx={{mr: '2px'}}/>Add Client
              </Button>
              </Grid>
              </Grid> */}
            </Box>
            </Box>
        </> 
    );
};

export default Contacts;