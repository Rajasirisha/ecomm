import React, { useState } from 'react';
import Search from '../components/Search';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { DialogActions, Button, Toolbar, AppBar} from '@mui/material';

function Writer({ open, onClose }) {
  const [calendarDate, setCalendarDate] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected writer for Task ");
        onClose(); 
      };

      const generateCalendarDays = () => {
    const daysInMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0).getDate();
    const cells = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), i);
      const day = date.toLocaleDateString('en-US', { weekday: 'short' });
      const dateString = `${i}`;
      const dayString = `${day}`;
      cells.push(
        <td key={i} style={{ minWidth: '50px', padding: '2px', textAlign: 'center', color: '#173767', fontWeight: '600', border: '1px solid #b3b3b3' }}>
          <div>{dateString}</div>
          <div style={{ fontSize: '12px' }}>{dayString}</div>
        </td>
      );
    }
    return cells;
 };
    
      const handleChangeMonthYear = (selectedMonth, selectedYear) => {
        setCalendarDate(new Date(selectedYear, selectedMonth, 1));
      };
    
      const renderMonthOptions = () => {
        const months = Array.from({ length: 12 }, (_, index) => {
          return (
            <option key={index} value={index}>{new Date(0, index).toLocaleString('default', { month: 'long' })}</option>
          );
        });
        return months;
      };
    
      const renderYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: 10 }, (_, index) => {
          return <option key={index} value={currentYear + index}>{currentYear + index}</option>;
        });
        return years;
      };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#ffffff', height: '60px', zIndex: 1 }}>
          <Toolbar>
          <img className='mt-1 mr-5 rounded ' 
          style={{ width: '90px', height: '40px' }} 
          src="menulogo.png" 
          alt="logo" />
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="#000000"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Task
            </Typography>
            <Search />
          </Toolbar>
        </AppBar>
        </Box>
             <Box height={65} />
             <form onSubmit={handleSubmit}>
             <Box sx={{display: "flex"}}>  
            <Box component="main" sx={{ flexGrow: 1, pl:2}}>
          <FormControl>
          <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <select style={{color: '#173767'}}
                onChange={(e) => handleChangeMonthYear(parseInt(e.target.value), calendarDate.getFullYear())}
                value={calendarDate.getMonth()}
              >
                {renderMonthOptions()}
              </select>
              <select style={{color: '#173767'}}
                onChange={(e) => handleChangeMonthYear(calendarDate.getMonth(), parseInt(e.target.value))}
                value={calendarDate.getFullYear()}
              >
                {renderYearOptions()}
              </select>
              </div>
        
              <div style={{overflowX: 'auto', width: '100%'}}>
              <table style={{ borderCollapse: 'collapse', border: '1px solid #b3b3b3', width: '100%' }}>
                <thead>
                  <tr>
                    <th style={{color: '#fff', backgroundColor: '#173767'}}>
            Writers Name </th>
            {generateCalendarDays()}
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ border: '1px solid #b3b3b3' }}>
                      <td style={{ border: '1px solid #b3b3b3' }}>
            
            <RadioGroup
            defaultValue="kayalvizhi"
            name="radio-buttons-group"
            >
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="kayalvizhi" control={<Radio sx={{ '&.Mui-checked': {color: '#173767'},}}/>} label="Kayal Vizhi" />
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="madhubala" control={<Radio sx={{'&.Mui-checked': {color: '#173767'},}}/>} label="Madhu Bala" />
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="mariyam" control={<Radio sx={{'&.Mui-checked': {color: '#173767'},}}/>} label="Mariyam" />
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="jafreen" control={<Radio sx={{'&.Mui-checked': {color: '#173767'},}}/>} label="Jafreen" />
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="rahul" control={<Radio sx={{'&.Mui-checked': {color: '#173767'},}}/>} label="Rahul" />
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="antara" control={<Radio sx={{'&.Mui-checked': {color: '#173767'},}}/>} label="Antara" />
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="ashima" control={<Radio sx={{'&.Mui-checked': {color: '#173767'},}}/>} label="Ashima" />
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="mou" control={<Radio sx={{'&.Mui-checked': {color: '#173767'},}}/>} label="Mou" />
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="kausamvi" control={<Radio sx={{'&.Mui-checked': {color: '#173767'},}}/>} label="Kausamvi" />
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="neha" control={<Radio sx={{'&.Mui-checked': {color: '#173767'},}}/>} label="Neha" />
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="sayan" control={<Radio sx={{'&.Mui-checked': {color: '#173767'},}}/>} label="Sayan" />
        <FormControlLabel style={{ paddingLeft: '5px', whiteSpace: 'nowrap'}} value="shoromona" control={<Radio sx={{'&.Mui-checked': {color: '#173767'},}}/>} label="Shoromona" />
      </RadioGroup>
      </td>
                    {Array.from({ length: new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1).getDay() }, (_, index) => (
                      <td key={index} style={{ minWidth: '50px', padding: '2px', textAlign: 'center', border: '1px solid #b3b3b3' }}></td>
                    ))}
                  </tr>
                </tbody>
              </table>
              </div>
    </FormControl>
              <Box height={10} />
              <DialogActions>
              <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#173767',
           color: '#E2A925',
           }, }} onClick={handleSubmit}>Select</Button>
        <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#E2A925', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#E2A925',
           color: '#000000',
           }, }} onClick={onClose}>Cancel</Button>
            </DialogActions>
       </Box>
     </Box>
    </form>
        </>
  )
}

export default Writer;
