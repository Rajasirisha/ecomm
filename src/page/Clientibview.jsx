import React, { useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { Stack, Grid, Card, CardContent, DialogActions, Button, Divider} from '@mui/material';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
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
            Invoice Bill Details
          </Typography>
          </Toolbar>
      </AppBar>

      <Box height={70} />
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
            Invoice Bill
          </Typography>
            
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #B3B3B3', padding: '5px' }}>
                <Typography style={{fontWeight: '600'}}> Invoice No :
                <div style={{outline: 'none', width: '130px', height: '25px', border: '1px solid #173767', borderRadius: '5px', padding: '2px', fontSize: '12px' }}>
                {clientDetails.invoiceNo}
                  </div>
                  </Typography>
                </div>
                <div style={{ display: 'flex' , flexDirection: 'column', border: '1px solid #B3B3B3', padding: '5px'}}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography style={{fontWeight: '600', fontSize: '14px'}}> 
                Invoice Date : </Typography>
                <Typography style={{
                      outline: 'none',
                      width: '90px',
                      height: '25px',
                      borderBottom: '1px solid #173767',
                      padding: '2px',
                      fontSize: '12px'
                  }}>
                  {clientDetails.inDate}</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography style={{fontWeight: '600', fontSize: '14px'}}> 
                Supply Date : </Typography>
                <Typography style={{
                      outline: 'none',
                      width: '90px',
                      height: '25px',
                      borderBottom: '1px solid #173767',
                      padding: '2px',
                      fontSize: '12px'
                  }}>
                    {clientDetails.supDate}</Typography>
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
                  {receiver.receiverName}
                </TableCell>
              </TableRow>
              <TableRow sx={{ height: '20px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '3px', paddingLeft: '10px'}}>Contact Details :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '3px'}}>
                {receiver.receiverCont}
                </TableCell>
              </TableRow>
              <TableRow sx={{ height: '50px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '4px', paddingLeft: '10px'}}>Address :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '4px'}}>
                {receiver.receiverAddress}
                </TableCell>
              </TableRow>
              <TableRow sx={{ height: '20px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '3px', paddingLeft: '10px'}}>Country :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '3px'}}>
                {receiver.receiverCountry}
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
                {consignee.conName}
                </TableCell>
              </TableRow>
              <TableRow sx={{ height: '75px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '3px', paddingLeft: '10px'}}>Address :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '3px'}}>
                {consignee.conAddress}
                </TableCell>
              </TableRow>
              <TableRow sx={{ height: '20px'}}>
                <TableCell sx={{ width: '200px',minWidth: '150px', border: '1px solid #B3B3B3', padding: '3px', paddingLeft: '10px'}}>Country :</TableCell>
                <TableCell sx={{ maxWidth: '100%',minWidth: '200px', border: '1px solid #B3B3B3', padding: '3px'}}>
                {consignee.conCountry}
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
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }} colSpan={2}>
                IGST
                <TableRow style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #B3B3B3', }}>
                <TableCell variant="subtitle1" align="center" sx={{ height: '15px', fontWeight: '600', color: '#FFF', backgroundColor: '#173767' }}>Rate</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ height: '15px', fontWeight: '600', color: '#FFF', backgroundColor: '#173767' }}>Amount</TableCell>
              </TableRow>
                </TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ height: '30px', padding: '2px', fontWeight: '600', border: '1px solid #B3B3B3', color: '#FFF', backgroundColor: '#173767' }}>Total</TableCell>
            </TableRow>
            </TableHead>
        <TableBody>
        {tableData.map((rowData, rowIndex) => (
        <TableRow  key={rowIndex} sx={{ height: '20px'}}>
          <TableCell align="center" sx={{ width: '50px', height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}>{rowIndex + 1}</TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}> {rowData.taskDescription} </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}> {rowData.hsnCode} </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}> {rowData.qty} </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}> {rowData.rate}  </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}> {rowData.amount}  </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}> {rowData.discover}  </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}> {rowData.taxable}  </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}> {rowData.igstrate}  </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}> {rowData.igstamount}  </TableCell>
          <TableCell align="center" style={{ height: '20px', border: '1px solid #B3B3B3', padding: '3px' }}> {rowData.total}  </TableCell>
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
            <Typography style={{fontWeight: '700', fontSize: '16px'}}> Bank Details </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{fontWeight: '600', fontSize: '12px'}}>
                   Name : </Typography>
                <Typography style={{
                      outline: 'none',
                      width: '150px',
                      height: '25px',
                      borderBottom: '1px solid #173767',
                      padding: '2px',
                      fontSize: '12px'
                  }}>
                  {clientDetails.name} </Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{fontWeight: '600', fontSize: '12px'}}>
                  Bank Name : </Typography>
                <Typography style={{
                      outline: 'none',
                      width: '150px',
                      height: '25px',
                      borderBottom: '1px solid #173767',
                      padding: '2px',
                      fontSize: '12px'
                  }}>
                  {clientDetails.bankName}</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{fontWeight: '600', fontSize: '12px'}}>
                Bank A/C : </Typography>
                <Typography style={{
                      outline: 'none',
                      width: '150px',
                      height: '25px',
                      borderBottom: '1px solid #173767',
                      padding: '2px',
                      fontSize: '12px'
                  }}>
                  {clientDetails.account}</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{fontWeight: '600', fontSize: '12px'}}>
                IFSC Code : </Typography>
                <Typography style={{
                      outline: 'none',
                      width: '150px',
                      height: '25px',
                      borderBottom: '1px solid #173767',
                      padding: '2px',
                      fontSize: '12px'
                  }}>
                  {clientDetails.ifsc}</Typography>
                </div>
                </div>

                <div style={{ display: 'flex' , flexDirection: 'column', border: '1px solid #B3B3B3', padding: '10px'}}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{fontWeight: '600', fontSize: '12px'}}>
                Total Amount before Tax : </Typography>
                <Typography style={{
                      outline: 'none',
                      width: '90px',
                      height: '25px',
                      borderBottom: '1px solid #173767',
                      padding: '2px',
                      fontSize: '12px'
                  }}>
                  {clientDetails.beforeTax}</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{fontWeight: '600', fontSize: '12px'}}> 
                Add IGST : </Typography>
                <Typography style={{
                      outline: 'none',
                      width: '90px',
                      height: '25px',
                      borderBottom: '1px solid #173767',
                      padding: '2px',
                      fontSize: '12px'
                  }}>
                  {clientDetails.igst}</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{fontWeight: '600', fontSize: '12px'}}>
                Total Tax Amount : </Typography>
                <Typography style={{
                      outline: 'none',
                      width: '90px',
                      height: '25px',
                      borderBottom: '1px solid #173767',
                      padding: '2px',
                      fontSize: '12px'
                  }}>
                  {clientDetails.total}</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{fontWeight: '600', fontSize: '12px'}}>
                Total Amount after Tax : </Typography>
                <Typography style={{
                      outline: 'none',
                      width: '90px',
                      height: '25px',
                      borderBottom: '1px solid #173767',
                      padding: '2px',
                      fontSize: '12px'
                  }}>
                  {clientDetails.afterTax}</Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{fontWeight: '600', fontSize: '12px'}}>
                GST on Reverse Charge : </Typography>
                <Typography style={{
                      outline: 'none',
                      width: '90px',
                      height: '25px',
                      borderBottom: '1px solid #173767',
                      padding: '2px',
                      fontSize: '12px'
                  }}>
                  {clientDetails.gst}</Typography>
                </div>
                </div>
                </div>
                
            <Box height={10} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' , flexDirection: 'column', border: '1px solid #B3B3B3', padding: '10px'}}>
            <Typography style={{fontWeight: '700', fontSize: '16px'}}> Terms & Conditions </Typography>
                <div>
                <Typography style={{fontSize: '10px'}}>
                 1. Reworks are accepted for 1 revision, only if the
                 <div> inputs given are not followed by KRZ Team. </div>
                 </Typography>
                </div>
                <div>
                <Typography style={{fontSize: '10px'}}>
                2. New input/unprovided input will be charged extra.</Typography>
                </div>
                </div>

                <div style={{ display: 'flex', padding: '10px'}}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography style={{fontWeight: '700', fontSize: '16px'}}> Authorised Signatory :</Typography>
                </div>
                </div>
                </div>
          </CardContent>
            </Card>
            </Stack>
            <Typography style={{ fontSize: '10px', marginLeft: '20px'}}>Head Office: Door No: 1/230/169,
            First Floor, CSS Towers, Pillaiyarkuppam, Perumugai, Vellore</Typography>

            <Box height={10} />
            <DialogActions>
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