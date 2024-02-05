// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';
// import { TableFooter } from '@mui/material';
// import { Stack, Grid, Card, CardContent, DialogActions, Button, Divider} from '@mui/material';
// import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
// import PrintIcon from '@mui/icons-material/Print';
// import SaveAltIcon from '@mui/icons-material/SaveAlt';
// import jsPDF from 'jspdf';
// import { useNavigate } from 'react-router-dom';

// export default function Emppayview({  onClose, empDetails, earnings, deductions, grossEarnings, totalDeductions, amountInWords }) {

//   const navigate = useNavigate();
  
//   const downloadReceipt = () => {
//         const pdf = new jsPDF();
//         pdf.setFontSize(12);
//         pdf.setFont('helvetica', 'normal');
    
//         // Add receipt content to the PDF
//         pdf.text('Employee Payslip Receipt', 20, 20);
//         pdf.text('--------------------------', 20, 30);
    
//         // Add employee details
//         pdf.text(`Employee Name: ${empDetails.name}`, 20, 40);
//         pdf.text(`Employee ID: ${empDetails.id}`, 20, 50);
//         pdf.text(`Department: ${empDetails.department}`, 20, 60);
//         // Add more details as needed
    
//         // Add earnings details in table format
//         pdf.text('Earnings Details', 20, 80);
//         pdf.text('--------------------------', 20, 90);
//         generateTable(pdf, earnings);
    
//         // Add deductions details in table format
//         pdf.text('Deductions Details', 20, 150);
//         pdf.text('--------------------------', 20, 160);
//         generateTable(pdf, deductions);
    
//         // Add net payable
//         pdf.text(`Gross Earnings: ₹${grossEarnings}`, 20, 240);
//         pdf.text(`Total Deductions: ₹${totalDeductions}`, 20, 250);
//         pdf.text(`Net Payable: ₹${grossEarnings - totalDeductions}`, 20, 260);
    
//         // Add amount in words
//         pdf.text(`Amount in Words: ${amountInWords}`, 20, 280);
    
//         // Save the PDF with a specific filename
//         pdf.save('employee_receipt.pdf');
    
//     console.log('Downloading Receipt...');
//   };

//   const generateTable = (pdf, data) => {
//     pdf.autoTable({
//       head: [['Earnings', 'Amount (₹)'],
//              ['Deductions', 'Amount (₹)']],
//       body: data.map(item => [item.name, item.amount]),
//       startY: pdf.autoTable.previous.finalY + 10,
//     });
//   };

//   const printReceipt = () => {
//     window.print();
//     onClose();
//   };

//   const goToEmpGenerate = () => {
//     navigate('/empgenerate');
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Typography variant="h6" gutterBottom>
//         Employee Payslip Details
//       </Typography>

//       <Box height={70} />
//       <form >
//       <Stack spacing={1} direction="row">
//       <Card sx={{display: 'flex', alignItems: 'center', width: '100%', height: '100%', border: '1px solid #B3B3B3', borderRadius: '20px', fontSize: '14px' }}>
//         <CardContent>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//             <img
//             className='rounded'
//             style={{ width: '120px', height: '70px',padding: '5px' }}
//             src="menulogo.png"
//             alt="logo"
//           />
          
//           <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <div style={{ fontSize: '14px', fontWeight: '600'}}>KRZ Technologies</div>
//           <div style={{ fontSize: '10px'}}>Head Office: Door No: 1/230/169,</div>
//           <div style={{ fontSize: '10px'}}>First Floor, CSS Towers,</div>
//           <div style={{ fontSize: '10px'}}>Pillaiyarkuppam, Perumugai,</div>
//           <div style={{ fontSize: '10px'}}>Vellore</div>
//           </div>
//           </div>
            
//             <div>
//                 <label htmlFor="name" style={{fontWeight: '600'}}> Payslip For The Month</label>
//                 <div>
//                 <input
//                   type="month"
//                   placeholder="Month,2024"
//                   style={{outline: 'none', width: '130px' , height: '30px', border: '1px solid #173767', borderRadius: '5px', padding: '2px' }}
//                 />
//                 </div>
//                 </div>
//                 </div>
//           <Divider sx={{ border: '1px solid #B3B3B3'}}/>

//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             color="#000000"
//             sx={{ display: { xs: 'none', sm: 'block' },}}
//             >
//             Employee Pay Summary
//           </Typography>

//                 <Stack spacing={13} direction="row">  
//                 <Box sx={{display: 'flex', alignItems: 'center', width: '400px', height: '200px', fontSize: '14px' }}>
//                 <CardContent>
//                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                 <div>
//                 <Typography variant="subtitle1" gutterBottom>
//                     Employee Name : {empDetails.name}
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                     Employee ID : {empDetails.id}
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                     Department : {empDetails.department}
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                     Designation : {empDetails.designation}
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                     Location : {empDetails.location}
//                 </Typography>
//                 </div>
//                 </div>
//                 </CardContent>
//                 </Box>

//                 <Box sx={{display: 'flex', alignItems: 'center',  justifyContent: 'center', width: '400px', height: '200px', fontSize: '14px' }}>
//                 <CardContent>
//                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                 <div>
//                 <Typography variant="subtitle1" gutterBottom>
//                 Bank Account Number : {empDetails.account}
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                 PAN Number : {empDetails.pan}
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                 Pay Date : {empDetails.pay}
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                 Days in Month : {empDetails.dimonth}
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                 Working Days : {empDetails.working}
//                 </Typography>
//                 </div>
//                 </div>
//                 </CardContent>
//                 </Box>

//                 <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'right', width: '300px', height: '200px', fontSize: '14px' }}>
//                 <CardContent>
//                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                 <div>
//                 <Typography variant="subtitle1" gutterBottom>
//                 Paid Days : {empDetails.paid}
//                 </Typography>
//                 <Typography variant="subtitle1" gutterBottom>
//                 LOP Days : {empDetails.lop}
//                 </Typography>
//                 </div>
//                 </div>
//                 </CardContent>
//                 </Box>
//                 </Stack>

//                 <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             color="#000000"
//             sx={{ display: { xs: 'none', sm: 'block' }, }}
//             >
//             Income Details
//           </Typography>
         
//           <Box sx={{display: 'flex', alignItems: 'center', width: '100%', height: '100%',
//            border: '1px solid #B3B3B3', padding: '10px', borderRadius: '20px', fontSize: '14px' }}>
//           <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
                   
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell variant="subtitle1" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>EARNINGS</TableCell>
//                 <TableCell variant="subtitle1" align="right" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>AMOUNT(₹)</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//                 {earnings.map((earning, index) => (
//               <TableRow key={index}>
//               <TableCell>{earning.name}</TableCell>
//               <TableCell align="right">₹{earning.amount}</TableCell>
//             </TableRow>
//             ))}
//             <TableRow>
//              <TableCell>Gross Earnings</TableCell>
//              <TableCell align="right">₹{grossEarnings}</TableCell>
//            </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>

//         </Grid>

//       <Grid item xs={12} sm={6}>
      
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell variant="subtitle1" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3'}}>DEDUCTIONS</TableCell>
//               <TableCell variant="subtitle1" align="right" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3'}}>AMOUNT(₹)</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {deductions.map((deduction, index) => (
//              <TableRow key={index}>
//              <TableCell>{deduction.name}</TableCell>
//              <TableCell align="right">₹{deduction.amount}</TableCell>
//            </TableRow>
//               ))}
            
//             <TableRow>
//              <TableCell>Total Deductions</TableCell>
//              <TableCell align="right">₹{totalDeductions}</TableCell>
//            </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//       </Grid>
//       </Grid>
//       </Box>

//       <Box height={20} />
//         <Box sx={{ display: 'flex',justifyContent: 'space-between', width: '100%', height: '80px', border: '1px solid #B3B3B3', padding: '5px', borderRadius: '20px'}}>
//           <Table>
//             <TableFooter>
//             <div>
//             <Typography variant="h6" gutterBottom>
//                 Total Net Payable: {grossEarnings - totalDeductions}
//             </Typography>
//             </div>
//             </TableFooter>
//         </Table>
//         </Box>
//         <Typography
//             fontSize={12}
//             align='right'
//             noWrap
//             component="div"
//             color="gray"
//             sx={{ display: { xs: 'none', sm: 'block' }}}
//             >
//              Amount in Words : {amountInWords}
//           </Typography>
//             </CardContent>
//             </Card>
//             </Stack>
//             <Divider sx={{ border: '1px solid #B3B3B3'}}/>
//             <Typography
//             fontSize={10}
//             align='center'
//             noWrap
//             component="div"
//             color="gray"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//             >
//              --This is a system generated payslip, hence the signature is not required--
//           </Typography>

//             <Box height={30} />
//             <DialogActions>
//             <Button variant="outlined" 
//         sx={{color: '#173767', borderColor: '#173767', height: '30px',
//           textTransform: 'none', borderRadius: '10px',
//           backgroundColor: '#fff',
//           '&:hover': {
//            backgroundColor: '#B3B3B3',
//            color: '#173767',
//            }, }} onClick={() => {
//             downloadReceipt();
//             goToEmpGenerate();
//             }}> 
//             <SaveAltIcon sx={{color: '#173767'}}/> Download Receipt
//            </Button>
           
//            <Button variant="outlined" 
//         sx={{color: '#173767', borderColor: '#173767', height: '30px',
//           textTransform: 'none', borderRadius: '10px',
//           backgroundColor: '#fff',
//           '&:hover': {
//            backgroundColor: '#B3B3B3',
//            color: '#173767',
//            }, }} onClick={printReceipt}> <PrintIcon sx={{color: '#173767'}}/> Print Receipt
//            </Button>
        
//         <Button 
//         component={Link}
//         to="/invoicebills" 
//         variant='filled' 
//         sx={{color: '#fff', backgroundColor: '#E2A925', height: '30px',
//           textTransform: 'none', borderRadius: '10px',
//           '&:hover': {
//            backgroundColor: '#E2A925',
//            color: '#000000',
//            }, }} onClick={onClose}>Back
//            </Button>
//       </DialogActions>
//           </form>
//     </Box>
//   );
// }

import React, { useState, useEffect} from 'react';
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
import './Generate.css';

export default function Emppayview({ open, onClose }) {
    const navigate = useNavigate();
  
  const downloadReceipt = () => {
        const pdf = new jsPDF();
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'normal');
    
        // Add receipt content to the PDF
        pdf.text('Employee Payslip Receipt', 20, 20);
        pdf.text('--------------------------', 20, 30);
    
        // Add employee details
        pdf.text(`Employee Name: ${empDetails.name}`, 20, 40);
        pdf.text(`Employee ID: ${empDetails.id}`, 20, 50);
        pdf.text(`Department: ${empDetails.department}`, 20, 60);
        // Add more details as needed
    
        // Add earnings details in table format
        pdf.text('Earnings Details', 20, 80);
        pdf.text('--------------------------', 20, 90);
        generateTable(pdf, earnings);
    
        // Add deductions details in table format
        pdf.text('Deductions Details', 20, 150);
        pdf.text('--------------------------', 20, 160);
        generateTable(pdf, deductions);
    
        // Add net payable
        pdf.text(`Gross Earnings: ₹${grossEarnings}`, 20, 240);
        pdf.text(`Total Deductions: ₹${totalDeductions}`, 20, 250);
        pdf.text(`Net Payable: ₹${grossEarnings - totalDeductions}`, 20, 260);
    
        // Add amount in words
        pdf.text(`Amount in Words: ${amountInWords}`, 20, 280);
    
        // Save the PDF with a specific filename
        pdf.save('employee_receipt.pdf');
    
    console.log('Downloading Receipt...');
  };

  const generateTable = (pdf, data) => {
    pdf.autoTable({
      head: [['Earnings', 'Amount (₹)'],
             ['Deductions', 'Amount (₹)']],
      body: data.map(item => [item.name, item.amount]),
      startY: pdf.autoTable.previous.finalY + 10,
    });
  };

  const printReceipt = () => {
    window.print();
    onClose();
  };

  const goToEmpGenerate = () => {
    navigate('/empgenerate');
  };
  
  const initialState = {
    empDetails: {
      name: "",
      id: "",
      email: "",
      department: "",
      designation: "",
      location: "",
      account: "",
      pan: "",
      date: "",
      dimonth: "",
      working: "",
      paid: "",
      lop: "",
    },

    earnings: [
      { name: 'Basic', amount: '' },
      { name: 'House Rent Allowance', amount: '' },
      { name: 'Leave Reimbursement', amount: '' },
      { name: 'Variable Pay', amount: '' },
    ],
    deductions: [
      { name: 'Income Tax', amount: '' },
      { name: 'Provident Fund', amount: '' },
      { name: 'Loss of Pay', amount: '' },
    ],
  };

  // const navigate = useNavigate();    
  // const handleEmpGenerate = () => {
  //       onEmpGenerate(empDetails);
  //       // onClose();
  //       navigate('/emppayview');
  //     };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Employee Payslip Details Submitted: ", empDetails);
        onClose(); 
      };

    const [empDetails, setEmpDetails] = useState(initialState.empDetails);
    const [earnings, setEarnings] = useState(initialState.earnings);
    const [deductions, setDeductions] = useState(initialState.deductions);

  const handleAmountChange = (index, type, e) => {
  const updatedItems = type === 'earnings' ? [...earnings] : [...deductions];
  updatedItems[index].amount = e.target.value === '' ? '' : parseFloat(e.target.value);
  
  if (type === 'earnings') {
    setEarnings(updatedItems);
  } else {
    setDeductions(updatedItems);
  }
};

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.amount, 0);
  };

  const [grossEarnings, setGrossEarnings] = useState(0);
  const [totalDeductions, setTotalDeductions] = useState(0);
  const [totalNetPayable, setTotalNetPayable] = useState(0);

  useEffect(() => {
    const totalEarnings = calculateTotal(earnings);
    setGrossEarnings(totalEarnings);

    const totalDeductionsValue = calculateTotal(deductions);
    setTotalDeductions(totalDeductionsValue);

    const netPayable = totalEarnings - totalDeductionsValue;
    setTotalNetPayable(netPayable);
  }, [earnings, deductions, setTotalNetPayable]); 

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
            Employee Payslip Details
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
          >
            Employee Payslip
          </Typography>
            
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
            sx={{ display: 'flex', }}
            >
            Employee Pay Summary 
          </Typography>

                <Stack spacing={5} direction="row" className="employee-info-container">  
                <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box sx={{display: 'flex', alignItems: 'left', justifyContent: 'left', maxWidth: '500px', minWidth: '350px', height: '160px' }}
                className="employee-info-box">
                <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                <Typography style={{ fontSize: '14px' }} gutterBottom>
                     Employee Name : {empDetails.name}
                 </Typography>
                 <Typography style={{ fontSize: '14px' }} gutterBottom>
                     Employee ID : {empDetails.id}
                 </Typography>
                 <Typography style={{ fontSize: '14px' }} gutterBottom>
                     Department : {empDetails.department}
                 </Typography>
                 <Typography style={{ fontSize: '14px' }} gutterBottom>
                     Designation : {empDetails.designation}
                 </Typography>
                 <Typography style={{ fontSize: '14px' }} gutterBottom>
                     Location : {empDetails.location}
                 </Typography>
                </div>
                </div>
                </CardContent>
                </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                <Box sx={{display: 'flex', alignItems: 'left',  justifyContent: 'left', maxWidth: '500px', minWidth: '350px', height: '160px' }}
                className="employee-info-box">
                <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                 <Typography style={{ fontSize: '14px' }} gutterBottom>
                 Bank Account Number : {empDetails.account}
                 </Typography>
                 <Typography style={{ fontSize: '14px' }} gutterBottom>
                 PAN Number : {empDetails.pan}
                 </Typography>
                 <Typography style={{ fontSize: '14px' }} gutterBottom>
                 Pay Date : {empDetails.pay}
                 </Typography>
                 <Typography style={{ fontSize: '14px' }} gutterBottom>
                 Days in Month : {empDetails.dimonth}
                 </Typography>
                 <Typography style={{ fontSize: '14px' }} gutterBottom>
                 Working Days : {empDetails.working}
                 </Typography>
                </div>
                </div>
                </CardContent>
                </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', minWidth: '200px', maxHeight: '150px', minHeight: '100px' }}
                className="employee-info-box">
                <CardContent>
                <div style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <div>
                <Box className="emppay" >
                  <Box className="netpay">
                <Typography sx={{ fontSize: '20px', color: '#000000'}}>
                ₹{grossEarnings - totalDeductions}</Typography>
                <Typography sx={{ fontSize: '10px', color: '#173767'}}>
                 Employee Net Pay
                 </Typography>
                 </Box>
                </Box>
                <Divider sx={{ border: '1px dashed #B3B3B3'}}/>
                <Typography sx={{padding: '5px', marginLeft: '5px',fontSize: '14px'}}>
                 Paid Days : {empDetails.paid}
                 </Typography>
                 <Typography sx={{padding: '5px', marginLeft: '5px',fontSize: '14px'}}>
                 LOP Days : {empDetails.lop}
                 </Typography>
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
            sx={{ display:'flex', }}
            >
            Income Details
          </Typography>
         
          <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column',
           border: '1px solid #B3B3B3', padding: '10px', borderRadius: '20px', fontSize: '14px' }}>
          <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
                   
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell variant="subtitle1" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>EARNINGS</TableCell>
                <TableCell variant="subtitle1" align="right" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3' }}>AMOUNT(₹)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {earnings.map((earning, index) => (
              <TableRow key={index}>
                <TableCell>{earning.name}</TableCell>
                <TableCell align="right">
                ₹{earning.amount}
                </TableCell>
              </TableRow>
                ))}
            </TableBody>
    
              <TableRow>
                <TableCell style={{fontWeight: '600'}}>Gross Earnings</TableCell>
                <TableCell style={{fontWeight: '600'}} align="right">₹{grossEarnings}</TableCell>
              </TableRow>
    
          </Table>
        </TableContainer>

        </Grid>

      <Grid item xs={12} sm={6}>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell variant="subtitle1" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3'}}>DEDUCTIONS</TableCell>
              <TableCell variant="subtitle1" align="right" sx={{ fontWeight: '600', borderBottom: '1px dashed #B3B3B3'}}>AMOUNT(₹)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deductions.map((deduction, index) => (
            <TableRow key={index}>
              <TableCell>{deduction.name}</TableCell>
              <TableCell align="right">
              ₹{deduction.amount}
              </TableCell>
            </TableRow>
              ))}
            
            <TableRow>
              <TableCell style={{padding: '25px'}}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{fontWeight: '600'}}>Total Deductions</TableCell>
              <TableCell style={{fontWeight: '600'}} align="right">₹{calculateTotal(deductions)}</TableCell>
            </TableRow>
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
    <TableCell variant="subtitle1" noWrap component="div" color="#000000" sx={{ fontWeight: '600', display: 'flex', flexDirection: 'column' }}>
    Total Net Payable
  
  <Typography noWrap component="div" color="gray" sx={{ fontSize: '12px', display: 'flex',}}>
    Gross Earnings - Total Deductions
  </Typography></TableCell>
  </div>
  <TableCell align="center" style={{width: '180px', minWidth: '100px', backgroundColor: '#173767', color: '#FFF', fontSize: '20px', borderRadius: ' 0 20px 20px 0' }}>
    ₹{grossEarnings - totalDeductions}</TableCell>
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
            sx={{ display: 'flex-end', '& span': { color: '#000000' } }}
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
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}
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
           },
           '@media (max-width: 600px)': { fontSize: '12px' }, }} onClick={() => {
            downloadReceipt();
            goToEmpGenerate();
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
           }, '@media (max-width: 600px)': { fontSize: '12px' }, }} 
            onClick={onClose}>Back
           </Button>
      </DialogActions>
          </form>
    </Box>
  );
}
