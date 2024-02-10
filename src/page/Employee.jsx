import React, { useState, useEffect } from 'react';
import EmpSidebar from '../components/EmpSidebar';
import EmpNavbar from '../components/EmpNavbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "../EmpDash.css";
import EmpBargraph from "../chart/EmpBargraph";
import Button from '@mui/material/Button';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Divider from '@mui/material-next/Divider';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, CardActions} from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Link } from 'react-router-dom';

const Employee = ({ open, onClose}) => {

  const [dailyActivities, setDailyActivities] = useState({
    code: "",
    name: "",
    count: "",
    status: "",
    activity: "",
  });

  const [dialogOpen, setDialogOpen] = useState(false);
      const handleDialogClose = () => {
        setDialogOpen(false);
      };

      const handleWorklog = () => {
        setDialogOpen(true);
      };

      const handleDailyActivities = () => {
    console.log("Daily activities saved:", dailyActivities);
  };

  const handleClear = () => {
    setDailyActivities({
      code: "",
      name: "",
      count: "",
      status: "",
      activity: "",
    });
  };

  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isCheckedIn) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isCheckedIn, startTime]);

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    setStartTime(Date.now());
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
    setEndTime(Date.now());
  };

  const handleResetTimer = () => {
    setIsCheckedIn(false);
    setStartTime(null);
    setEndTime(null);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / (1000 * 60)) % 60;
    const hours = Math.floor(time / (1000 * 60 * 60)) % 24;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };


  return (
    <>
             <div className="bgcolor">
             <EmpNavbar />
             <Box height={65} />
              <Grid container justifyContent="flex-end">
             <Stack direction="row" spacing={2}>
             <Button variant="filled" sx={{ backgroundColor: '#173767', position: 'relative', 
             color: '#fff',
             height: '30px',
             textTransform: 'none', 
             borderRadius: '20px',
             '&:hover': {
              backgroundColor: '#E2A925',
              color: '#fff',
              }, }}
              onClick={handleWorklog}>
                <WatchLaterIcon sx={{ color: '#fff', paddingRight: '5px' }}/>
                Work Log
              </Button>
              </Stack>
              </Grid>

              <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          sx={{ '& .MuiDialog-paper': { width: '300px', height: '180px', borderRadius: '10px' } }}
          >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}></DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column' , alignItems: 'center', textAlign: 'center' }}>
        <p>Timer: {formatTime(elapsedTime)}</p>
        </DialogContent>
        <DialogActions>
        <Button variant='filled' 
      sx={{color: '#fff', backgroundColor: '#E2A925', height: '25px',
        textTransform: 'none', borderRadius: '10px',
        '&:hover': {
         backgroundColor: '#173767',
         color: '#fff',
         },}} onClick={handleResetTimer}>Reset Timer</Button>
        <div sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      {isCheckedIn ? (
        <div>
          <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: 'red', height: '25px',
        textTransform: 'none', borderRadius: '10px',
        '&:hover': {
         backgroundColor: 'green',
         color: '#fff',
         },}} onClick={handleCheckOut}>Check Out</Button>
        </div>
      ) : (
        <div>
          <Button variant='filled' 
          sx={{color: '#fff', backgroundColor: 'green', height: '25px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: 'red',
           color: '#fff',
           },}} onClick={handleCheckIn}>Check In</Button>
        </div>
      )}
      
    </div>
        </DialogActions>
        </Dialog>

             <Box sx={{display: "flex"}}>  
             <EmpSidebar />
            <Box component="main" sx={{ flexGrow: 1, p:3}}>
            <Grid container spacing={2}>
            <Stack spacing={2} direction="column">
                            
              <Grid item xs={12}>
              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
              <Box sx={{width: { xs: '100%', sm: '50%' }, height: "20%"}}>
                  <div  className='card w-[210px] h-[100px]'>   
                    <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography className="numbers" gutterBottom  variant="h5">
                   100
                  </Typography>
                  <img className="iconCircle" src="/empassign.png" alt="" />
                   </div>
                   <Typography className='titles'  variant="subtitle1">
                      Projects Assigned
                  </Typography>
                   </CardContent>
                  </div>
              </Box>
              
              <Box sx={{width: { xs: '100%', sm: '50%' }, height: "20%"}}>
              <div  className='card w-[210px] h-[100px]'> 
               <CardContent>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h5" gutterBottom  className="numbers">
                    100
                  </Typography>
                  <img className="iconCircle" src="/empcomp.png" alt="" />
                  </div>
                  <Typography className='titles' gutterBottom variant="subtitle1" component="div">
                      Projects Completed
                  </Typography>
                  </CardContent>
             
              </div>
              </Box>
              
              <Box sx={{width: { xs: '100%', sm: '50%' }, height: "20%"}}>
              <div  className='card w-[210px] h-[100px]'> 
              <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h5" gutterBottom  className="numbers">
                    100
                  </Typography>
                  <img className="iconCircle" src="/empinprog.png" alt="" />
                  </div>
                  <Typography className='titles' gutterBottom variant="subtitle1" component="div">
                      Projects in Process
                  </Typography>
                  </CardContent>
             
              </div>
              </Box>
             
              <Box sx={{width: { xs: '100%', sm: '50%' }, height: "20%"}}>
              <div  className='card w-[210px] h-[100px]'>              
                  <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h5" gutterBottom  className="numbers">
                  100 
                  </Typography>
                  <img className="iconCircle" src="/emppend.png" alt="" />
                  </div>
                  <Typography className='titles' gutterBottom variant="subtitle1" component="div">
                   Projects Pending
                  </Typography>
                  </CardContent>
              
              </div>
              </Box>
              </Stack>
              </Grid>
              
              <Grid item xs={12} md={12}>
              {/* <Stack spacing={2}> */}
              
                <Card className='fullcard' sx={{ width: 100 + "%", height: 250, borderRadius: '20px'}}>
                <CardContent >
                  <Typography className='titles' sx={{textAlign: 'left', fontWeight: '600'}}>My Work</Typography>
                  <Divider sx={{ color: '#B3B3B3', marginBottom: 1 }}/>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/nowork.png" alt="" 
                style={{ minwidth: '150px', minHeight: '100px' }} />
                <Typography sx={{ fontWeight: '600', color: '#424242'}}> Woohoo, you'r all done! </Typography>
                <Typography sx={{ fontSize: '10px'}}> Tasks and Remainders that are scheduled for Today will appear here</Typography>
                </div>
                </CardContent>
                </Card>
                {/* </Stack> */}
              </Grid>
              </Stack>
                
                <Grid item xs={3} sm={3}>
                <Stack  spacing={2} >
                   <div  className="datecalendar h-[350px] " > 
                <CardContent >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider>
                </CardContent>            
                </div>
                </Stack>
                </Grid>
              </Grid>
           
              <Box height={20} />
              
              {/* <Stack spacing={2} direction="row"> */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <Card className='fullcard' sx={{ borderRadius: '20px'}}>
                <CardContent >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                 <Typography className='titles'sx={{textAlign: 'left', fontWeight: '600'}}>Daily Activities</Typography>
                 <div>
                 <Typography variant='filled' 
                sx={{color: '#fff', backgroundColor: '#173767',
                textTransform: 'none', borderRadius: '5px', padding: '5px', fontSize: '12px',
                }} > Today</Typography>
                <Link to="/empdactive">
                <CallMadeIcon onClick={handleDailyActivities} sx={{ ml: '5px', color: '#173767', fontSize: '20px'}}/>
                </Link>
                </div>
                </div>
                 <Divider sx={{ color: '#B3B3B3', mt: '2px' }}/>
                 <Grid container spacing={1}>
                 <Grid item xs={12} sm={6}>
                <div style={{ display: 'flex' , flexDirection: 'column', padding: '5px'}}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
                <label htmlFor="code" style={{ fontSize: '12px' }}>Task Code :</label>
                <div>
                <input
                  type="text"
                  id="code"
                  name="code"
                  value={dailyActivities.code}
                  onChange={(e) => setDailyActivities({ ...dailyActivities, code: e.target.value })}
                  style={{outline: 'none', width: '100%' , height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
                <label htmlFor="count" style={{ fontSize: '12px' }}>Word Count :</label>
                <div>
                <input
                  type="number"
                  id="count"
                  name="count"
                  value={dailyActivities.count}
                  onChange={(e) => setDailyActivities({ ...dailyActivities, count: e.target.value })}
                  style={{outline: 'none', width: '100%' , height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
                </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                <div style={{ display: 'flex' , flexDirection: 'column', padding: '5px'}}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
                <label htmlFor="name" style={{ fontSize: '12px' }}>Task Name :</label>
                <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={dailyActivities.name}
                  onChange={(e) => setDailyActivities({ ...dailyActivities, name: e.target.value })}
                  style={{outline: 'none', width: '100%' , height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
                <label htmlFor="status" style={{ fontSize: '12px' }}>Status :</label>
                <div>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={dailyActivities.status}
                  onChange={(e) => setDailyActivities({ ...dailyActivities, status: e.target.value })}
                  style={{outline: 'none', width: '100%', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
                </div>
                </Grid>
                </Grid>
                               
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '2px' }}>
                <label htmlFor="activity" style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>Daily Activities :</label>
                <TextField
                  type="text"
                  id="activity"
                  name="activity"
                  value={dailyActivities.activity}
                  onChange={(e) => setDailyActivities({ ...dailyActivities, activity: e.target.value })}
                  style={{ width: '100%'}}
                />
                </div>
                </CardContent>
                <CardActions sx={{ display: 'flex',  alignItems: 'center', justifyContent: 'flex-end',}}>
            <Button variant='filled' 
            sx={{color: '#fff', backgroundColor: '#173767', height: '20px',
            textTransform: 'none', borderRadius: '10px',
            '&:hover': {
            backgroundColor: '#173767',
            color: '#E2A925',
            }, }} onClick={handleDailyActivities}>Save</Button>
          <Button variant='filled' 
            sx={{color: '#fff', backgroundColor: '#E2A925', height: '20px',
            textTransform: 'none', borderRadius: '10px',
            '&:hover': {
            backgroundColor: '#E2A925',
            color: '#000000',
            }, }} onClick={handleClear}>Clear</Button>
          </CardActions>
                   
               
                </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Card className='fullcard' sx={{ borderRadius: '20px'}}>
                <CardContent className='titles'>
                <EmpBargraph/>
                                  
                </CardContent>
                  </Card>
                  </Grid>
                   </Grid> 
                  {/* </Stack> */}
            </Box>
            </Box>
            </div>
        </>  
        );
};

export default Employee;