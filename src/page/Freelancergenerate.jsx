import React, { useState, useEffect, useCallback} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AppBar, TableFooter } from '@mui/material';
import { Stack, Grid, Card, CardContent, DialogActions, Button, Divider} from '@mui/material';
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import SyncIcon from '@mui/icons-material/Sync';
import './Generate.css';
// import { useNavigate } from 'react-router-dom';

export default function Freelancergenerate({ open, onClose, onFreelancerGenerate }) {
  
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

const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Freelancerloyee Payslip Details Submitted: ", freelancerDetails);
        onClose(); 
      };

    const [freelancerDetails, setFreelancerDetails] = useState(initialState.freelancerDetails);

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

  const handleReset = () => {
    setFreelancerDetails(initialState.freelancerDetails);
    setTableData([
      { sno: '', taskCode: '', taskName: '', startDate: '', endDate: '', words: '', ppw: '', price: '' },
      { sno: '', taskCode: '', taskName: '', startDate: '', endDate: '', words: '', ppw: '', price: '' },
      { sno: '', taskCode: '', taskName: '', startDate: '', endDate: '', words: '', ppw: '', price: '' },
      { sno: '', taskCode: '', taskName: '', startDate: '', endDate: '', words: '', ppw: '', price: '' },
      { sno: '', taskCode: '', taskName: '', startDate: '', endDate: '', words: '', ppw: '', price: '' },
    ]);
    setTotalNetPayable(0);
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
            sx={{ display: 'flex', }}
          >
            Generate Freelancer Payslip
          </Typography>
          </Toolbar>
      </AppBar>

      <Box height={70} />
      <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
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

          <div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
            sx={{ display: 'flex', '& span': { color: 'Red' } }}
            >
            Freelancer Pay Summary <span>*</span>
          </Typography>

            <div>
                <Stack spacing={5} direction="row" className="freelancer-info-container">  
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <Box sx={{display: 'flex', alignItems: 'left', maxwidth: '600px', minWidth: '400px', height: '120px', fontSize: '14px' }}
                className="freelancer-info-box">
                <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                <label htmlFor="name">Freelancer Name :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={freelancerDetails.name}
                  onChange={(e) => setFreelancerDetails({ ...freelancerDetails, name: e.target.value })}
                  style={{outline: 'none', width: '150px' , margin: '5px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="id">Freelancer ID :</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={freelancerDetails.id}
                  onChange={(e) => setFreelancerDetails({ ...freelancerDetails, id: e.target.value })}
                  style={{ width: '150px', margin: '5px', marginLeft: '25px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="location">Location :</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={freelancerDetails.location}
                  onChange={(e) => setFreelancerDetails({ ...freelancerDetails, location: e.target.value })}
                  style={{ width: '150px' ,  margin: '5px', marginLeft: '55px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
                </CardContent>
                </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                <Box sx={{display: 'flex', alignItems: 'left', maxwidth: '600px', minWidth: '400px', height: '120px', fontSize: '14px' }}
                className="freelancer-info-box">
                <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                <label htmlFor="account">Bank Account Number :</label>
                <input
                  type="text"
                  id="account"
                  name="account"
                  value={freelancerDetails.account}
                  onChange={(e) => setFreelancerDetails({ ...freelancerDetails, account: e.target.value })}
                  style={{outline: 'none', width: '150px' , margin: '5px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="pan">PAN Number :</label>
                <input
                  type="text"
                  id="pan"
                  name="pan"
                  value={freelancerDetails.pan}
                  onChange={(e) => setFreelancerDetails({ ...freelancerDetails, pan: e.target.value })}
                  style={{ width: '150px' ,  margin: '5px', marginLeft: '60px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="pay">Pay Date :</label>
                <input
                  type="date"
                  id="pay"
                  name="pay"
                  value={freelancerDetails.pay}
                  onChange={(e) => setFreelancerDetails({ ...freelancerDetails, pay: e.target.value })}
                  style={{ margin: '5px', marginLeft: '90px', outline: 'none', height: '25px', border: '1px solid #173767', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                </div>
                </CardContent>
                </Box>
                </Grid>
                </Grid>
                </Stack>
                </div>
                </div>

                <div>
                <Typography
            variant="h6"
            noWrap
            component="div"
            color="#000000"
            sx={{display: 'flex', '& span': { color: 'Red' } }}
            >
            Income Details <span>*</span>
          </Typography>
         
          <div>
          <Box sx={{display: 'flex', alignItems: 'center', width: '100%', height: '100%',
           border: '1px solid #B3B3B3', padding: '10px', borderRadius: '20px', fontSize: '14px' }}>
          <Grid container spacing={2}>
        <Grid item xs={12}>
        <div style={{ overflow: 'auto' }}>           
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
          <TableCell align="center" style={{ padding: '4px' }}>
                      <input
                        type="text"
                        value={rowData.taskCode}
                        onChange={(e) => handleCellChange(e.target.value, rowIndex, 'taskCode')}
                        id={`taskCode_${rowIndex}`}
                        style={{ width: '110px', outline: 'none', textAlign: 'center' }}
                      />
          </TableCell>
          <TableCell align="center" style={{ padding: '4px' }}>
                      <input
                        type="text"
                        value={rowData.taskName}
                        onChange={(e) => handleCellChange(e.target.value, rowIndex, 'taskName')}
                        id={`taskName_${rowIndex}`}
                        style={{ width: '100%', outline: 'none', textAlign: 'center' }}
                      />
          </TableCell>
          <TableCell align="center" style={{ padding: '4px' }}>
                      <input
                        type="date"
                        value={rowData.startDate}
                        onChange={(e) => handleCellChange(e.target.value, rowIndex, 'startDate')}
                        id={`startDate_${rowIndex}`}
                        style={{ width: '100%', outline: 'none', textAlign: 'center', color: '#173767' }}
                      />
          </TableCell>
          <TableCell align="center" style={{ padding: '4px' }}>
                      <input
                        type="date"
                        value={rowData.endDate}
                        onChange={(e) => handleCellChange(e.target.value, rowIndex, 'endDate')}
                        id={`endDate_${rowIndex}`}
                        style={{ width: '100%', outline: 'none',textAlign: 'center', color: '#173767' }}
                      />
          </TableCell>
          <TableCell align="center" style={{ padding: '4px' }}>
                      <input
                        type="number"
                        value={rowData.words}
                        onChange={(e) => handleCellChange(e.target.value, rowIndex, 'words')}
                        id={`words_${rowIndex}`}
                        style={{ width: '100px', outline: 'none', textAlign: 'center'}}
                      />
          </TableCell>
          <TableCell align="center" style={{ padding: '4px' }}>
                      ₹<input
                        type="amount"
                        value={rowData.ppw}
                        onChange={(e) => handleCellChange(e.target.value, rowIndex, 'ppw')}
                        id={`ppw_${rowIndex}`}
                        style={{ width: '80px', outline: 'none', textAlign: 'center' }}
                      />
          </TableCell>
          <TableCell align="center">
            ₹<input
              type="amount"
              value={rowData.price}
              onChange={(e) => handleCellChange(rowIndex, 'price', e)}
              id={`price_${rowIndex}`}
              style={{ outline: 'none', width: '80px', textAlign: 'center' }}
            />
            </TableCell>
            </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
        </Grid>
      </Grid>
      </Box>
      </div>
      </div>

      <Box height={20} />
      <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '80px',
            border: '1px solid #B3B3B3',
            padding: '5px',
            borderRadius: '20px'
          }}>
            <Table>
              <TableFooter>
                <TableRow>
                    <TableCell variant="subtitle1" noWrap component="div" color="#000000" sx={{
                      fontWeight: '600',
                      display: 'flex',
                    }}>
                      Total Net Payable
                    </TableCell>
                  <TableCell align="center" style={{
                    maxWidth: '150px',
                    minWidth: '100px',
                    backgroundColor: '#173767',
                    color: '#FFF',
                    fontSize: '20px',
                    borderRadius: ' 0 20px 20px 0'
                  }}>
                    ₹{totalNetPayable}
                  </TableCell>
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

            <Box height={30} />
            <DialogActions>
          <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#173767',
           color: '#E2A925',
           },'@media (max-width: 600px)': { fontSize: '12px' }, }} 
          //  onClick={handleFreelancerGenerate}
           >
            <Link to="/freelancerpayview">
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
           }, '@media (max-width: 600px)': { fontSize: '12px' }, }} 
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