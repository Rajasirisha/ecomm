import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { Link } from 'react-router-dom';
import { AppBar, Button, DialogActions } from '@mui/material';
import Search from '../components/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

function createEmptyRow() {
  return { sno: '', date: '', code: '', taskName: '', dailyActivity: '', wordCount: '', status: '' };
}

const initialRows = Array.from({ length: 20 }, () => createEmptyRow());

export default function Navbar() {
  const [rows, setRows] = useState(initialRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCellChange = (event, key, field) => {
    const updatedRows = [...rows];
    updatedRows[key][field] = event.target.value;
    setRows(updatedRows);
  };

  const handleSave = () => {
    console.log("Daily Activity saved:", rows);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', height: '60px' }}>
          <Toolbar>
            <img
              className='mt-1 mr-5 rounded'
              style={{ width: '90px', height: '40px' }}
              src="menulogo.png"
              alt="logo"
            />

            <Typography
              variant="h6"
              noWrap
              component="div"
              color="#000000"
              sx={{ display: 'flex'}}
            >
              Daily Activity
            </Typography>

            <div style={{ flexGrow: 1 }} />
            <Link to="/employee">
              <CallReceivedIcon sx={{ color: '#173767', cursor: 'pointer' }} />
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Box height={30} />
      <Box sx={{display: "flex"}}>  
        <Box component="main" sx={{ flexGrow: 1, p:4}}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: '600', fontSize: '14px'}}>Employee Name :</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: '600', fontSize: '14px'}}>Employee ID :</Typography>
            </Grid>
            <Grid item xs={4}>
              <Search />
            </Grid>
          </Grid>
          <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '1250px', mb: 1 }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 750, border: '1px solid #B3B3B3', overflowX: 'auto', '& th, & td': {border: '1px solid #B3B3B3',} }} aria-label="enhanced table">
                  <TableHead sx={{ backgroundColor: '#173767',  height: '25px', padding: '2px', 
                    '& .MuiTableCell-root': {padding: '8px',}, }}>
                    <TableRow>
                      <TableCell align="center" sx={{  height: '25px', color: '#fff' }}>S.No</TableCell>
                      <TableCell align="center" sx={{  height: '25px', color: '#fff' }}>Date</TableCell>
                      <TableCell align="center" sx={{  height: '25px', color: '#fff' }}>Task Code</TableCell>
                      <TableCell align="center" sx={{  height: '25px', color: '#fff', width: '200px' }}>Task Name</TableCell>
                      <TableCell align="center" sx={{  height: '25px', color: '#fff', width: '400px' }}>Daily Activities</TableCell>
                      <TableCell align="center" sx={{  height: '25px', color: '#fff' }}>Word Count/Slides</TableCell>
                      <TableCell align="center" sx={{  height: '25px', color: '#fff' }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      : rows
                    ).map((row, index) => (
                      <TableRow key={index} sx={{ height: '20px', '& .MuiTableCell-root': {padding: '3px',},}}>
                        <TableCell align="center" sx={{  height: '20px'}}>{index + 1}</TableCell>
                        <TableCell align="center" sx={{  height: '20px'}}>
                          <input
                            type="date"
                            value={row.date}
                            onChange={(e) => handleCellChange(e, index, 'date')}
                            style={{ outline: 'none', width: '100%',  height: '20px', padding: '1px'}}
                          />
                        </TableCell>
                        <TableCell align="center" sx={{  height: '20px'}}>
                          <input
                            type="text"
                            value={row.code}
                            onChange={(e) => handleCellChange(e, index, 'code')}
                            style={{ outline: 'none', width: '100%',  height: '20px', padding: '1px'}}
                          />
                        </TableCell>
                        <TableCell align="center" sx={{  height: '20px'}}>
                          <input
                            type="text"
                            value={row.taskName}
                            onChange={(e) => handleCellChange(e, index, 'taskName')}
                            style={{ outline: 'none', width: '100%',  height: '20px', padding: '1px'}}
                          />
                        </TableCell>
                        <TableCell align="center" sx={{  height: '20px'}}>
                          <input
                            type="text"
                            value={row.dailyActivity}
                            onChange={(e) => handleCellChange(e, index, 'dailyActivity')}
                            style={{ outline: 'none', width: '100%',  height: '20px', padding: '1px'}}
                          />
                        </TableCell>
                        <TableCell align="center" sx={{  height: '20px'}}>
                          <input
                            type="count"
                            value={row.wordCount}
                            onChange={(e) => handleCellChange(e, index, 'wordCount')}
                            style={{ outline: 'none', width: '100%',  height: '20px', padding: '1px'}}
                          />
                        </TableCell>
                        <TableCell align="center" sx={{  height: '20px'}}>
                          <input
                            type="text"
                            value={row.status}
                            onChange={(e) => handleCellChange(e, index, 'status')}
                            style={{ outline: 'none', width: '100%',  height: '20px', padding: '1px'}}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>
            </Paper>
          </Box>
        </Box>
        </Box>
        <DialogActions>
          <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#173767',
           color: '#E2A925',
           },
           '@media (max-width: 600px)': { fontSize: '12px' }, }} 
           onClick={handleSave}>
              Save
           </Button>
          
        <Button 
        component={Link}
        to="/employee" 
        variant='filled' 
        sx={{color: '#fff', backgroundColor: '#E2A925', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#E2A925',
           color: '#000000',
           },'@media (max-width: 600px)': { fontSize: '12px' }, }}
            >Cancel
           </Button>
                      
      </DialogActions>
    </>
  );
}
