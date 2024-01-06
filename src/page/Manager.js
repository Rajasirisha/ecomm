import React, { useCallback } from 'react';
import Sidebar from '../components/Sidebar';
import Divider from '@mui/material-next/Divider';
// import Profile from '../components/Profile';
// import PortalPopup from '../components/PortalPopup';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "../Dash.css";
import Namebutton from '../components/Namebutton';
import Dissbutton from '../components/Dissbutton';
import Carousel from '../components/Carousel';
import Barchart from "../chart/Barchart";
import Linechart from "../chart/Linechart";
import Button from '@mui/material/Button';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';

const Manager = () => {

  const onActivityClick = useCallback(() => {
    
  }, []);

  return (
    <>
             <div className="bgcolor">
             <Navbar />
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
              onClick={onActivityClick}>
              <Link to="/activity">
              Candidates Daily Activity</Link>
              </Button>
              </Stack>
              </Grid>
             <Box sx={{display: "flex"}}>  
             <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p:3}}>
            <Grid container spacing={2}>
            <Stack spacing={2} direction="column">
                            
              <Grid item xs={12}>
              <Stack spacing={2} direction="row">
                <Box sx={{width: "40%", height: "20%"}}>
                  <div  className='card w-[210px] h-[170px]'> 
                  {/* <Paper className="iconCircle" elevation={3}>
                  <AssignmentOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper> */}
               {/* <Card className='card' sx={{ minWidth: 24 + "%", height: 150, bg: '#FFE19B', radius: '20px' }}> */}
               <img className="iconCircle" src="/assignment.png" alt="" />
               <Typography className='title'  variant="subtitle1">
                      Assignment
                  </Typography>
                  <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography className="number" gutterBottom  variant="h5">
                   400
                  </Typography>
                   </div>
                  <Divider sx={{ color: '#173767', marginBottom: 0.5, marginTop: 1 }}/>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Namebutton />
                  </div>
                 </CardContent>
                {/* </Card> */}
                </div>
              </Box>
              
              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[210px] h-[170px]'> 
                  {/* <Paper className="iconCircle" elevation={3}>
                  <AssignmentLateOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper> */}
              {/* <Card className='card' sx={{  minWidth: 24 + "%", height: 150 }}> */}
              <img className="iconCircle" src="/yettoallocate.png" alt="" />
             
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      Yet to Allocate
                  </Typography>
                   <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant="h5" gutterBottom  className="number">
                    100
                  </Typography>
                  </div>
                  <Divider sx={{ color: '#173767', marginTop: 1 }}/>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767"/> 
                   <Typography variant="subtitle2" style={{ marginLeft: '5px' }}>
                      60%
                   </Typography>
                  </div>
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>
              
              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[210px] h-[170px]'> 
                  {/* <Paper className="iconCircle" elevation={3}>
                  <PublishedWithChangesOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper> */}
              {/* <Card className='card' sx={{  minWidth: 24 + "%", height: 150 }}> */}
              <img className="iconCircle" src="/inprogress.png" alt="" />
              
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      InProgress
                  </Typography>
                  <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant="h5" gutterBottom  className="number">
                    100
                  </Typography>
                  </div>
                  <Divider sx={{ color: '#173767', marginTop: 1 }}/>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767"/> 
                   <Typography variant="subtitle2" style={{ marginLeft: '5px' }}>
                      60%
                   </Typography>
                  </div>
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>
             
              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[210px] h-[170px]'> 
                  {/* <Paper className="iconCircle" elevation={3}>
                  <ContentPasteSearchOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper> */}
              {/* <Card className='card' sx={{  minWidth: 24 + "%", height: 150 }}> */}
              <img className="iconCircle" src="/inreview.png" alt="" />
              
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      InReview
                  </Typography>
                  <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant="h5" gutterBottom  className="number">
                  100 
                  </Typography>
                  </div>
                  <Divider sx={{ color: '#173767', marginTop: 1 }}/>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767"/> 
                   <Typography variant="subtitle2" style={{ marginLeft: '5px' }}>
                      60%
                   </Typography>
                  </div>
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>
              </Stack>
              </Grid>
               {/* sx={{  minWidth: 40 + "%", height: 360, }}> */}
             
               
             
              <Box height={20} />
              {/* <Grid container spacing={2}> */}
              <Grid item xs={12}>
              <Stack spacing={2} direction="row">
              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[210px] h-[170px]'> 
                  {/* <Paper className="iconCircle" elevation={3}>
                  <AssignmentOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper> */}
              {/* <Card className='card' sx={{ minWidth: 24 + "%", height: 150 }}> */}
              <img className="iconCircle" src="/assignment.png" alt="" />
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      Dissertation
                  </Typography>
                  <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant="h5" gutterBottom  className="number">
                   400
                  </Typography>
                  </div>
                  <Divider sx={{ color: '#173767', marginBottom: 0.5, marginTop: 1 }}/>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Dissbutton />
                  </div>
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>

              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[210px] h-[170px]'> 
                  {/* <Paper className="iconCircle" elevation={3}>
                  <AssignmentLateOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper> */}
              {/* <Card className='card' sx={{ minWidth: 24 + "%", height: 150 }}> */}
              <img className="iconCircle" src="/yettoallocate.png" alt="" />
              
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      Yet to Allocate
                  </Typography>
                  <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant="h5" gutterBottom  className="number">
                    100
                  </Typography>
                  </div>
                  <Divider sx={{ color: '#173767', marginTop: 1 }}/>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767"/> 
                   <Typography variant="subtitle2" style={{ marginLeft: '5px' }}>
                      60%
                   </Typography>
                  </div>
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>
              
              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[210px] h-[170px]'> 
                  {/* <Paper className="iconCircle" elevation={3}>
                  <PublishedWithChangesOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper> */}
              {/* <Card className='card' sx={{  minWidth: 24 + "%", height: 150 }}> */}
              <img className="iconCircle" src="/inprogress.png" alt="" />
             
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      InProgress
                  </Typography>
                   <CardContent>
                   <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant="h5" gutterBottom className="number">
                    100
                  </Typography>
                  </div>
                  <Divider sx={{ color: '#173767', marginTop: 1 }}/>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767"/> 
                   <Typography variant="subtitle2" style={{ marginLeft: '5px' }}>
                      60%
                   </Typography>
                  </div>
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>
             
              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[220px] h-[170px]'> 
                  {/* <Paper className="iconCircle" elevation={3}>
                  <ContentPasteSearchOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper> */}
              {/* <Card className='card' sx={{  minWidth: 24 + "%", height: 150 }}> */}
              <img className="iconCircle" src="/inreview.png" alt="" />
             
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      InReview
                  </Typography>
                   <CardContent>
                   <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant="h5" gutterBottom className="number">
                  100 
                  </Typography>
                  </div>
                  <Divider sx={{ color: '#173767', marginTop: 1 }}/>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767"/> 
                   <Typography variant="subtitle2" style={{ marginLeft: '5px' }}>
                      60%
                   </Typography>
                  </div>
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>
              </Stack>
              </Grid>
              </Stack>
              {/* </Grid> */}
              
              {/* <Grid item xs={4}> */}
                <Stack  spacing={2} sx={{ marginLeft: 2 }}>
                <Box >
                   <div  className="datecalendar w-[330px] h-[385px] " > 
                {/* <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      Calendar
                  </Typography> */}
                {/* <Card sx={{ p:1, minWidth: 40 + "%", height: 360 }}> */}
                <CardContent >
               
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                
                  <DateCalendar />
                
                </LocalizationProvider>
                </CardContent>            
                {/* </Card> */}
                </div>
                </Box>
                </Stack>
                {/* </Grid> */}

              </Grid>
           
              <Box height={20} />
              {/* <Grid container spacing={2}> */}
              {/* <Grid item xs={8}> */}
              <Stack spacing={2} direction="row">
              <Grid item xs={8}>
                <Card className='card1' sx={{ width: 410, height: 200}}>
                 <Typography className='title'>Today due Date</Typography
                 ><CardContent >
                 <Carousel />     
                </CardContent>
                </Card>
                </Grid>
                <Grid item xs={8}>
                <Card className='card1' sx={{ width: 800, height: 200}}>
                <CardContent className='title'>
                <Linechart/>
                                  
                </CardContent>
                  </Card>
                  </Grid> 
                  </Stack>
              {/* </Grid> */}
              {/* </Grid> */}

              <Box height={20} />
              {/* <Grid container spacing={2}> */}
              <Grid item xs={12}>
              <Stack spacing={2}>
              
                <Card className='card1' sx={{ width: 100 + "%", height: 200}}>
                <CardContent className='title'>
                 <Barchart/>
                </CardContent>
                </Card>
                </Stack>
              </Grid>
              {/* </Grid> */}
           
            </Box>
            </Box>
            </div>
        </>  
        );
};

export default Manager;