import React, { useState, useEffect, useCallback} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AppBar, TableFooter } from '@mui/material';
import { Stack, Grid, Card, CardContent, DialogActions, Button, Divider} from '@mui/material';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import jsPDF from 'jspdf';
import './Generate.css'

export default function Freelancerpayview({ open, onClose }) {
    const navigate = useNavigate();
  
  const downloadReceipt = () => {
        const pdf = new jsPDF();
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'normal');
    
        // Add receipt content to the PDF
        pdf.text('Freelancer Payslip Receipt', 20, 20);
        pdf.text('--------------------------', 20, 30);
    
        // Add freelancerloyee details
        pdf.text(`Freelancer Name: ${freelancerDetails.name}`, 20, 40);
        pdf.text(`Freelancer ID: ${freelancerDetails.id}`, 20, 50);
        pdf.text(`Location: ${freelancerDetails.location}`, 20, 60);
        // Add more details as needed
    
        // Add earnings details in table format
        pdf.text('Income Details', 20, 80);
        pdf.text('--------------------------', 20, 90);
        generateTable(pdf, tableData);
    
        // Add net payable
        pdf.text(`Net Payable: ₹${totalNetPayable}`, 20, 260);
    
        // Add amount in words
        pdf.text(`Amount in Words: ${amountInWords}`, 20, 280);
    
        // Save the PDF with a specific filename
        pdf.save('freelancer_receipt.pdf');
    
    console.log('Downloading Receipt...');
  };

  const generateTable = (pdf, data) => {
    pdf.autoTable({
      head: [['S.no', 'Task code', 'Task Name', 'Start Date', 'End Date', 'Words', 'PPW', 'Price'],],
      body: data.map(item => [item.sno, item.taskCode, item.taskName,
         item.startDate, item.endDate, item.words, item.ppw, item.price]),
      startY: pdf.autoTable.previous.finalY + 10,
    });
  };

  const printReceipt = () => {
    window.print();
    onClose();
  };

  const goToFreelancerGenerate = () => {
    navigate('/freelancergenerate');
  };
  
  const initialState = {
    freelancerDetails: {
      name: "",
      id: "",
      location: "",
      account: "",
      pan: "",
      date: "",
    },
};
  // const navigate = useNavigate();    
  // const handleFreelancerGenerate = () => {
  //       onFreelancerGenerate(freelancerDetails);
  //       // onClose();
  //       navigate('/freelancerpayview');
  //     };

  const [freelancerDetails, setFreelancerDetails] = useState(initialState.freelancerDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Freelancerloyee Payslip Details Submitted: ", freelancerDetails);
    onClose(); 
  };

  const [tableData, setTableData] = useState([
      { sno: '', taskCode: '', taskName: '', startDate: '', endDate: '', words: '', ppw: '', price: '' },
      { sno: '', taskCode: '', taskName: '', startDate: '', endDate: '', words: '', ppw: '', price: '' },
      { sno: '', taskCode: '', taskName: '', startDate: '', endDate: '', words: '', ppw: '', price: '' },
      { sno: '', taskCode: '', taskName: '', startDate: '', endDate: '', words: '', ppw: '', price: '' },
      { sno: '', taskCode: '', taskName: '', startDate: '', endDate: '', words: '', ppw: '', price: '' },
    ]);
  
  const handleCellChange = (value, rowIndex, columnName, e) => {
      const updatedData = tableData.map((row, index) => {
        if (index === rowIndex) {
          const updatedRow = { ...row, [columnName]: value };
          if (columnName === 'words' || columnName === 'ppw') {
            const words = parseFloat(updatedRow.words) || 0;
            const ppw = parseFloat(updatedRow.ppw) || 0;
            const price = words * ppw;
            updatedRow.price = price;
          }
          return updatedRow;
        }
        return row;
      });
      setTableData(updatedData);
    
      if (e && e.key && (e.key === 'Enter' || e.key === 'Tab')) {
        const nextRowIndex = rowIndex + 1;
        if (nextRowIndex < updatedData.length) {
          const nextInput = document.getElementById(`${columnName}_${nextRowIndex}`);
          if (nextInput) {
            nextInput.focus();
          }
        }
      }
    };      

    const calculateTotalNetPayable = useCallback(() => {
      return tableData.reduce((total, row) => total + (parseFloat(row.price) || 0), 0);
    }, [tableData]);
  
  const [totalNetPayable, setTotalNetPayable] = useState(0);
  
  useEffect(() => {
      const netPayable = calculateTotalNetPayable();
      setTotalNetPayable(netPayable);
  }, [tableData, calculateTotalNetPayable]);

  const numberToWords = (num) => {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const thousands = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
  
    const convertChunk = (chunk) => {
      const chunkArr = Array.from(chunk.toString()).map(Number).reverse();
      const chunkInWords = [];
  
      if (chunkArr.length === 3) {
        chunkInWords.push(units[chunkArr[2]] + ' Hundred');
      }
  
      if (chunkArr[1] === 1) {
        chunkInWords.push(teens[chunkArr[0] - 1]);
      } else {
        chunkInWords.push(tens[chunkArr[1]]);
        chunkInWords.push(units[chunkArr[0]]);
      }
  
      return chunkInWords.filter(Boolean).join(' ');
    };
  
    if (num === 0) {
      return 'Zero Rupees only';
    }
  
    const numArr = Array.from(num.toString()).map(Number).reverse();
    const numInWords = [];
  
    for (let i = 0; i < numArr.length; i += 3) {
      const chunk = parseInt(numArr.slice(i, i + 3).reverse().join(''), 10);
      const chunkInWords = convertChunk(chunk);
  
      if (chunkInWords) {
        numInWords.unshift(chunkInWords + ' ' + thousands[i / 3]);
      }
    }
  
    return numInWords.join(' ').trim() + ' Rupees only';
  };

  const amountInWords = numberToWords(totalNetPayable);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar open={open} position="fixed" sx={{ backgroundColor: '#ffffff', height: '60px' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
            sx={{ display: 'flex', }}
          >
            Freelancer Payslip Details
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
            style={{ width: '120px', height: '70px',padding: '5px' }}
            src="menulogo.png"
            alt="logo"
          />
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '14px', fontWeight: '600'}}>KRZ Technologies</div>
          <div style={{ fontSize: '10px'}}>Head Office: Door No: 1/230/169,</div>
          <div style={{ fontSize: '10px'}}>First Floor, CSS Towers,</div>
          <div style={{ fontSize: '10px'}}>Pillaiyarkuppam, Perumugai,</div>
          <div style={{ fontSize: '10px'}}>Vellore</div>
          </div>
          </div>
            
            <div>
                <label htmlFor="name" style={{fontWeight: '600'}}> Payslip For The Month</label>
                <div>
                <input
                  type="month"
                  style={{outline: 'none', width: '130px' , height: '30px', border: '1px solid #173767', borderRadius: '5px', padding: '2px' }}
                />
                </div>
                </div>
                </div>
          <Divider sx={{ border: '1px solid #B3B3B3'}}/>

          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
            sx={{display: 'flex', }}
            >
            Freelancer Pay Summary 
          </Typography>

                <Stack spacing={5} direction="row" className="freelancer-info-container">  
                <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box sx={{display: 'flex', alignItems: 'left', justifyContent: 'left', maxwidth: '400px', minWidth: '350px', height: '100px' }}
                className="freelancer-info-box">
                <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                <Typography gutterBottom style={{ fontSize: '14px'}}>
                     Freelancer Name : {freelancerDetails.name}
                 </Typography>
                 <Typography style={{ fontSize: '14px'}} gutterBottom>
                     Freelancer ID : {freelancerDetails.id}
                 </Typography>
                 <Typography style={{ fontSize: '14px'}} gutterBottom>
                     Location : {freelancerDetails.location}
                 </Typography>
                </div>
                </div>
                </CardContent>
                </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                <Box sx={{display: 'flex', alignItems: 'left',  justifyContent: 'left', maxwidth: '400px', minwidth: '350px', height: '100px', fontSize: '12px' }}
                className="freelancer-info-box">
                <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                 <Typography style={{ fontSize: '14px'}} gutterBottom>
                 Bank Account Number : {freelancerDetails.account}
                 </Typography>
                 <Typography style={{ fontSize: '14px'}} gutterBottom>
                 PAN Number : {freelancerDetails.pan}
                 </Typography>
                 <Typography style={{ fontSize: '14px'}} gutterBottom>
                 Pay Date : {freelancerDetails.pay}
                 </Typography>
                </div>
                </div>
                </CardContent>
                </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', maxwidth: '300px', minWidth: '250px', height: '100px', }}
                className="freelancer-info-box">
                <CardContent>
                <div style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <div>
                <Box className="freelancerpay">
                  <Box className="netpay">
                <Typography sx={{ fontSize: '20px', color: '#000000'}}>
                ₹{totalNetPayable}</Typography>
                <Typography sx={{ fontSize: '10px', color: '#173767'}}>
                 Freelancer Net Pay
                 </Typography>
                 </Box>
                </Box>
                </div>
                </div>
                </CardContent>
                </Box>
                </Grid>
                </Grid>
                </Stack>

                <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
            sx={{display:'flex' }}
            >
            Income Details
          </Typography>
         
          <Box sx={{display: 'flex', alignItems: 'center', width: '100%', height: '100%',
           border: '1px solid #B3B3B3', padding: '10px', borderRadius: '20px', fontSize: '14px' }}>
          <Grid container spacing={2}>
        <Grid item xs={12}>
                   
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
            <TableRow>
                <TableCell variant="subtitle1" align="center" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>S.No</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>Task Code</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>Task Name</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>Start Date</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>End Date</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>Words</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>PPW</TableCell>
                <TableCell variant="subtitle1" align="center" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>Price</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {tableData.map((rowData, rowIndex) => (
            <TableRow  key={rowIndex}>
                <TableCell align="center" >{rowIndex + 1}</TableCell>
                <TableCell>{rowData.taskCode}</TableCell>
                <TableCell>{rowData.taskName}</TableCell>
                <TableCell>{rowData.startDate}</TableCell>
                <TableCell>{rowData.endDate}</TableCell>
                <TableCell>{rowData.words}</TableCell>
                <TableCell>₹{rowData.ppw}</TableCell>
                <TableCell>₹{rowData.price}</TableCell>
              </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
      </Grid>
      </Box>

      <Box height={20} />
        <Box sx={{ display: 'flex',justifyContent: 'space-between', width: '100%', height: '80px', border: '1px solid #B3B3B3', padding: '5px', borderRadius: '20px'}}>
          <Table>
            <TableFooter>
        <TableRow>
          <div>
    <TableCell variant="subtitle1" noWrap component="div" color="#000000" sx={{ fontWeight: '600',  display:'flex', }}>
    Total Net Payable
    </TableCell>
  </div>
  <TableCell align="center" style={{width: '180px',  minWidth: '100px', backgroundColor: '#173767', color: '#FFF', fontSize: '20px', borderRadius: ' 0 20px 20px 0' }}>
  ₹{totalNetPayable}</TableCell>
  </TableRow>
  </TableFooter>
  </Table>
</Box>
      <Typography
            fontSize={12} 
            align='right'
            noWrap
            component="div"
            color="gray"
            sx={{ display:'flex', '& span': { color: '#000000' } }}
            >
             Amount in Words :<span>{amountInWords}</span>
          </Typography>

            </CardContent>
            </Card>
            </Stack>

            {/* <Divider sx={{ border: '1px solid #B3B3B3'}}/> */}
            <Typography
            fontSize={10}
            noWrap
            component="div"
            color="gray"
            sx={{  display:'flex',  alignItems: 'center', justifyContent: 'center',}}
            >
             --This is a system generated payslip, hence the signature is not required--
          </Typography>

            <Box height={30} />
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
            goToFreelancerGenerate();
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
           },'@media (max-width: 600px)': { fontSize: '12px' },
            }} onClick={onClose}>Back
           </Button>
      </DialogActions>
          </form>
    </Box>
  );
}