import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import Grid from '@mui/material/Grid';
import Search from '../components/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Freetaskview from '../Popup/Freetaskview';

function createData(id, code, description, words, date, owner, link, status, marks, result) {
  return {
    id,
    code,
    description,
    words,
    date,
    owner,
    link,
    status,
    marks,
    result,
  };
}

const rows = [
  createData(1, 'KRZ-2023-0814', 'Data science', 1500, '31-Oct-2023', 'Kayal', 'link', '', '', ''),
  createData(2, 'KRZ-2023-0815', 'Manufacturing', 2500, '31-Dec-2023', 'Zubair', 'link', 'Delivered/Done', 80, 'Pass'),
  createData(3, 'KRZ-2023-0816', 'Medicin', 1000, '31-Jan-2023', 'Khalique', 'link', '', '', ''),
  createData(4, 'KRZ-2023-0817', 'Design', 500, '01-Jan-2023', 'Zubair', '', '', '', ''),
  createData(5, 'KRZ-2023-0818', 'PPT', 1600, '01-Feb-2023', 'Kayal', 'link', '', '', ''),
  createData(6, 'KRZ-2023-0819', 'Data science', 900, '11-Jan-2023', 'Khalique', 'link', '', '-', ''),
  createData(7, 'KRZ-2023-0810', 'Data science', 800, '11-Feb-2023', 'Zubair', '', 'Delivered/Done', '33', 'Fail'),
  createData(8, 'KRZ-2023-0811', 'Data science', 1300, '20-Feb-2023', 'Zubair', 'link', '', '', ''),
  createData(9, 'KRZ-2023-0812', 'Data science', 1800, '30-Jan-2023', 'Khalique', 'link', '', '', ''),
  createData(10, 'KRZ-2023-0813', 'Data science', 1500, '10-Jan-2023', 'Kayal', 'link', '', '', ''),

];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  
  {
    id: 'code',
    numeric: true,
    disablePadding: false,
    label: 'Task Code',
  },
  {
    id: 'description',
    numeric: true,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'words',
    numeric: true,
    disablePadding: false,
    label: 'Words',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Deadline',
  },
  {
    id: 'owner',
    numeric: true,
    disablePadding: false,
    label: 'Owner',
  },
  {
    id: 'link',
    numeric: true,
    disablePadding: false,
    label: 'Folder Link',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Overall Status',
  },
  {
    id: 'marks',
    numeric: true,
    disablePadding: false,
    label: 'Marks',
  },
  {
    id: 'result',
    numeric: true,
    disablePadding: false,
    label: 'Pass/Fail',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Edit/View',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ backgroundColor: '#173767' }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            sx={{
              '& .MuiSvgIcon-root': {
                color: '#e2a925',
              },
                backgroundColor: '#173767',
                color: 'white',
                fontWeight: 'semibold',
              }}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
                backgroundColor: '#173767',
                color: 'white',
                fontWeight: 'semibold',
                 whiteSpace: 'nowrap',
                 textAlign: 'center',
              }}
          >
            <TableSortLabel
              active={orderBy === headCell.id }
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{
                color: 'white',
                fontWeight: 'semibold',
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden} >
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected, onDelete, selected } = props;

  const handleDeleteClick = () => {
    onDelete(selected);
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Tasks
        </Typography>
      )}
     
      <Grid container alignItems="center" justifyContent="flex-end" spacing={1}>
             <Grid item>
                <Search />
              </Grid>
              </Grid>   

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDeleteClick}>
            <DeleteIcon sx={{ color: '#173767' }}/>
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon sx={{ color: '#173767' }}/>
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [openFreeTaskView, setOpenFreeTaskView] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEditViewClick = (row) => {
    setSelectedRow(row);
    setOpenFreeTaskView(true);
  };
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('desc');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const checkbox = event.target.closest('input[type="checkbox"]');
    
    if (checkbox) {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
      setSelected(newSelected);
    }
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const [tableData, setTableData] = React.useState(rows);

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(tableData, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, tableData],
  );  

  const handleStatusChange = (event, rowId) => {
    const updatedData = tableData.map((row) => {
      if (row.id === rowId) {
        return { ...row, status: event.target.value };
      }
      return row;
    });
    setTableData(updatedData);
  };

  const handleMarksChange = (event, rowId) => {
    const updatedMarks = parseInt(event.target.value);
    const updatedData = tableData.map((row) => {
      if (row.id === rowId) {
        return { ...row, marks: updatedMarks };
      }
      return row;
    });
    setTableData(updatedData);
  };
  
  const handleMarksBlur = (event, rowId) => {
    const marks = event.target.value;
  let updatedResult = '';
  
  if (marks === '' || isNaN(marks)) {
    updatedResult = '';
  } else {
    updatedResult = marks >= 40 ? 'Pass' : 'Fail';
  }
  
  const updatedData = tableData.map((row) => {
    if (row.id === rowId) {
      return { ...row, result: updatedResult, marks };
    }
    return row;
  });
  setTableData(updatedData);
};

 const handleDelete = () => {
    console.log("Delete clicked");
  };

  const [tasks, setTasks] = useState([]);

const updateTaskTable = (newTask) => {
  setTasks([...tasks, newTask]);
};

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '1250px', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} onDelete={handleDelete} updateTaskTable={updateTaskTable}/>
         <div style={{ overflowX: 'auto' }}>
        <TableContainer>
        <Grid container>
            <Grid item xs={12}>
          <Table
            sx={{ minWidth: 750, border: '1px solid #B3B3B3', '& th, & td': {border: '1px solid #B3B3B3',}, }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ '& .MuiTableCell-root': {padding: '3px',},}}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        sx={{'& .MuiSvgIcon-root': {
                          color: '#E2A925',
                        }, }}
                      />
                    </TableCell>
                    <TableCell align="right" sx={{ whiteSpace: 'nowrap', textAlign: 'center' }}>{ row.code}</TableCell>
                    <TableCell align="right" sx={{ textAlign: 'center' }}>{row.description }</TableCell>
                    <TableCell align="right" sx={{ textAlign: 'center' }}>{row.words }</TableCell>
                    <TableCell align="right" sx={{ textAlign: 'center', height: '25px',
                    '& .MuiSelect-root': {height: '25px',},}}>
                    <div
                    style={{
                     borderRadius: '10px',
                     backgroundColor: 'red', 
                     padding: '3px',
                     whiteSpace: 'nowrap', 
                     color: '#fff', 
                      }}>{row.date }</div>
                     </TableCell>
                    <TableCell align="right" sx={{ textAlign: 'center' }}>{row.owner }</TableCell>
                    <TableCell align="right" sx={{ textAlign: 'center' }}>
                    {row.link ? (
                      <Tooltip title="Attachment">
                              <IconButton>
                                <AttachmentIcon sx={{ color: '#173767', transform: 'rotate(-45deg)' }}/>
                              </IconButton>
                            </Tooltip>
                          ) : (
                          'No attachment'
                    )}
                    </TableCell>
                    <TableCell align="right" sx={{ textAlign: 'center' }}>
                    <Select
                      value={row.status || ''}
                      onChange={(event) => handleStatusChange(event, row.id)} 
                      displayEmpty
                      inputProps={{ 'aria-label': 'Status'}}
                      style={{ minWidth: '100%', maxHeight: '30px', fontSize: '14px' }}
                      renderValue={(selected) => (!selected ? 'Status' : selected)}
                    >
                    <MenuItem value="" sx={{color: '#173767', fontSize: '14px'}}><em>Status</em></MenuItem>
                    <MenuItem value="Yet to Allocate" sx={{fontSize: '14px'}}>Yet to Allocate</MenuItem>
                    <MenuItem value="In Progress" sx={{fontSize: '14px'}}>In Progress</MenuItem>
                    <MenuItem value="Delivered/Done" sx={{fontSize: '14px'}}>Delivered/Done</MenuItem>
                    <MenuItem value="Canceled" sx={{fontSize: '14px'}}>Canceled</MenuItem>
                    <MenuItem value="On Hold" sx={{fontSize: '14px'}}>On Hold</MenuItem>
                    <MenuItem value="Yet to Deliver" sx={{fontSize: '14px'}}>Yet to Deliver</MenuItem>
                    </Select>
                    </TableCell>

                    <TableCell align="right" sx={{ textAlign: 'center' }}>
                    <input
                      type="number"
                      placeholder="00"
                      value={row.marks}
                      onChange={(event) => handleMarksChange(event, row.id)}
                      onBlur={(event) => handleMarksBlur(event, row.id)}
                      style={{ width: '60px', height: '30px', textAlign: 'center' }}
                    />
                    </TableCell>

                    <TableCell align="right" sx={{ textAlign: 'center' }}>{ row.result}</TableCell>
                    <TableCell align="right" sx={{ textAlign: 'center' }}>
                            <Tooltip title="View">
                              <IconButton>
                                <VisibilityIcon onClick={() => handleEditViewClick(row)} sx={{ color: '#173767' }}/>
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={14} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          </Grid>
          </Grid>
        </TableContainer>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense}  color={dense ? 'primary' : 'default'}
        />}
        label="Dense padding"
        sx={{
    [`& .MuiSwitch-switchBase.Mui-checked`]: {
      color: dense ? '#173767' : 'disabled',
    },
  }}
      />
      <Freetaskview open={openFreeTaskView} onClose={() => setOpenFreeTaskView(false)} selectedRow={selectedRow} />
    </Box>
  );
}