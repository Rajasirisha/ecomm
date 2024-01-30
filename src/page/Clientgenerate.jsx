import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AppBar, TableFooter } from '@mui/material';
import { Stack, Grid, Card, CardContent, DialogActions, Button, Divider} from '@mui/material';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import SyncIcon from '@mui/icons-material/Sync';
import './Generate.css';

export default function Clientgenerate({ open, onClose, onClientGenerate }) {
  
    const initialState = {
      clientDetails: {
        invoiceNo: "",
        inDate: "",
        receiverName: "",
        receiverCont: "",
        receiverAddress: "",
        receiverCountry: "",
        conName: "",
        conAddress: "",
        conCountry: "",
        bankName: "",
        account: "",
        ifsc: "",
        igst: "",
        beforeTax: "",
        igst: "",
        total: "",
        afterTax: "",
        gst: "",
      },

      receiver: [
        { name: 'Name', data: '' },
        { name: 'Contact Details', data: '' },
        { name: 'Address', data: '' },
        { name: 'Country', data: '' },
      ],
      consignee: [
        { name: 'Name', data: '' },
        { name: 'Address', data: '' },
        { name: 'Country', data: '' },
      ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Client Invoice Details Submitted: ", clientDetails);
    onClose(); 
  };

const [clientDetails, setClientDetails] = useState(initialState.clientDetails);
const [receiver, setReceiver] = useState(initialState.receiver);
const [consignee, setConsignee] = useState(initialState.consignee);

const [tableData, setTableData] = useState([
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },

  ]);

  const handleReset = () => {
    setClientDetails(initialState.clientDetails);
    setReceiver(initialState.receiver);
    setConsignee(initialState.consignee);
    setTableData([
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },
    { sno: '', taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igst:{ rate: '', amount: ''}, total : '' },
      ]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar open={open} position="fixed" sx={{ backgroundColor: '#ffffff', height: '60px' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            EXPORT INVOICE
          </Typography>
          </Toolbar>
      </AppBar>

      <Box height={70} />
      <form onSubmit={handleSubmit}>
      <Stack spacing={2} >
      <Card sx={{display: 'flex', flexDirection: 'column', border: '1px solid #B3B3B3', borderRadius: '20px', fontSize: '14px' }}>
        <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
            className='rounded'
            style={{ maxWidth: '120px', maxHeight: '70px', minWidth: '80px', minHeight: '50px',padding: '5px' }}
            src="menulogo.png"
            alt="logo"
          />
          
          <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #B3B3B3', padding: '5px' }}>
          <div style={{ fontSize: '14px', fontWeight: '600'}}>KRZ TECHNOLOGIES</div>
          <div style={{ fontSize: '10px'}}>TAMILNADU PIN:632009</div>
          <div style={{ fontSize: '10px'}}>Mob: +91 6369820495 </div>
          <div style={{ fontSize: '10px'}}>GSTIN:</div>
          <div style={{ fontSize: '10px'}}>33ACQPZ1939G1Z4</div>
          </div>
          </div>
            
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #B3B3B3', padding: '7px' }}>
                <label htmlFor="name" style={{fontWeight: '600'}}> Invoice No :</label>
                <div>
                <input
                  type="text"
                  style={{outline: 'none', maxWidth: '130px', minWidth: '80px', height: '25px', border: '1px solid #173767', borderRadius: '5px', padding: '2px', fontSize: '12px' }}
                />
                </div>
                </div>
                <div style={{ display: 'flex' , flexDirection: 'column', border: '1px solid #B3B3B3', padding: '5px'}}>
                <div>
                <label htmlFor="name" style={{fontWeight: '600'}}> Invoice Date :</label>
                <input
                  type="date"
                  style={{outline: 'none', maxWidth: '90px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                <div>
                <label htmlFor="name" style={{fontWeight: '600'}}> Supply Date :</label>
                <input
                  type="date"
                  style={{outline: 'none', maxWidth: '90px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                </div>
                </div>
                </div>
          <Divider sx={{ border: '1px solid #B3B3B3' , marginTop: '5px'}}/>

          </CardContent>
            </Card>
            </Stack>

          <Box height={30} />
            <DialogActions>
          <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#173767',
           color: '#E2A925',
           },
           '@media (max-width: 600px)': { fontSize: '12px' }, }} 
          //  onClick={handleClientGenerate}
           >
            <Link to="/clientibview">
              Generate Invoice
              </Link>
           </Button>
           
           <Button variant="outlined" 
        sx={{color: '#173767', borderColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          backgroundColor: '#fff',
          '&:hover': {
           backgroundColor: '#B3B3B3',
           color: '#173767',
           },
           '@media (max-width: 600px)': { fontSize: '12px' }, }}
            onClick={handleReset}> <SyncIcon sx={{color: '#173767'}}/> Reset
           </Button>
        
        <Button 
        component={Link}
        to="/invoicebills" 
        variant='filled' 
        sx={{color: '#fff', backgroundColor: '#E2A925', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#E2A925',
           color: '#000000',
           },'@media (max-width: 600px)': { fontSize: '12px' }, }}
            onClick={onClose}>Back
           </Button>
      </DialogActions>
          </form>
    </Box>
  );
}