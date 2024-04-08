// import React from 'react';
// import Navbar from '../components/Navbar';
// import Box from '@mui/material/Box';

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//       <Box height={40}/>
//       <Box component="main" sx={{ pl: 3}}>
//       <h1 style={{color: '#8D2F4F'}}>Contact Details</h1>
//       </Box>
//     </div>
//   )
// }

// export default Contact

import React from "react";
import Navbar from '../components/Navbar';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Contact = () => {
  return (
    <div>
    <Navbar />
    <Box height={40}/>
      <Box component="main" sx={{ pl: 3}}>
        <h1 style={{color: '#8D2F4F'}}>Contact My Store</h1>
        <p>
          Contact Details are provided below...
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 5,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "#8D2F4F", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> abc@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 9999999999
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </div>
  );
};

export default Contact;
