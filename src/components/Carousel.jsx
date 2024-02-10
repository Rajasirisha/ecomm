// import React from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import Box from '@mui/material/Box';
// import CardContent from '@mui/material/CardContent';
// import '../Dash.css';

// const Carousel = () => {
//   return (
//     <CarouselProvider
//      naturalSlideWidth={380}
//      naturalSlideHeight={180}
//      totalSlides={3}
//     >

//     <Slider>
//       <Slide index={0}>
//       <Box >
//               <div  className='slide1'> 
//             <CardContent>
//             <div className="absolute top-4% left-25% w-[92%] h-[20%] md:top-[4%] md:right-[6%] md:bottom-[75%] md:left-[2%]">
//             <div className="absolute top-0 leading-[20px] font-medium">
//               Task Name
//             </div>
//             <div className="absolute top-[9%] right-0 bottom-0 left-[32%] w-[85%] h-[90%] md:top-[9%] md:left-[32%] md:w-[65%] md:h-[90%] rounded-10xs bg-white border border-solid border-gray-100" />
//             <div className="absolute top-[30%] left-[38%] w-[57%] h-[55%] md:top-[30%] md:left-[38%] md:w-[57%] md:h-[55%] text-xs leading-[15px] font-medium text-left flex items-center">
//               Chapter 1: Intro BGMG847-DISSERTATION
//             </div>
//             </div>
//             <div className="absolute h-[11.43%] w-[55.81%] top-[47.43%] right-[5.75%] bottom-[41.14%] left-[38.45%]">
//               <div className="absolute top-[0%] left-[0%] leading-[20px] font-medium">
//                 Owner
//               </div>
//               <div className="absolute h-[90%] w-[62.82%] top-[5%] right-[0%] bottom-[5%] left-[37.18%] rounded-10xs bg-white box-border border-[1px] border-solid border-gray-100" />
//               <div className="absolute top-[5%] left-[44.9%] text-xs font-medium">
//                 Zubair
//               </div>
//             </div>
//             <div className="absolute h-[12%] w-[56.09%] top-[64.57%] right-[5.75%] bottom-[23.43%] left-[38.16%]">
//               <div className="absolute top-[0%] left-[0%] leading-[20px] font-medium">
//                 Status
//               </div>
//               <div className="absolute h-[85.71%] w-[62.5%] top-[14.29%] right-[0%] bottom-[0%] left-[37.5%] rounded-10xs bg-white box-border border-[1px] border-solid border-gray-100" />
//               <div className="absolute top-[9.52%] left-[45.19%] text-xs font-medium text-left">
//                 Inprogress
//               </div>
//             </div>
//             <div className="absolute h-[37.71%] w-[21.26%] top-[32%] right-[73.91%] bottom-[30.29%] left-[4.83%] text-left text-sm">
//               <div className="absolute h-[45.45%] w-[40.54%] top-[54.55%] right-[29.46%] bottom-[0%] left-[30%]">
//                 <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-50% bg-yellowgreen box-border border-[1px] border-dashed border-black" />
//                 <div className="absolute top-[16.67%] left-[13.33%] font-medium">
//                   MB
//                 </div>
//               </div>
//               <div className="absolute top-[0%] left-[0%] text-base leading-[20px] font-medium text-center">
//                 Assignee
//               </div>
//             </div>
//             <div className="absolute h-[11.43%] w-[62.99%] top-[30.29%] right-[5.75%] bottom-[58.29%] left-[31.26%]">
//               <div className="absolute top-[0%] left-[0%] leading-[20px] font-medium">
//                 Task Code
//               </div>
//               <div className="absolute h-[90%] w-[55.66%] top-[5%] right-[0%] bottom-[5%] left-[44.34%] rounded-10xs bg-white box-border border-[1px] border-solid border-gray-100" />
//               <div className="absolute top-[10%] left-[49.82%] text-xs font-medium text-left">
//                 Code-836
//               </div>
//             </div>
        
//             </CardContent>
//               </div>
//               </Box>
//       </Slide>
//       <Slide index={1}>
//       <Box >
//               <div  className='slide2'> 
//             <CardContent>
//             <div className="absolute top-4% left-25% w-[92%] h-[20%] md:top-[4%] md:right-[6%] md:bottom-[75%] md:left-[2%] ">
//             <div className="absolute top-0 leading-[20px] font-medium text-white">
//               Task Name
//             </div>
//             <div className="absolute top-[9%] right-0 bottom-0 left-[32%] w-[85%] h-[90%] md:top-[9%] md:left-[32%] md:w-[65%] md:h-[90%] rounded-10xs bg-white border border-solid border-gray-100" />
//             <div className="absolute top-[30%] left-[38%] w-[57%] h-[55%] md:top-[30%] md:left-[38%] md:w-[57%] md:h-[55%] text-xs leading-[15px] font-medium text-left flex items-center">
//               Chapter 1: Intro BGMG847-DISSERTATION
//             </div>
//             </div>
//             <div className="absolute h-[11.43%] w-[55.81%] top-[47.43%] right-[5.75%] bottom-[41.14%] left-[38.45%]">
//               <div className="absolute top-[0%] left-[0%] leading-[20px] text-white font-medium">
//                 Owner
//               </div>
//               <div className="absolute h-[90%] w-[62.82%] top-[5%] right-[0%] bottom-[5%] left-[37.18%] rounded-10xs bg-white box-border border-[1px] border-solid border-gray-100" />
//               <div className="absolute top-[5%] left-[44.9%] text-xs font-medium">
//                 Zubair
//               </div>
//             </div>
//             <div className="absolute h-[12%] w-[56.09%] top-[64.57%] right-[5.75%] bottom-[23.43%] left-[38.16%]">
//               <div className="absolute top-[0%] left-[0%] leading-[20px] text-white font-medium">
//                 Status
//               </div>
//               <div className="absolute h-[85.71%] w-[62.5%] top-[14.29%] right-[0%] bottom-[0%] left-[37.5%] rounded-10xs bg-white box-border border-[1px] border-solid border-gray-100" />
//               <div className="absolute top-[9.52%] left-[45.19%] text-xs font-medium text-left">
//                 Inprogress
//               </div>
//             </div>
//             <div className="absolute h-[37.71%] w-[21.26%] top-[32%] right-[73.91%] bottom-[30.29%] left-[4.83%] text-left text-sm">
//               <div className="absolute h-[45.45%] w-[40.54%] top-[54.55%] right-[29.46%] bottom-[0%] left-[30%]">
//                 <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-50% bg-yellowgreen box-border border-[1px] border-dashed border-white" />
//                 <div className="absolute top-[16.67%] left-[13.33%] text-white font-medium">
//                   MB
//                 </div>
//               </div>
//               <div className="absolute top-[0%] left-[0%] text-base leading-[20px] text-white font-medium text-center">
//                 Assignee
//               </div>
//             </div>
//             <div className="absolute h-[11.43%] w-[62.99%] top-[30.29%] right-[5.75%] bottom-[58.29%] left-[31.26%]">
//               <div className="absolute top-[0%] left-[0%] leading-[20px] text-white font-medium">
//                 Task Code
//               </div>
//               <div className="absolute h-[90%] w-[55.66%] top-[5%] right-[0%] bottom-[5%] left-[44.34%] rounded-10xs bg-white box-border border-[1px] border-solid border-gray-100" />
//               <div className="absolute top-[10%] left-[49.82%] text-xs font-medium text-left">
//                 Code-836
//               </div>
//             </div>
//             </CardContent>
//               </div>
//               </Box>
//       </Slide>
//       <Slide index={2}>
//         <Box >
//               <div  className='slide3'> 
//             <CardContent>
//             <div className="absolute top-4% left-25% w-[92%] h-[20%] md:top-[4%] md:right-[6%] md:bottom-[75%] md:left-[2%]">
//             <div className="absolute top-0 leading-[20px] font-medium">
//               Task Name
//             </div>
//             <div className="absolute top-[9%] right-0 bottom-0 left-[32%] w-[85%] h-[90%] md:top-[9%] md:left-[32%] md:w-[65%] md:h-[90%] rounded-10xs bg-white border border-solid border-gray-100" />
//             <div className="absolute top-[30%] left-[38%] w-[57%] h-[55%] md:top-[30%] md:left-[38%] md:w-[57%] md:h-[55%] text-xs leading-[15px] font-medium text-left flex items-center">
//               Chapter 1: Intro BGMG847-DISSERTATION
//             </div>
//             </div>
//             <div className="absolute h-[11.43%] w-[55.81%] top-[47.43%] right-[5.75%] bottom-[41.14%] left-[38.45%]">
//               <div className="absolute top-[0%] left-[0%] leading-[20px] font-medium">
//                 Owner
//               </div>
//               <div className="absolute h-[90%] w-[62.82%] top-[5%] right-[0%] bottom-[5%] left-[37.18%] rounded-10xs bg-white box-border border-[1px] border-solid border-gray-100" />
//               <div className="absolute top-[5%] left-[44.9%] text-xs font-medium">
//                 Zubair
//               </div>
//             </div>
//             <div className="absolute h-[12%] w-[56.09%] top-[64.57%] right-[5.75%] bottom-[23.43%] left-[38.16%]">
//               <div className="absolute top-[0%] left-[0%] leading-[20px] font-medium">
//                 Status
//               </div>
//               <div className="absolute h-[85.71%] w-[62.5%] top-[14.29%] right-[0%] bottom-[0%] left-[37.5%] rounded-10xs bg-white box-border border-[1px] border-solid border-gray-100" />
//               <div className="absolute top-[9.52%] left-[45.19%] text-xs font-medium text-left">
//                 Inprogress
//               </div>
//             </div>
//             <div className="absolute h-[37.71%] w-[21.26%] top-[32%] right-[73.91%] bottom-[30.29%] left-[4.83%] text-left text-sm">
//               <div className="absolute h-[45.45%] w-[40.54%] top-[54.55%] right-[29.46%] bottom-[0%] left-[30%]">
//                 <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-50% bg-yellowgreen box-border border-[1px] border-dashed border-black" />
//                 <div className="absolute top-[16.67%] left-[13.33%] font-medium">
//                   MB
//                 </div>
//               </div>
//               <div className="absolute top-[0%] left-[0%] text-base leading-[20px] font-medium text-center">
//                 Assignee
//               </div>
//             </div>
//             <div className="absolute h-[11.43%] w-[62.99%] top-[30.29%] right-[5.75%] bottom-[58.29%] left-[31.26%]">
//               <div className="absolute top-[0%] left-[0%] leading-[20px] font-medium">
//                 Task Code
//               </div>
//               <div className="absolute h-[90%] w-[55.66%] top-[5%] right-[0%] bottom-[5%] left-[44.34%] rounded-10xs bg-white box-border border-[1px] border-solid border-gray-100" />
//               <div className="absolute top-[10%] left-[49.82%] text-xs font-medium text-left">
//                 Code-836
//               </div>
//             </div>
//             </CardContent>
//               </div>
//               </Box>
//      </Slide>
//     </Slider>

//     <ButtonBack>Back</ButtonBack>
//     <ButtonNext>Next</ButtonNext>
//    </CarouselProvider>
//   );
// };
// export default Carousel;


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
