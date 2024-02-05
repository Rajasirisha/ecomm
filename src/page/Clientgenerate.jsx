import React, { useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { Stack, Grid, Card, CardContent, DialogActions, Button, Divider} from '@mui/material';
import { Dialog, DialogTitle, DialogContent} from '@mui/material';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import SyncIcon from '@mui/icons-material/Sync';
import PrintIcon from '@mui/icons-material/Print';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import jsPDF from 'jspdf';
import './Generate.css';

export default function Clientgenerate({ open, onClose, onClientGenerate }) {
  
    const initialState = {
      clientDetails: {
        invoiceNo: "",
        inDate: "",
        supDate: "",
        name: "",
        bankName: "",
        account: "",
        ifsc: "",
        igst: "",
        beforeTax: "",
        total: "",
        afterTax: "",
        gst: "",
      },

      receiver: [
       {receiverName: "",
        receiverCont: "",
        receiverAddress: "",
        receiverCountry: "", },
      ],
      consignee: [
        {conName: "",
        conAddress: "",
        conCountry: "",},
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
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },

  ]);

  const handleInputChange = (field, value) => {
    setClientDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const [resetOpen, setResetOpen] = useState(false);

  const handleResetOpen = () => {
    setResetOpen(true);
  };

  const handleResetClose = () => {
    setResetOpen(false);
  };

  const handleReset = () => {
    setClientDetails(initialState.clientDetails);
    setReceiver(initialState.receiver);
    setConsignee(initialState.consignee);
    setTableData([
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },
    { taskDescription: '', hsnCode: '', qty: '', rate: '', amount: '', discover: '', taxable : '', igstrate: '', igstamount: '', total : '' },
      ]);
      handleResetClose();
  };

  const downloadReceipt = () => {
    const pdf = new jsPDF();
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');

    pdf.text('Client Invoice Receipt', 20, 20);
    pdf.text('--------------------------', 20, 30);

    pdf.text(`Client Name: ${receiver.receiverName}`, 20, 40);
    pdf.text(`Contact Details: ${receiver.receiverContact}`, 20, 50);
    pdf.text(`Address: ${receiver.receiverAddress}`, 20, 60);
    
    pdf.save('client_receipt.pdf');

console.log('Downloading Receipt...');
};

  const printReceipt = () => {
    window.print();
    onClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar open={open} position="fixed" sx={{ backgroundColor: '#ffffff', height: '60px' }}>
        <Toolbar >
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
          >
            Generate Invoice Bill
          </Typography>
          </Toolbar>
      </AppBar>

      <Box height={70} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
        <div style={{ paddingRight: '10px' }}>
      <Button variant="outlined" 
        sx={{color: '#173767', borderColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          backgroundColor: '#fff',
          '&:hover': {
           backgroundColor: '#B3B3B3',
           color: '#173767',
           }, '@media (max-width: 600px)': { fontSize: '12px' },
           }} onClick={() => {
            downloadReceipt();
            }}> 
            <SaveAltIcon sx={{color: '#173767'}}/> Download Receipt
           </Button>
         </div>
          
         <div style={{ marginRight: '20px' }}>
           <Button variant="outlined" 
        sx={{color: '#173767', borderColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          backgroundColor: '#fff',
          '&:hover': {
           backgroundColor: '#B3B3B3',
           color: '#173767',
           }, '@media (max-width: 600px)': { fontSize: '12px' },
           }} onClick={printReceipt}> <PrintIcon sx={{color: '#173767'}}/> Print Receipt
           </Button>
           </div>
           </div>

           <Box height={10} />
           <Dialog
          open={resetOpen}
          onClose={handleResetClose}
          sx={{ '& .MuiDialog-paper': { width: '400px', borderRadius: '10px' } }}
        >
          <DialogTitle sx={{ textAlign: 'center' }} >Reset Confirmation</DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column' , alignItems: 'center', textAlign: 'center' }}>
          <SyncIcon sx={{color: '#173767', fontSize: '50px'}}/>
              Are you sure you want to reset? This action cannot be undone.
          </DialogContent>
          <DialogActions>
            <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#E2A925', height: '20px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: 'red',
           color: '#fff',
           }, }} onClick={handleResetClose}>Cancel</Button>
            <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#173767', height: '20px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: 'green',
           color: 'fff',
           }, }} onClick={handleReset} autoFocus>
              Yes,Reset
            </Button>
          </DialogActions>
        </Dialog>
      <form onSubmit={handleSubmit} style={{ marginLeft: '20px', marginRight: '20px'}}>
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
          >
            EXPORT INVOICE
          </Typography>
            
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #B3B3B3', padding: '7px' }}>
                <label htmlFor="name" style={{fontWeight: '600'}}> Invoice No :</label>
                <div>
                <input
                  type="text"
                  value={clientDetails.invoiceNo}
                  style={{outline: 'none', maxWidth: '130px', minWidth: '80px', height: '25px', border: '1px solid #173767', borderRadius: '5px', padding: '2px', fontSize: '12px' }}
                />
                </div>
                </div>
                <div style={{ display: 'flex' , flexDirection: 'column', border: '1px solid #B3B3B3', padding: '5px'}}>
                <div>
                <label htmlFor="name" style={{fontWeight: '600'}}> Invoice Date :</label>
                <input
                  type="date"
                  value={clientDetails.inDate}
                  style={{outline: 'none', maxWidth: '90px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                <div>
                <label htmlFor="name" style={{fontWeight: '600'}}> Supply Date :</label>
                <input
                  type="date"
                  value={clientDetails.supDate}
                  style={{outline: 'none', maxWidth: '90px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                </div>
                </div>
                </div>
          <Divider sx={{ border: '1px solid #B3B3B3' , marginTop: '5px', marginBottom: '5px'}}/>
                 
          <div>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',
           border: '1px solid #B3B3B3', fontSize: '14px' }}>
          <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
                   
        <TableContainer component={Paper}>
          <Table sx={{ border: '1px solid #B3B3B3'}}>
            <TableHead >
              <TableRow>
                <TableCell variant="subtitle1" align="center" colSpan={2} sx={{ fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }}>Details of Receiver</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
                <TableRow sx={{ height: '30px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '3px', paddingLeft: '10px'}}>Name :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '3px'}}>
                <input
                  type="text"
                  value={receiver.receiverName}
                  style={{ outline: 'none', width: '100%', height: '30px', padding: '3px'}}
                />
                </TableCell>
              </TableRow>
              <TableRow sx={{ height: '20px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '3px', paddingLeft: '10px'}}>Contact Details :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '3px'}}>
                <input
                  type="text"
                  value={receiver.receiverCont}
                  style={{ outline: 'none', width: '100%', height: '20px', padding: '3px'}}
                />
                </TableCell>
              </TableRow>
              <TableRow sx={{ height: '50px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '4px', paddingLeft: '10px'}}>Address :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '4px'}}>
                <textarea
                  value={receiver.receiverAddress}
                  style={{ outline: 'none', width: '100%', height: '50px', padding: '3px'}}
                 />
                </TableCell>
              </TableRow>
              <TableRow sx={{ height: '20px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '3px', paddingLeft: '10px'}}>Country :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '3px'}}>
                <input
                  type="text"
                  value={receiver.receiverCountry}
                  style={{ outline: 'none', width: '100%', height: '20px', padding: '3px'}}
                />
                </TableCell>
              </TableRow>
            </TableBody>    
          </Table>
        </TableContainer>

        </Grid>

      <Grid item xs={12} sm={6}>
      
      <TableContainer component={Paper}>
        <Table sx={{ border: '1px solid #B3B3B3'}}>
          <TableHead>
          <TableRow sx={{ border: '1px solid #B3B3B3'}}>
              <TableCell variant="subtitle1" align="center" colSpan={2} sx={{ fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767'}}>Details of Consignee (Online delivery mode to)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow sx={{ height: '30px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '3px', paddingLeft: '10px'}}>Name :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '3px'}}>
                <input
                  type="text"
                  value={consignee.conName}
                  style={{ outline: 'none', width: '100%', height: '30px', padding: '3px'}}
                />
                </TableCell>
              </TableRow>
              <TableRow sx={{ height: '80px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '3px', paddingLeft: '10px'}}>Address :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '3px'}}>
                <textarea
                  value={consignee.conAddress}
                  style={{ outline: 'none', width: '100%', height: '80px', padding: '3px'}}
                />
                </TableCell>
              </TableRow>
              <TableRow sx={{ height: '20px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '3px', paddingLeft: '10px'}}>Country :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '3px'}}>
                <input
                  type="text"
                  value={consignee.conCountry}
                  style={{ outline: 'none', width: '100%', height: '20px', padding: '3px'}}
                />
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
      </Grid>
      </Box>
      </div>

      <Box height={20} />
      <div>
          <Box sx={{display: 'flex', alignItems: 'center',
           border: '1px solid #B3B3B3', fontSize: '14px' }}>
          <Grid container spacing={1}>
        <Grid item xs={12}>
        <div style={{ overflow: 'auto' }}>           
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }}> # </TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }}>Task Description</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }}>HSN Code</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }}>Qty</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }}>Rate</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }}>Amount</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }}>Discover</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }}>Taxable Value</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }} colSpan={2}>IGST
                <TableRow>
                <TableCell variant="subtitle1" align="center" sx={{ width:'125px', height: '15px', padding: '2px', fontWeight: '600', color: '#FFF', backgroundColor: '#173767' }}>Rate</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ width:'125px', height: '15px', padding: '2px', fontWeight: '600', color: '#FFF', backgroundColor: '#173767' }}>Amount</TableCell>
                </TableRow></TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }}>Total</TableCell>
            </TableRow>
            </TableHead>
        <TableBody>
        {tableData.map((rowData, rowIndex) => (
        <TableRow  key={rowIndex} sx={{ height: '20px'}}>
          <TableCell align="center" sx={{ width: '50px', height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>{rowIndex + 1}</TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>
                      <input
                        type="text"
                        value={rowData.taskDescription}
                        style={{ width: '100%', height: '20px', outline: 'none', textAlign: 'center', padding: '3px' }}
                      />
          </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>
                      <input
                        type="text"
                        value={rowData.hsnCode}
                        style={{ width: '100%', height: '20px', outline: 'none', textAlign: 'center', padding: '3px' }}
                      />
          </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>
                      <input
                        type="text"
                        value={rowData.qty}
                        style={{ width: '100%', height: '20px', outline: 'none', textAlign: 'center', padding: '3px' }}
                      />
          </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>
                      <input
                        type="text"
                        value={rowData.rate}
                        style={{ width: '100%', height: '20px', outline: 'none',textAlign: 'center', padding: '3px'}}
                      />
          </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>
                      <input
                        type="amount"
                        value={rowData.amount}
                        style={{ width: '100%', height: '20px', outline: 'none', textAlign: 'center', padding: '3px'}}
                      />
          </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>
                      <input
                        type="text"
                        value={rowData.discover}
                        style={{ width: '100%', height: '20px', outline: 'none', textAlign: 'center', padding: '3px' }}
                      />
          </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>
            <input
              type="text"
              value={rowData.taxable}
              style={{ outline: 'none', width: '100%', height: '20px', textAlign: 'center', padding: '3px' }}
            />
            </TableCell>
            <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>
                      <input
                        type="text"
                        value={rowData.igstrate}
                        style={{ width: '100%', height: '20px', outline: 'none', textAlign: 'center', padding: '3px' }}
                      />
          </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>
                      <input
                        type="text"
                        value={rowData.igstamount}
                        style={{ width: '100%', height: '20px', outline: 'none', textAlign: 'center', padding: '3px' }}
                      />
          </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>
            <input
              type="text"
              value={rowData.total}
              style={{ outline: 'none', width: '100%', height: '20px', textAlign: 'center', padding: '3px' }}
            />
            </TableCell>
            </TableRow>
            ))}
            </TableBody>
            <TableRow>
              <TableCell style={{fontWeight: '600', height: '20px', border: '1px solid #B3B3B3', padding: '3px'}} align="center" colSpan={4}>Total</TableCell>
              <TableCell style={{fontWeight: '600', height: '20px', border: '1px solid #B3B3B3', padding: '3px'}} align="center" colSpan={7}>₹</TableCell>
            </TableRow>
        </Table>
        </TableContainer>
        </div>
        </Grid>
      </Grid>
      </Box>
      </div>

      <Box height={10} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex' , flexDirection: 'column', border: '1px solid #B3B3B3', padding: '10px'}}>
            <label htmlFor="name" style={{fontWeight: '700', fontSize: '16px'}}> Bank Details </label>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="name" style={{fontWeight: '600'}}> Name :</label>
                <input
                  type="text"
                  value={clientDetails.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  style={{outline: 'none', maxWidth: '150px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="name" style={{fontWeight: '600'}}>Bank Name :</label>
                <input
                  type="text"
                  value={clientDetails.bankName}
                  onChange={(e) => handleInputChange('bankName', e.target.value)}
                  style={{outline: 'none', maxWidth: '150px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="name" style={{fontWeight: '600'}}> Bank A/C :</label>
                <input
                  type="account"
                  value={clientDetails.account}
                  onChange={(e) => handleInputChange('account', e.target.value)}
                  style={{outline: 'none', maxWidth: '150px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="name" style={{fontWeight: '600'}}> IFSC Code :</label>
                <input
                  type="text"
                  value={clientDetails.ifsc}
                  onChange={(e) => handleInputChange('ifsc', e.target.value)}
                  style={{outline: 'none', maxWidth: '150px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                </div>

                <div style={{ display: 'flex' , flexDirection: 'column', border: '1px solid #B3B3B3', padding: '10px'}}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="name" style={{fontWeight: '600'}}> Total Amount before Tax :</label>
                <input
                  type="amount"
                  value={clientDetails.beforeTax}
                  onChange={(e) => handleInputChange('beforeTax', e.target.value)}
                  style={{outline: 'none', maxWidth: '90px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="name" style={{fontWeight: '600'}}> Add IGST :</label>
                <input
                  type="amount"
                  value={clientDetails.igst}
                  onChange={(e) => handleInputChange('igst', e.target.value)}
                  style={{outline: 'none', maxWidth: '90px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="name" style={{fontWeight: '600'}}> Total Tax Amount :</label>
                <input
                  type="amount"
                  value={clientDetails.total}
                  onChange={(e) => handleInputChange('total', e.target.value)}
                  style={{outline: 'none', maxWidth: '90px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="name" style={{fontWeight: '600'}}> Total Amount after Tax :</label>
                <input
                  type="amount"
                  value={clientDetails.afterTax}
                  onChange={(e) => handleInputChange('afterTax', e.target.value)}
                  style={{outline: 'none', maxWidth: '90px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="name" style={{fontWeight: '600'}}> GST on Reverse Charge :</label>
                <input
                  type="amount"
                  value={clientDetails.gst}
                  onChange={(e) => handleInputChange('gst', e.target.value)}
                  style={{outline: 'none', maxWidth: '90px' , height: '25px', borderBottom: '1px solid #173767', padding: '2px', fontSize: '12px' }}
                />
                </div>
                </div>
                </div>
                
            <Box height={10} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' , flexDirection: 'column', border: '1px solid #B3B3B3', padding: '10px'}}>
            <label htmlFor="name" style={{fontWeight: '700', fontSize: '16px'}}> Terms & Conditions </label>
                <div>
                <label htmlFor="name" style={{fontSize: '10px'}}>
                 1. Reworks are accepted for 1 revision, only if the
                 <div> inputs given are not followed by KRZ Team. </div>
                 </label>
                </div>
                <div>
                <label htmlFor="name" style={{fontSize: '10px'}}>
                2. New input/unprovided input will be charged extra.</label>
                </div>
                </div>

                <div style={{ display: 'flex', padding: '10px'}}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <label htmlFor="name" style={{fontWeight: '700', fontSize: '16px'}}> Authorised Signatory :</label>
                <input
                  type='text'
                  style={{outline: 'none', maxWidth: '150px' , height: '50px', padding: '2px'}}
                />
                </div>
                </div>
                </div>
          </CardContent>
            </Card>
            </Stack>
            <label style={{ fontSize: '10px', marginLeft: '20px'}}>Head Office: Door No: 1/230/169,
            First Floor, CSS Towers, Pillaiyarkuppam, Perumugai, Vellore</label>

            <Box height={10} />
            <DialogActions>
          <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#173767',
           color: '#E2A925',
           },
           '@media (max-width: 600px)': { fontSize: '12px' }, }} 
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
           onClick={handleResetOpen}> <SyncIcon sx={{color: '#173767'}}/> Reset
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