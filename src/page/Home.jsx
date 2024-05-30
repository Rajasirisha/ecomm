import React from 'react';
import Navbar from '../components/Navbar';
import Tab from '../components/Tab';
import Work from '../components/Work';
import Bottombar from '../components/Bottombar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { InputBase, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import EastIcon from '@mui/icons-material/East';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Style.css';

const Home = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginTop: theme.spacing(5),
    width: '100%',
    maxWidth: '400px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 2,
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E7760D',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#6B7280',
    fontSize: '15px',
    fontWeight: '300',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 5),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }));

  const SearchButton = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(5),
    height: '45px',
    padding: theme.spacing(1, 3),
    backgroundColor: '#00732F',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#E7760D',
    },
    textTransform: 'none',
  }));

  return (
    <div>
      <Navbar />
      <Box>
        <div className="home">
          <img 
            src="./images/background.png" 
            alt="background" 
          />
          <div className="overlay"></div>
          <div className="content">
            <Typography
              noWrap
              component="div"
              color="#FFFFFF"
              sx={{ fontSize: '55px', fontWeight: '700', position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}
            >
              Are You a Supplier?
            </Typography>
            <Typography
              noWrap
              component="div"
              color="#FFFFFF"
              sx={{ fontSize: '55px', fontWeight: '400', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}
            >
              Explore Matching Opportunities.
            </Typography>
            <div style={{ position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', gap: '16px', width: '100%', justifyContent: 'center' }}>
              <Search>
                <SearchIconWrapper>
                  <BusinessCenterIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search your required service here"
                  aria-label="Search"
                />
              </Search>
              <Search>
                <SearchIconWrapper>
                  <LocationOnIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search your desired location here"
                  aria-label="Search"
                />
              </Search>
              <SearchButton variant="contained">
                Search
              </SearchButton>
            </div>
            <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, textAlign: 'center' }}>
              <Typography
                noWrap
                component="div"
                color="#FFFFFF"
                sx={{ fontSize: '18px', fontWeight: '700'}}
              >
                Are you a buyer? <span style={{ textDecoration: 'underline', fontWeight: '300' }}>Click here if you are looking to post a requirement</span>
              </Typography>
            </div>
          </div>
        </div>
        <Box height='5px'/>
        <Stack spacing={2} direction="row" style={{ justifyContent: 'space-around', padding: '10px', margin: '30px' }}>
          <Grid item xs={10}>
            <div style={{ padding: '10px', width: '90%' }}>
              <Typography
                noWrap
                component="div"
                sx={{ fontSize: '32px', fontWeight: '700', color: '#000000' }}
              >
                Ready to dive into <span style={{color: '#271555'}}>HABOT?</span>
              </Typography>
              <Typography
                component="div"
                sx={{ fontSize: '18px', fontWeight: '300', color: '#000000', paddingTop: '10px', paddingBottom: '20px' }}
              >
                Signing up with HABOT opens the door to a world of new opportunities and potential
                for business growth. Gain access to a vibrant community of like-minded individuals, 
                unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
              </Typography>
              <Button 
                variant="contained"
                noWrap
                sx={{ 
                  width: '300px',
                  height: '40px',
                  color: '#FFFFFF', 
                  backgroundColor: '#00732F', 
                  textTransform: 'none', 
                  fontWeight: '700',
                  '&:hover': {
                    backgroundColor: '#E7760D',
                    borderColor: '#E7760D', 
                  },
                }}
              >
                Sign up Today! <EastIcon />
              </Button>
            </div>
          </Grid>
          <Grid container item xs={8} justifyContent="center" spacing={1}>
            <Grid item>
              <Button 
                variant="outlined" 
                noWrap
                sx={{ 
                  width: '220px',
                  height: '50px',
                  color: '#3E3E3E', 
                  borderColor: '#E7760D', 
                  borderRadius: '5px', 
                  textTransform: 'none', 
                  fontWeight: '500',
                  '&:hover': {
                    backgroundColor: '#E7760D',
                    borderColor: '#E7760D', 
                    color: '#FFFFFF',
                  },
                }}
              >
                Abu Dhabi
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                noWrap
                sx={{ 
                  width: '220px',
                  height: '50px',
                  color: '#3E3E3E', 
                  borderColor: '#E7760D', 
                  borderRadius: '5px', 
                  textTransform: 'none', 
                  fontWeight: '500',
                  '&:hover': {
                    backgroundColor: '#E7760D',
                    borderColor: '#E7760D', 
                    color: '#FFFFFF',
                  },
                }}
              >
                Sharjah & Ajman
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                noWrap
                sx={{ 
                  width: '220px',
                  height: '50px',
                  color: '#3E3E3E', 
                  borderColor: '#E7760D', 
                  borderRadius: '5px', 
                  textTransform: 'none', 
                  fontWeight: '500',
                  '&:hover': {
                    backgroundColor: '#E7760D',
                    borderColor: '#E7760D', 
                    color: '#FFFFFF',
                  },
                }}
              >
                Ras AI Khaimah
              </Button>
            </Grid>
          </Grid>

          <Grid container item xs={8} justifyContent="center" spacing={1} >
          <Grid item>
              <Button 
                variant="outlined" 
                noWrap
                sx={{ 
                  width: '220px',
                  height: '50px',
                  color: '#3E3E3E', 
                  borderColor: '#E7760D', 
                  borderRadius: '5px', 
                  textTransform: 'none', 
                  fontWeight: '500',
                  '&:hover': {
                    backgroundColor: '#E7760D',
                    borderColor: '#E7760D',
                    color: '#FFFFFF', 
                  },
                }}
              >
                Dubai
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                noWrap
                sx={{ 
                  width: '220px',
                  height: '50px',
                  color: '#3E3E3E', 
                  borderColor: '#E7760D', 
                  borderRadius: '5px', 
                  textTransform: 'none', 
                  fontWeight: '500',
                  '&:hover': {
                    backgroundColor: '#E7760D',
                    borderColor: '#E7760D',
                    color: '#FFFFFF', 
                  },
                }}
              >
                Fujairah
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                noWrap
                sx={{ 
                  width: '220px',
                  height: '50px',
                  color: '#3E3E3E', 
                  borderColor: '#E7760D', 
                  borderRadius: '5px', 
                  textTransform: 'none', 
                  fontWeight: '500',
                  '&:hover': {
                    backgroundColor: '#E7760D',
                    borderColor: '#E7760D', 
                    color: '#FFFFFF',
                  },
                }}
              >
                Umm AI Quwain
              </Button>
            </Grid>
            </Grid>
          </Stack>

          <Box sx={{ maxWidth: '1250px', height: '400px', backgroundColor: '#072F57', margin: '50px auto', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Grid container spacing={10} justifyContent="space-between" alignItems="center" style={{padding: '20px'}}>
              <Grid item xs={6} container justifyContent="center" style={{ position: 'relative' }}>
                <img 
                  src="./images/video.jpg" 
                  alt="video" 
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <YouTubeIcon 
                  style={{ 
                    position: 'absolute', 
                    top: '60%', 
                    left: '55%', 
                    transform: 'translate(-50%, -50%)', 
                    color: 'red', 
                    fontSize: '80px' 
                  }} 
                />
              </Grid>
              <Grid item xs={6} container justifyContent="center">
                <Tab />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ maxWidth: '100%', height: '250px', backgroundColor: '#E8FBFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Grid container spacing={10} justifyContent="space-between" alignItems="center" style={{padding: '20px'}}>
              <Grid item xs={6} container justifyContent="center">
              <Typography
              noWrap
              component="div"
              color="#000000"
              sx={{ fontSize: '36px', fontWeight: '600'}}
            >
              Let Suppliers <span style={{ textDecoration: 'underline', textDecorationColor: '#E7760D' }}>Find You </span>
            </Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="center">
              <Button 
                variant="contained" 
                noWrap
                sx={{ 
                  width: '220px',
                  height: '50px',
                  color: '#FFFFFF', 
                  borderColor: '#E7760D', 
                  backgroundColor: '#E7760D',
                  borderRadius: '5px', 
                  textTransform: 'none', 
                  fontWeight: '500',
                  '&:hover': {
                    backgroundColor: '#E7760D',
                    borderColor: '#E7760D', 
                    color: '#FFFFFF',
                  },
                }}
              >
                Get Verified
              </Button>
              </Grid>
            </Grid>
          </Box>

          <div className="content">
            <Typography
              noWrap
              component="div"
              color="#222222"
              sx={{ fontSize: '36px', fontWeight: '700', textAlign: 'center' }}
            >
              How it works?
            </Typography>
            <Typography
              Wrap
              component="div"
              color="#000000"
              sx={{ fontSize: '18px', fontWeight: '400', textAlign: 'center'}}
            >
             Buyers post their needs and review top suppliers, while suppliers complete profiles connect with
            </Typography>
            <Typography
              Wrap
              component="div"
              color="#000000"
              sx={{ fontSize: '18px', fontWeight: '400', textAlign: 'center'}}
            >
            potential buyers, and build successful business relationships, sharing valuable feedback.
            </Typography>
            <Work />
            </div>
            <Bottombar />

      </Box>
    </div>
  );
};

export default Home;
