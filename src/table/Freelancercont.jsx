import * as React from 'react';
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
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';

function createData(sno, name, id, phone, email, address) {
  return {
    sno,
    name,
    id,
    phone,
    email,
    address,
  };
}

const rows = [
  createData(1, 'Aneesh', 10814, 9999999900, 'abc@gmail.com', 'Chennai'),
  createData(2, 'Prathik', 10815,  8888882500, 'abc@gmail.com', 'Chennai'),
  createData(3, 'Sruthi', 10816,  7777771000, 'abc@gmail.com', 'Vellore'),
  createData(4, 'Abdul', 10817, 9999999500, 'abc@gmail.com', 'Vellore'),
  createData(5, 'A', 10818,  8888881600, 'abc@gmail.com', 'Vellore'),
  createData(6, 'B', 10819,  9009999999, 'abc@gmail.com', 'Vellore'),

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
    id: 'sno',
    numeric: false,
    disablePadding: true,
    label: 'S.No',
  },
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'id',
    numeric: true,
    disablePadding: false,
    label: 'Freelancer Id',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: false,
    label: 'Phone Number',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'adderss',
    numeric: true,
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
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
  const { numSelected } = props;

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
          Freelancer Details
        </Typography>
      )}
     
      <Grid container alignItems="center" justifyContent="flex-end" spacing={1}>
             <Grid item>
                <Search />
              </Grid>
            <Grid item>
             <Button variant="filled" 
             sx={{ backgroundColor: '#173767',
              position: 'relative', 
             color: '#fff',
             height: '30px',
             textTransform: 'none', 
             borderRadius: '20px',
             '&:hover': {
              backgroundColor: '#E2A925',
              color: '#fff',
              }, }}>
                <AddIcon sx={{mr: '2px'}}/>Add Freelancer
              </Button>
              </Grid>
              </Grid>
               

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
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

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '1250px', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
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
                    sx={{ cursor: 'pointer'}}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        // color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        sx={{'& .MuiSvgIcon-root': {
                          color: '#E2A925',
                        }, }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{ textAlign: 'center' }}
                    >
                      {row.sno }
                    </TableCell>
                    <TableCell align="right" sx={{ whiteSpace: 'nowrap', textAlign: 'center' }}>{ row.name}</TableCell>
                    <TableCell align="right" sx={{ textAlign: 'center' }}>{row.id }</TableCell>
                    <TableCell align="right" sx={{ textAlign: 'center' }}>{row.phone }</TableCell>
                    <TableCell align="right" sx={{ whiteSpace: 'nowrap',textAlign: 'center' }}>{row.email }</TableCell>
                    <TableCell align="right" sx={{ whiteSpace: 'nowrap', textAlign: 'center' }}>{row.address }</TableCell>
                    <TableCell align="right" sx={{ textAlign: 'center' }}>
                            <Tooltip title="View">
                              <IconButton>
                                <VisibilityIcon sx={{ color: '#173767' }}/>
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton>
                                <DeleteIcon sx={{ color: '#173767' }}/>
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
                  <TableCell colSpan={7} />
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
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}