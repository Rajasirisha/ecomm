import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Search from '../components/Search';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';

function createData(sno, date, code, taskName, dailyActivity, wordCount, status, PPW, price) {
  return { sno, date, code, taskName, dailyActivity, wordCount, status, PPW, price };
}

const rows = [
  createData(1, '01-01-2023', 'ABC123', 'Example Task', 'Writing', 800, 'Completed', 1.3, 2000),
  createData(2, '01-01-2023', 'ABC123', 'Example Task', 'Writing', 500, 'Completed', 1.3, 1000),
  createData(3, '01-01-2023', 'ABC123', 'Example Task', 'Writing', 600, 'Completed', 1.3, 1500),
];

export default function EnhancedTable() {
  const [selectedCandidate, setSelectedCandidate] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleCandidateChange = (event) => {
    setSelectedCandidate(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <TextField
            select
            label="Candidate Name"
            value={selectedCandidate}
            onChange={handleCandidateChange}
            sx={{ width: '250px', marginBottom: '10px' }}
          >
            <MenuItem value="">Select Candidate</MenuItem>
            <MenuItem value="Madhu Bala">Madhu Bala</MenuItem>
            <MenuItem value="Rahul">Rahul</MenuItem>
            <MenuItem value="Kayal">Kayal</MenuItem>
            <MenuItem value="Khalique">Khalique</MenuItem>
            <MenuItem value="Mariyam">Mariyam</MenuItem>
            <MenuItem value="Jafreen">Jafreen</MenuItem>
            <MenuItem value="Antara">Antara</MenuItem>

          </TextField>
        </Grid>
        <Grid item xs={6}>
        <Search />
        </Grid>
      </Grid>
      <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '1220px', mb: 1 }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750, border: '1px solid #B3B3B3', '& th, & td': {border: '1px solid #B3B3B3',} }} aria-label="enhanced table">
        <TableHead sx={{ backgroundColor: '#173767' }}>
          <TableRow>
            <TableCell align="center" sx={{ color: '#fff' }}>S.No</TableCell>
            <TableCell align="center" sx={{ color: '#fff' }}>Date</TableCell>
            <TableCell align="center" sx={{ color: '#fff' }}>Task Code</TableCell>
            <TableCell align="center" sx={{ color: '#fff', width: '200px' }}>Task Name</TableCell>
            <TableCell align="center" sx={{ color: '#fff', width: '350px' }}>Daily Activities</TableCell>
            <TableCell align="center" sx={{ color: '#fff' }}>Word Count/Slides</TableCell>
            <TableCell align="center" sx={{ color: '#fff' }}>Status</TableCell>
            <TableCell align="center" sx={{ color: '#fff' }}>PPW</TableCell>
            <TableCell align="center" sx={{ color: '#fff' }}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
                ).map((row) => (
            <TableRow key={row.sno} >
              <TableCell align="center">{row.sno}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.code}</TableCell>
              <TableCell align="center">{row.taskName}</TableCell>
              <TableCell align="center">{row.dailyActivity}</TableCell>
              <TableCell align="center">{row.wordCount}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.PPW}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
              rowsPerPageOptions={[5, 10, 15, 20]}
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
    </div>
  );
}