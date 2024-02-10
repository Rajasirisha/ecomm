import React, { useState } from 'react';
import FreeSidebar from '../components/FreeSidebar';
import FreeNavbar from '../components/FreeNavbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "../FreeDash.css";
import FreeBargraph from "../chart/FreeBargraph";
import Button from '@mui/material/Button';
import Divider from '@mui/material-next/Divider';
import { TextField, CardActions} from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Link } from 'react-router-dom';

const Freelancer = ({ open, onClose}) => {

  const [dailyActivities, setDailyActivities] = useState({
    code: "",
    name: "",
    count: "",
    status: "",
    activity: "",
  });

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

  return (
    <>
             <div className="bgcolor">
             <FreeNavbar />
             <Box height={65} />
             <Box sx={{display: "flex"}}>  
             <FreeSidebar />
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
                <Link to="/fdactive">
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
                <FreeBargraph/>
                                  
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

export default Freelancer;