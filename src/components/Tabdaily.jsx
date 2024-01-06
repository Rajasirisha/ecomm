import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Empdaily from '../table/Empdaily';
import Freelancerdaily from '../table/Freelanceredaily';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{  p: 1, height: 'calc(100vh - 48px)', }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 250 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{ bgcolor: '#FFF',
            '& .MuiTabs-indicator': {
              backgroundColor: '#E2A925', 
            },
            '& .MuiTab-root': {
              color: '#173767',
              textTransform: 'none', 
              fontWeight: 'bold',
              fontSize: '16px',
              '&.Mui-selected': {
                color: '#173767', 
              },
            },
          }}
        > 
          <Tab label="Employee" {...a11yProps(0)} sx={{ maxWidth: '100%' }}/> 
          <Tab label="Freelancer" {...a11yProps(1)} sx={{ maxWidth: '100%' }}/> 
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ width: '1250px' }}
      >
        
        <TabPanel value={value} index={0} dir={theme.direction}>
        {value === 0 && <Empdaily />}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        {value === 1 && <Freelancerdaily />}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}