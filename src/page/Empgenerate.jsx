import React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AppBar, TableFooter } from '@mui/material';
import { Stack, Grid, Card, CardContent, DialogActions, Button, Divider} from '@mui/material';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import SyncIcon from '@mui/icons-material/Sync';
// import { useNavigate } from 'react-router-dom';

export default function Empgenerate({ open, onClose, onEmpGenerate }) {
  
  const initialState = {
    empDetails: {
      name: "",
      id: "",
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

    const handleReset = () => {
      setEmpDetails(initialState.empDetails);
      setEarnings(initialState.earnings);
      setDeductions(initialState.deductions);
    };

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
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Generate Employee Payslip
          </Typography>
          </Toolbar>
      </AppBar>

      <Box height={70} />
      <form onSubmit={handleSubmit}>
      <Stack spacing={1} direction="row">
      <Card sx={{display: 'flex', alignItems: 'center', width: '100%', height: '100%', border: '1px solid #B3B3B3', borderRadius: '20px', fontSize: '14px' }}>
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
            sx={{ display: { xs: 'none', sm: 'block' }, '& span': { color: 'Red' } }}
            >
            Employee Pay Summary <span>*</span>
          </Typography>

                <Stack spacing={13} direction="row">  
                <Box sx={{display: 'flex', alignItems: 'center', width: '400px', height: '200px', fontSize: '14px' }}>
                <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                <label htmlFor="name">Employee Name :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={empDetails.name}
                  onChange={(e) => setEmpDetails({ ...empDetails, name: e.target.value })}
                  style={{outline: 'none', width: '150px' , margin: '5px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="id">Employee ID :</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={empDetails.id}
                  onChange={(e) => setEmpDetails({ ...empDetails, id: e.target.value })}
                  style={{ width: '150px', margin: '5px', marginLeft: '25px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="department">Department :</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={empDetails.department}
                  onChange={(e) => setEmpDetails({ ...empDetails, department: e.target.value })}
                  style={{ width: '150px' , margin: '5px', marginLeft: '25px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="designation">Designation :</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={empDetails.designation}
                  onChange={(e) => setEmpDetails({ ...empDetails, designation: e.target.value })}
                  style={{ width: '150px' ,  margin: '5px', marginLeft: '25px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="location">Location :</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={empDetails.location}
                  onChange={(e) => setEmpDetails({ ...empDetails, location: e.target.value })}
                  style={{ width: '150px' ,  margin: '5px', marginLeft: '45px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
                </CardContent>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center',  justifyContent: 'center', width: '400px', height: '200px', fontSize: '14px' }}>
                <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                <label htmlFor="account">Bank Account Number :</label>
                <input
                  type="text"
                  id="account"
                  name="account"
                  value={empDetails.account}
                  onChange={(e) => setEmpDetails({ ...empDetails, account: e.target.value })}
                  style={{outline: 'none', width: '150px' , margin: '5px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="pan">PAN Number :</label>
                <input
                  type="text"
                  id="pan"
                  name="pan"
                  value={empDetails.pan}
                  onChange={(e) => setEmpDetails({ ...empDetails, pan: e.target.value })}
                  style={{ width: '150px' ,  margin: '5px', marginLeft: '60px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="pay">Pay Date :</label>
                <input
                  type="date"
                  id="pay"
                  name="pay"
                  value={empDetails.pay}
                  onChange={(e) => setEmpDetails({ ...empDetails, pay: e.target.value })}
                  style={{ margin: '5px', marginLeft: '90px', outline: 'none', height: '25px', border: '1px solid #173767', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="dimonth">Days in Month :</label>
                <input
                  type="days"
                  id="dimonth"
                  name="dimonth"
                  value={empDetails.dimonth}
                  onChange={(e) => setEmpDetails({ ...empDetails, dimonth: e.target.value })}
                  style={{ width: '80px' ,  margin: '5px', marginLeft: '55px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="working">Working Days :</label>
                <input
                  type="number"
                  id="working"
                  name="working"
                  value={empDetails.working}
                  onChange={(e) => setEmpDetails({ ...empDetails, working: e.target.value })}
                  style={{ width: '80px' ,  margin: '5px', marginLeft: '60px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
                </CardContent>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'right', width: '300px', height: '200px', fontSize: '14px' }}>
                <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div>
                <label htmlFor="paid">Paid Days :</label>
                <input
                  type="number"
                  id="paid"
                  name="paid"
                  value={empDetails.paid}
                  onChange={(e) => setEmpDetails({ ...empDetails, paid: e.target.value })}
                  style={{outline: 'none', width: '80px' , margin: '5px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="lop">LOP Days :</label>
                <input
                  type="number"
                  id="lop"
                  name="lop"
                  value={empDetails.lop}
                  onChange={(e) => setEmpDetails({ ...empDetails, lop: e.target.value })}
                  style={{ width: '80px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
                </CardContent>
                </Box>
                </Stack>

                <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
            sx={{ display: { xs: 'none', sm: 'block' }, '& span': { color: 'Red' } }}
            >
            Income Details <span>*</span>
          </Typography>
         
          <Box sx={{display: 'flex', alignItems: 'center', width: '100%', height: '100%',
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
                <input
                  type="number"
                  value={earning.amount}
                  onChange={(e) => handleAmountChange(index, 'earnings', e)}
                  style={{ outline: 'none', width: '80px', border: '1px solid #B3B3B3', borderRadius: '5px', padding: '2px', textAlign: 'right' }}
                />
                </TableCell>
              </TableRow>
                ))}
            </TableBody>
    
              <TableRow>
                <TableCell style={{fontWeight: '600'}}>Gross Earnings</TableCell>
                <TableCell style={{fontWeight: '600'}} align="right">₹{calculateTotal(earnings)}</TableCell>
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
              <input
                type="number"
                value={deduction.amount}
                onChange={(e) => handleAmountChange(index, 'deductions', e)}
                style={{outline: 'none', width: '80px' ,
                border: '1px solid #B3B3B3', borderRadius: '5px', padding: '2px', textAlign: 'right' }}
              />
              </TableCell>
            </TableRow>
              ))}
            
            <TableRow>
              <TableCell style={{padding: '29px'}}></TableCell>
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
    <TableCell variant="subtitle1" noWrap component="div" color="#000000" sx={{ fontWeight: '600', display: { xs: 'none', sm: 'block' } }}>
    Total Net Payable
  
  <Typography noWrap component="div" color="gray" sx={{ fontSize: '12px', display: { xs: 'none', sm: 'block' }}}>
    Gross Earnings - Total Deductions
  </Typography></TableCell>
  </div>
  <TableCell align="center" style={{width: '180px',backgroundColor: '#173767', color: '#FFF', fontSize: '20px', borderRadius: ' 0 20px 20px 0' }}>
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
            sx={{ display: { xs: 'none', sm: 'block' }, '& span': { color: '#000000' } }}
            >
             Amount in Words :<span>{amountInWords}</span>
          </Typography>


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
           }, }} 
          //  onClick={handleEmpGenerate}
           >
            <Link to="/emppayview">
              Generate Payslip
              </Link>
           </Button>
           
           <Button variant="outlined" 
        sx={{color: '#173767', borderColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          backgroundColor: '#fff',
          '&:hover': {
           backgroundColor: '#B3B3B3',
           color: '#173767',
           }, }} onClick={handleReset}> <SyncIcon sx={{color: '#173767'}}/> Reset
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
           }, }} onClick={onClose}>Back
           </Button>
      </DialogActions>
          </form>
    </Box>
  );
}
