import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, color: '#FFFFFF', height: '150px' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#072F57' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="buyer tab"
          TabIndicatorProps={{ style: { backgroundColor: '#E7760D' } }}
        >
          <Tab 
            label="Buyer" 
            {...a11yProps(0)} 
            sx={{ 
              fontSize: '26px',
              color: '#FFFFFF', 
              textTransform: 'none',
              fontWeight: '700',
              '&.Mui-selected': { 
                color: '#E7760D',
              } 
            }} 
          />
          <Tab 
            label="Supplier" 
            {...a11yProps(1)} 
            sx={{ 
              fontSize: '26px',
              color: '#FFFFFF', 
              textTransform: 'none',
              fontWeight: '700',
              '&.Mui-selected': { 
                color: '#E7760D',
              } 
            }} 
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography wrap sx={{ display: 'flex', alignItems: 'center', fontSize: '18px' }}>
            <CheckCircleIcon sx={{ fontSize: 'small', backgroundColor: '#FFFFFF', color: '#00732F', borderRadius: '50%', marginRight: 1 }} />
            Post your requirements.
          </Typography>
          <Typography wrap sx={{ display: 'flex', alignItems: 'center', fontSize: '18px' }}>
            <CheckCircleIcon sx={{ fontSize: 'small', backgroundColor: '#FFFFFF', color: '#00732F', borderRadius: '50%', marginRight: 1 }} />
            Sit back for multiple suppliers to contact you.
          </Typography>
          <Typography wrap sx={{ display: 'flex', alignItems: 'center', fontSize: '18px' }}>
            <CheckCircleIcon sx={{ fontSize: 'small', backgroundColor: '#FFFFFF', color: '#00732F', borderRadius: '50%', marginRight: 1 }} />
            Choose among the suppliers based on the ratings and reviews.
          </Typography>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography wrap sx={{ display: 'flex', alignItems: 'center', fontSize: '18px' }}>
            <CheckCircleIcon sx={{ fontSize: 'small', backgroundColor: '#FFFFFF', color: '#00732F', borderRadius: '50%', marginRight: 1 }} />
            Complete your profile and get verified.
          </Typography>
          <Typography wrap sx={{ display: 'flex', alignItems: 'center', fontSize: '18px' }}>
            <CheckCircleIcon sx={{ fontSize: 'small', backgroundColor: '#FFFFFF', color: '#00732F', borderRadius: '50%', marginRight: 1 }} />
            Select service tags for relevant opportunities.
          </Typography>
          <Typography wrap sx={{ display: 'flex', alignItems: 'center', fontSize: '18px' }}>
            <CheckCircleIcon sx={{ fontSize: 'small', backgroundColor: '#FFFFFF', color: '#00732F', borderRadius: '50%', marginRight: 1 }} />
            Reach out to buyers and expand your business.
          </Typography>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
