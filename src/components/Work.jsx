import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Work = styled(Paper)(({ theme }) => ({
  width: 300,
  height: 200,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Variants() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Stack direction="row">
        <Work variant="elevation" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#E8FBFF', color: '#000000',alignItems: 'center',}}>
        <img 
                  src="./images/add.png" 
                  alt="" 
                  style={{ width: '60px', height: '60px', padding: '20px' }}
                />
            <div style={{color: '#000000',fontSize: '20px', fontWeight: '500', whiteSpace: 'wrap'}}>Select Your Role and Sign Up</div></Work>
            <Work variant="elevation" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#000000',alignItems: 'center',}}>
        <img 
                  src="./images/check.png" 
                  alt="" 
                  style={{ width: '60px', height: '60px', padding: '20px' }}
                />
            <div style={{color: '#000000',fontSize: '20px', fontWeight: '500', whiteSpace: 'wrap'}}>Buyers Post Your Requirements</div></Work>
            <Work variant="elevation" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#E8FBFF', color: '#000000',alignItems: 'center',}}>
        <img 
                  src="./images/search.png" 
                  alt="" 
                  style={{ width: '60px', height: '60px', padding: '20px' }}
                />
            <div style={{color: '#000000',fontSize: '20px', fontWeight: '500', whiteSpace: 'wrap'}}> Review, Select, and Contact the Best Suppliers</div></Work>
      </Stack>
      <Stack direction="row" >
      <Work variant="elevation" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#000000',alignItems: 'center',}}>
        <img 
                  src="./images/edit.png" 
                  alt="" 
                  style={{ width: '60px', height: '60px', padding: '20px' }}
                />
            <div style={{color: '#000000',fontSize: '20px', fontWeight: '500', whiteSpace: 'wrap'}}> Suppliers Complete your profile and get notified for opportunities</div></Work>
            <Work variant="elevation" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#E8FBFF', color: '#000000',alignItems: 'center',}}>
        <img 
                  src="./images/change.png" 
                  alt="" 
                  style={{ width: '60px', height: '60px', padding: '20px' }}
                />
            <div style={{color: '#000000',fontSize: '20px', fontWeight: '500', whiteSpace: 'wrap'}}>Contact to Buyers and Share your Quote for the service</div></Work>
            <Work variant="elevation" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#000000',alignItems: 'center',}}>
        <img 
                  src="./images/thanks.png" 
                  alt="" 
                  style={{ width: '60px', height: '60px', padding: '20px' }}
                />
            <div style={{color: '#000000',fontSize: '20px', fontWeight: '500', whiteSpace: 'wrap'}}>Both the Parties can Connect and Make Business Leave a Feedback</div></Work>
      </Stack>
    </Box>
  );
}
