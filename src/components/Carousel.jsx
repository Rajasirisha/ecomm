import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'; 

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tasks = [
  {
    taskName: 'Chapter 1:Intro BGMG847-DISSERTATION',
    taskCode: 'Code-836',
    status: 'In Progress',
    owner: ' Zubair',
    assignee: 'Madhu Bala',
    bgColor: '#173767',
  },
  {
    taskName: 'Update Dashboard',
    taskCode: 'Code-836',
    status: 'Pending',
    owner: 'Kayal',
    assignee: 'Mariyam',
    bgColor: '#E2A925',
  },
  {
    taskName: 'Data science',
    taskCode: 'Code-836',
    status: 'In Progress',
    owner: 'Khalique',
    assignee: 'Rahul',
    bgColor: '#FF785A',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tasks.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.default',
        }}
      >
      
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tasks.map((task, index) => (
          <Link to="/task" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div key={task.taskCode}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  bgcolor: task.bgColor,
                  color: '#000000',
                  padding: '5px',
                  borderRadius: '15px',
                  height: '130px',
                  fontSize: '12px',
                  alignItems: 'end',
                }}
              >
                
                
                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
                 <Typography variant="body2">
                  Task Name   :
                  </Typography>
                 <Box
                  sx={{
                    border: '1px solid #fff',
                    bgcolor: '#fff',
                    borderRadius: '8px',
                    width: '250px',
                    height: '20px',
                    textAlign: 'center',
                     ml: 3,
                  }}
                >
                  {tasks[activeStep].taskName}
                </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2">
                Task Code   :
                </Typography>
                <Box
                sx={{
                border: '1px solid #fff',
                bgcolor: '#fff',
                borderRadius: '8px',
                width: '150px',
                height: '20px',
                textAlign: 'center',
                ml: 3,
              }}
              >
              {tasks[activeStep].taskCode}
              </Box>
              </Box>
                
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2">
                Owner   :
                </Typography>
                <Box
                  sx={{
                    border: '1px solid #fff',
                    bgcolor: '#fff',
                    borderRadius: '8px',
                    width: '150px',
                    height: '20px',
                    textAlign: 'center',
                    ml: 3,
                  }}
                >
                  {tasks[activeStep].owner}
              </Box>
              </Box>
                
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2">
                Status   :
                </Typography>
                <Box
                  sx={{
                    border: '1px solid #fff',
                    bgcolor: '#fff',
                    borderRadius: '8px',
                    width: '150px',
                    height: '20px',
                    textAlign: 'center',
                    ml: 3,
                  }}
                >
                  {tasks[activeStep].status}
              </Box>
              </Box>
                
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2">
                Assignee  :
                </Typography>
                <Box
                  sx={{
                    border: '1px solid #fff',
                    bgcolor: '#fff',
                    borderRadius: '8px',
                    width: '150px',
                    height: '20px',
                    textAlign: 'center',
                    ml: 3,
                  }}
                >
                  {tasks[activeStep].assignee}
              </Box>
              </Box>
              </Box>
            ) : null}
          </div>
          </Link>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ fontSize: '12px', color: '#173767' }}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ fontSize: '12px', color: '#173767' }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight sx={{ size: '12px' }} />
            ) : (
              <KeyboardArrowLeft sx={{ size: '12px' }} />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;
