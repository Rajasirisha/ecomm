import React from 'react';
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
import Paper from '@mui/material/Paper';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';

const Manager = () => {

  return (
    <>
             <div className="bgcolor">
             <Navbar />
             <Box height={70} />
              <Grid container justifyContent="flex-end">
             <Stack direction="row" spacing={2}>
             <Button variant="filled" sx={{ backgroundColor: '#173767', position: 'relative', 
             color: '#fff', 
             borderRadius: '10px',
             '&:hover': {
              backgroundColor: '#E2A925',
              color: '#fff',
              }, }}>
              Candidates Daily Activity
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
                  <Paper className="iconCircle" elevation={0}>
                  <AssignmentOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper>
               {/* <Card className='card' sx={{ minWidth: 24 + "%", height: 150, bg: '#FFE19B', radius: '20px' }}> */}
               <CardContent>
               
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      Assignment
                  </Typography>
                  <Typography className="number" variant="h5">
                   400
                  </Typography> 
                  <Divider sx={{ color: '#173767', marginBottom: 1, marginTop: 1 }}/>
                  <Namebutton />
                 </CardContent>
                {/* </Card> */}
                </div>
              </Box>
              
              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[210px] h-[170px]'> 
                  <Paper className="iconCircle" elevation={0}>
                  <AssignmentLateOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper>
              {/* <Card className='card' sx={{  minWidth: 24 + "%", height: 150 }}> */}
              <CardContent>
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      Yet to Allocate
                  </Typography>
                  <Typography variant="h5"  className="number">
                    100
                  </Typography>
                  <Divider sx={{ color: '#173767', marginBottom: 1, marginTop: 1 }}/>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767" />
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>
              
              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[210px] h-[170px]'> 
                  <Paper className="iconCircle" elevation={0}>
                  <PublishedWithChangesOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper>
              {/* <Card className='card' sx={{  minWidth: 24 + "%", height: 150 }}> */}
              <CardContent>
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      InProgress
                  </Typography>
                  <Typography variant="h5"  className="number">
                    100
                  </Typography>
                  <Divider sx={{ color: '#173767', marginBottom: 1, marginTop: 1 }}/>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767" />
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>
             
              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[210px] h-[170px]'> 
                  <Paper className="iconCircle" elevation={0}>
                  <ContentPasteSearchOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper>
              {/* <Card className='card' sx={{  minWidth: 24 + "%", height: 150 }}> */}
              <CardContent>
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      InReview
                  </Typography>
                  <Typography variant="h5"  className="number">
                  100 
                  </Typography>
                  <Divider sx={{ color: '#173767', marginBottom: 1, marginTop: 1 }}/>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767" />
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
                  <Paper className="iconCircle" elevation={0}>
                  <AssignmentOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper>
              {/* <Card className='card' sx={{ minWidth: 24 + "%", height: 150 }}> */}
              <CardContent>
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      Dissertation
                  </Typography>
                  <Typography variant="h5" className="number">
                   400
                  </Typography>
                  <Divider sx={{ color: '#173767', marginBottom: 1, marginTop: 1 }}/>
                  <Dissbutton />
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>

              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[210px] h-[170px]'> 
                  <Paper className="iconCircle" elevation={0}>
                  <AssignmentLateOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper>
              {/* <Card className='card' sx={{ minWidth: 24 + "%", height: 150 }}> */}
              <CardContent>
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      Yet to Allocate
                  </Typography>
                  <Typography variant="h5" className="number">
                    100
                  </Typography>
                
                  <Divider sx={{ color: '#173767', marginBottom: 1, marginTop: 1 }}/>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767" />
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>
              
              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[210px] h-[170px]'> 
                  <Paper className="iconCircle" elevation={0}>
                  <PublishedWithChangesOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper>
              {/* <Card className='card' sx={{  minWidth: 24 + "%", height: 150 }}> */}
              <CardContent>
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      InProgress
                  </Typography>
                  <Typography variant="h5" className="number">
                    100
                  </Typography>
                  <Divider sx={{ color: '#173767', marginBottom: 1, marginTop: 1 }}/>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767" />
                  </CardContent>
              {/* </Card> */}
              </div>
              </Box>
             
              <Box sx={{width: "40%", height: "20%"}}>
              <div  className='card w-[220px] h-[170px]'> 
                  <Paper className="iconCircle" elevation={0}>
                  <ContentPasteSearchOutlinedIcon sx={{ color: '#173767' }}/>
                  </Paper>
              {/* <Card className='card' sx={{  minWidth: 24 + "%", height: 150 }}> */}
              <CardContent>
                  <Typography className='title' gutterBottom variant="subtitle1" component="div">
                      InReview
                  </Typography>
                  <Typography variant="h5" className="number">
                  100 
                  </Typography>
                  <Divider sx={{ color: '#173767', marginBottom: 1, marginTop: 1 }}/>
                  <Line percent={60} strokeWidth={5} strokeColor="#173767" />
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
                <CardContent className='title'>
                 <span >Today due Date</span>
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