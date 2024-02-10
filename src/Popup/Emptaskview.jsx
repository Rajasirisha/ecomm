import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material-next/Divider';
import Typography from '@mui/material/Typography';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function Addtask({ open, onClose , updateTaskTable, selectedRow }) {

  const [taskDetails, setTaskDetails] = useState({
    taskType: "",
    code: "",
    taskDesc: "",
    owner: "",
    wordCount: "",
    start: "",
    end: "",
    
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task details submitted: ", taskDetails);
    onClose(); 
  };

    const [message, setMessage] = useState('');
    const [sentMessages, setSentMessages] = useState([]);
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    const sendMessage = () => {
      if (message.trim() !== '') {
        setSentMessages([...sentMessages, message]);
        setMessage('');
      }
    };

    const deleteMessage = (index) => {
      const updatedMessages = sentMessages.filter((_, i) => i !== index);
      setSentMessages(updatedMessages);
    };
  
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTaskOpen, setDialogTaskOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
};

  const handleSaveClick = () => {
    const newTask = {
      taskType: taskDetails.taskType,
      code: taskDetails.code,
      taskDesc: taskDetails.taskDesc,
      owner: taskDetails.owner,
      wordCount: taskDetails.wordCount,
      start: taskDetails.start,
      end: taskDetails.end,
    };
    setDialogMessage('Changes are saved!');
    setDialogOpen(true);
    onClose();
  };

  const handleDialogTaskClose = () => {
    setDialogTaskOpen(false);
  };

  const handleCancelClick = () => {
    setDialogTaskOpen(true);
  };

  const handleCancelConfirm = () => {
    setDialogTaskOpen(false);
    onClose();
  };

  const handleCancelDeny = () => {
    setDialogTaskOpen(false);
  };


  return (
    <>
    <Dialog
        open={dialogTaskOpen}
        onClose={handleDialogTaskClose}
        sx={{ '& .MuiDialog-paper': { width: '300px', height: '150px', borderRadius: '10px' } }}
      >
        <DialogTitle sx={{ textAlign: 'center' }}>
        Changes not saved!
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          Do you want to discard changes?
        </DialogContent>
        <DialogActions>
          <Button variant="filled" onClick={handleCancelConfirm} sx={{ textTransform: 'none', height: '20px',color: '#fff', backgroundColor: '#173767', borderRadius: '10px', '&:hover': { backgroundColor: 'green', color: '#fff' } }}>
            Yes
          </Button>
          <Button variant="filled" onClick={handleCancelDeny} sx={{ textTransform: 'none', height: '20px',color: '#fff', backgroundColor: '#E2A925', borderRadius: '10px', '&:hover': { backgroundColor: 'red', color: '#fff' } }}>
            No
          </Button>
        </DialogActions>
      </Dialog>

    <Dialog open={open} onClose={onClose}
    sx={{ '& .MuiDialog-paper': { width: '950px', height: '950px', borderRadius: '20px' } }}>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
         <img className='rounded ' 
          style={{ width: '70px', height: '30px' }} 
          src="menulogo.png" 
          alt="logo" />
     
       <CancelRoundedIcon onClick={handleCancelClick} sx={{color: '#173767',  cursor: 'pointer'}}/>
        </DialogTitle>
      <Divider sx={{ marginTop: '-10px' }}/>
      
      <DialogContent sx={{fontSize: '12px', fontStyle: 'semibold', fontFamily: 'Poppins',}}>
      
      <form onSubmit={handleSubmit}>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '5px' }}>
        <Typography style={{ fontSize: '12px' }} gutterBottom>
            Task Type : </Typography>
            <div style={{ marginLeft: '10px' }}>
            <Select
        value={taskDetails.taskType || ''}
        onChange={(event) => handleChange(event)}
        displayEmpty
        inputProps={{ 'aria-label': 'Task Type', id: 'taskType', name: 'taskType' }}
        style={{ minWidth: '130px', maxHeight: '25px', alignment: 'Center', fontSize: '14px', borderRadius: '5px' }}
        renderValue={(selected) => (!selected ? 'Select' : selected)}
        >
        <MenuItem value="Assignment" sx={{ fontSize: '14px' }}>Assignment</MenuItem>
        <MenuItem value="Dissertation" sx={{ fontSize: '14px' }}>Dissertation</MenuItem>
        </Select>
        </div>
        </div>

        <Grid container spacing={7}>
        <Grid item xs={12} sm={6}>
        <div style={{ display: 'flex' , flexDirection: 'column', padding: '5px'}}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <Typography style={{ fontSize: '12px' }} gutterBottom>
           Task Code : </Typography>
            <Box style={{ width: '150px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '5px' }} >{taskDetails.code}</Box>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <Typography style={{ fontSize: '12px' }} gutterBottom>
            Owner : </Typography>
            <Box style={{ width: '150px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '5px' }} >{taskDetails.owner}</Box>
        </div>
       
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <Typography style={{ fontSize: '12px' }} gutterBottom>
            Start Date : </Typography>
            <Box style={{ width: '150px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '5px' }} >{taskDetails.start}</Box>
        </div>
        </div>
        </Grid>

        <Grid item xs={12} sm={6}>
        <div style={{ display: 'flex' , flexDirection: 'column', padding: '5px'}}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <Typography style={{ fontSize: '12px' }} gutterBottom>
            Description : </Typography>
            <Box style={{ width: '150px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '5px' }} >{taskDetails.taskDesc}</Box>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <Typography style={{ fontSize: '12px' }} gutterBottom>
            Word Count : </Typography>
            <input
            type="count"
            id="wordCount"
            name="wordCount"
            value={taskDetails.wordCount}
            placeholder="Enter count"
            onChange={handleChange}
            style={{ width: '150px',  outline: 'none',
                    height: '25px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '5px', 
                    padding: '2px',
                    }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <Typography style={{ fontSize: '12px' }} gutterBottom>
            End Date : </Typography>
            <Box style={{ width: '150px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '5px' }} >{taskDetails.end}</Box>
        </div>
        </div>
        </Grid>
        </Grid>

        <div style={{ border: '1px solid #B3B3B3', borderRadius: '10px 10px 0 0', padding: '10px', marginTop: '10px', height: '150px', width: '550px' }}>
        {sentMessages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: '1' }}>{msg}</div>
            <DeleteForeverRoundedIcon
              sx={{ color: '#173767', cursor: 'pointer', '&:hover': { color: '#E2A925' } }}
              onClick={() => deleteMessage(index)}
            />
          </div>
        ))}
      </div>
        <div style={{display: 'flex',alignItems: 'center', justifyContent: 'space-between', border: '1px solid #B3B3B3', borderRadius: '0 0 10px 10px', height: '30px', width: '550px' }}>
      <input
      type="text"
      value={message}
      onChange={handleMessageChange}
      style={{ border: 'none', outline: 'none', padding: '2px', borderRadius: '10px 0 0 10px', }}
      placeholder="Type a message..."
    />
      <SendRoundedIcon variant="contained"
      onClick={sendMessage}
      sx={{cursor: 'pointer', 
        color: '#173767',
        height: '30px',
        transform: 'rotate(-45deg)',
        '&:hover': {
          color: '#E2A925',
        },
      }}
    />
  </div>

      </form>
      </DialogContent>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '15px' }}>
      <Button component="label" variant="contained" startIcon={<AttachmentIcon sx={{transform: 'rotate(-45deg)'}}/>}
      sx={{color: '#000000', backgroundColor: '#fff', height: '30px',
      textTransform: 'none', borderRadius: '10px',
      '&:hover': {
       backgroundColor: '#B3B3B3',
       color: '#000000',
       }, }}>
         Upload file or Browser
     <VisuallyHiddenInput type="file" />
     </Button>
     </div>

      <DialogActions>
        <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#E2A925',
           color: '#fff',
           }, }} onClick={handleSaveClick}>
            Save</Button>
        <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#E2A925',
           color: '#fff',
           }, }} onClick={handleCancelClick}
        > Close</Button>
      </DialogActions>
    </Dialog>
    <Dialog open={dialogOpen} onClose={handleDialogClose} sx={{ '& .MuiDialog-paper': { width: '300px', height: '150px', borderRadius: '10px' } }}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end',}}>
        <CancelRoundedIcon onClick={handleDialogClose} sx={{ color: '#173767',  cursor: 'pointer'}}/>
          </DialogTitle>
        <DialogContent sx={{ textAlign: 'center'}}>{dialogMessage}
          </DialogContent>
      </Dialog>
      </>
  );
}
