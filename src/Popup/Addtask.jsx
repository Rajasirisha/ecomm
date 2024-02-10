import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material-next/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Grid from '@mui/material/Grid';

export default function Addtask({ open, onClose , updateTaskTable }) {

    const currencies = [
  {
    value: 'INR',
    label: '₹',
  },
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const [paymentDetails, setPaymentDetails] = useState({
  currencie: 'INR',
  amount: '',
});

  const [taskDetails, setTaskDetails] = useState({
    taskType: "",
    code: "",
    taskName: "",
    owner: "",
    reviewer: "",
    wordCount: "",
    client: "",
    clientNumber: "",
    payment: "",
    paid: "",
    balance: "",
    university: "",
    email: "",
    password: "",
    start: "",
    end: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    if (name === 'payment') {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        amount: value,
      }));
    } else if (name === 'currency') {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        currencie: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task details submitted: ", taskDetails);
    onClose(); 
  };

  const [anchorElOwner, setAnchorElOwner] = useState(null);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [avatarLettersOwner, setAvatarLettersOwner] = useState('');

  const handleOwnerAvatarClick = (event, letters) => {
    setAvatarLettersOwner(letters);
    setAnchorElOwner(event.currentTarget);
  };

  const handleCloseOwnerMenu = (name, letters) => {
    setAnchorElOwner(null);
    setAvatarLettersOwner(letters);
    setSelectedOwner(name === selectedOwner ? null : name);
  };

  const [anchorElReviewer, setAnchorElReviewer] = useState(null);
  const [selectedReviewer, setSelectedReviewer] = useState(null);
  const [avatarLettersReviewer, setAvatarLettersReviewer] = useState('');

  const handleReviewerAvatarClick = (event, letters) => {
    setAvatarLettersReviewer(letters);
    setAnchorElReviewer(event.currentTarget);
  };

  const handleCloseReviewerMenu = (name, letters) => {
    setAnchorElReviewer(null);
    setAvatarLettersReviewer(letters);
    setSelectedReviewer(name === selectedReviewer ? null : name);
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

  const handleAssignClick = () => {
    const newTask = {
      taskType: taskDetails.taskType,
      code: taskDetails.code,
      taskName: taskDetails.taskName,
      owner: selectedOwner,
      reviewer: selectedReviewer,
      wordCount: taskDetails.wordCount,
      client: taskDetails.client,
      clientNumber: taskDetails.clientNumber,
      payment: taskDetails.payment,
      paid: taskDetails.paid,
      balance: taskDetails.balance,
      university: taskDetails.university,
      email: taskDetails.email,
      password: taskDetails.password,
      start: taskDetails.start,
      end: taskDetails.end,
    };

    updateTaskTable(newTask);
    setDialogMessage('Task assigned to the "Assignee Name"');
    setDialogOpen(true);
    onClose();
  };

  const handleSaveClick = () => {
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
        Add Task        
       <CancelRoundedIcon onClick={handleCancelClick} sx={{color: '#173767',  cursor: 'pointer'}}/>
        </DialogTitle>
      <Divider sx={{ marginTop: '-10px' }}/>
      
      <DialogContent sx={{fontSize: '14px', fontStyle: 'semibold', fontFamily: 'Poppins',}}>
      
      <form onSubmit={handleSubmit}>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px' }}>
          <div>
        <label htmlFor="type" >Task Type : </label>
        <Select
        value={taskDetails.taskType || ''}
        onChange={(event) => handleChange(event)}
        displayEmpty
        inputProps={{ 'aria-label': 'Task Type', id: 'taskType', name: 'taskType' }}
        style={{ minWidth: '130px', maxHeight: '30px', alignment: 'Center', fontSize: '14px', borderRadius: '10px' }}
        renderValue={(selected) => (!selected ? 'Select' : selected)}
        >
        <MenuItem value="Assignment" sx={{ fontSize: '14px' }}>Assignment</MenuItem>
        <MenuItem value="Dissertation" sx={{ fontSize: '14px' }}>Dissertation</MenuItem>
        </Select>
        </div>
        <div>
          <Button variant='filled' 
          sx={{color: '#fff', backgroundColor: '#173767',height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#E2A925',
           color: '#fff',
           }, }} 
          onClick={onClose}>Select Writer</Button>
        </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px' }}>
        <div>
          <label htmlFor="code">Task Code : </label>
          <input
            type="text"
            id="code"
            name="code"
            value={taskDetails.code}
            placeholder="Enter code"
            onChange={handleChange}
             style={{ width: '100px', outline: 'none',
                    height: '30px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '10px',
                    padding: '2px',
                    }}
          />
        </div>
        <div>
          <label htmlFor="taskName">Task Name : </label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            value={taskDetails.taskName}
            placeholder="Enter task name"
            onChange={handleChange}
            style={{ width: '180px',  outline: 'none',
                    height: '30px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '10px', 
                    padding: '2px',
                    }}
          />
        </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <label htmlFor="owner">Owner : </label>
        
        {selectedOwner ? (
              <Stack direction="row" spacing={2} alignItems="center" onClick={handleOwnerAvatarClick} 
              sx={{ width: '90px', maxWidth: '90px', maxHeight: '30px', height: '30px',
               alignment: 'Center', fontSize: '12px', borderRadius: '10px',
                backgroundColor: '#B3B3B3', color: '#173767', cursor: 'pointer' }}>
                <Avatar sx={{ width: 24, height: 24, bgcolor: '#173767', fontSize: '14px' }}>
                  {selectedOwner[0]}
                </Avatar>
                {selectedOwner}
              </Stack>
            ) : (
              <AccountCircleIcon
                sx={{ color: '#173767','&:hover': { color: '#E2A925' }, cursor: 'pointer' }}
                onClick={handleOwnerAvatarClick}
              />
            )}
            <Menu anchorEl={anchorElOwner} open={Boolean(anchorElOwner)} 
            onClose={() => handleCloseOwnerMenu(selectedOwner, avatarLettersOwner)}>
              <MenuItem onClick={() => handleCloseOwnerMenu('Zubair')} sx={{ fontSize: '12px' }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ width: 24, height: 24, fontSize: '14px', bgcolor: '#FF6347' }}>Z</Avatar>
                  Zubair
                </Stack>
              </MenuItem>
              <MenuItem onClick={() => handleCloseOwnerMenu('A Khalique')} sx={{ fontSize: '12px' }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ width: 24, height: 24, fontSize: '14px', bgcolor: 'limegreen' }}>AK</Avatar>
                  Abdul Khalique
                </Stack>
              </MenuItem>
              <MenuItem onClick={() => handleCloseOwnerMenu('Kayal')} sx={{ fontSize: '12px' }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ width: 24, height: 24, fontSize: '14px', bgcolor: '#4682B4' }}>KV</Avatar>
                  Kayal Vizhi
                </Stack>
              </MenuItem>
            </Menu>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <label htmlFor="reviewer" >Reviewer : </label>
        {selectedReviewer ? (
        <Stack direction="row" spacing={2} alignItems="center" onClick={(e) => handleReviewerAvatarClick(e, avatarLettersReviewer)}>
          <Avatar sx={{ width: 24, height: 24, bgcolor: '#173767', marginRight: '8px',fontSize: '14px' }}>{avatarLettersReviewer}</Avatar>
        </Stack>
      ) : (
        <div onClick={(e) => handleReviewerAvatarClick(e, '')}>
        <PersonAddAltRoundedIcon
          sx={{ color: '#173767','&:hover': { color: '#E2A925' }, cursor: 'pointer' }}
        />
        </div>
      )}

      <Menu anchorEl={anchorElReviewer} open={Boolean(anchorElReviewer)} 
      onClose={() => handleCloseReviewerMenu(selectedReviewer, avatarLettersReviewer)}>
      
      <MenuItem onClick={() => handleCloseReviewerMenu('Abdul Khalique', 'AK')}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 24, height: 24, bgcolor: '#7FD046', fontSize: '14px' }}>AK</Avatar>
            Abdul Khalique
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => handleCloseReviewerMenu('Kayal Vizhi', 'KV')}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 24, height: 24, bgcolor: '#2591CC', fontSize: '14px' }}>KV</Avatar>
            Kayal Vizhi
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => handleCloseReviewerMenu('Madhu Bala', 'MB')}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 24, height: 24, bgcolor: '#FF6347', fontSize: '14px' }}>MB</Avatar>
            Madhu Bala
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => handleCloseReviewerMenu('Rahul', 'R')}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 24, height: 24, bgcolor: '#FFD700', fontSize: '14px' }}>R</Avatar>
            Rahul
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => handleCloseReviewerMenu('Mariyam', 'M')}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 24, height: 24, bgcolor: '#FFB000', fontSize: '14px' }}>M</Avatar>
            Mariyam
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => handleCloseReviewerMenu('Jafreen', 'J')}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 24, height: 24, bgcolor: '#ED4B4B', fontSize: '14px' }}>J</Avatar>
            Jafreen
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => handleCloseReviewerMenu('Antara', 'A')}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ width: 24, height: 24, bgcolor: '#00BA61', fontSize: '14px' }}>A</Avatar>
            Antara
          </Stack>
        </MenuItem>
      </Menu>
        <Select
        value={taskDetails.reviewer || ''}
        onChange={(event) => handleChange(event)}
        displayEmpty
        inputProps={{ 'aria-label': 'Reviewer', id: 'reviewer', name: 'reviewer' }}
        style={{width: '100px', maxWidth: '100px', maxHeight: '30px', alignment: 'Center', fontSize: '12px', borderRadius: '10px', backgroundColor: '#B3B3B3', color: '#173767' }}
        renderValue={(selected) => (!selected ? 'Status' : selected)}
        >
        <MenuItem value="Status" sx={{ fontSize: '14px' }}>Status</MenuItem>
        <MenuItem value="Not Started" sx={{ fontSize: '14px' }}>Not Started</MenuItem>
        <MenuItem value="In Progress" sx={{ fontSize: '14px' }}>In Progress</MenuItem>
        <MenuItem value="Pending Review" sx={{ fontSize: '14px' }}>Pending Review</MenuItem>
        <MenuItem value="Review Complet" sx={{ fontSize: '14px' }}>Review Complete</MenuItem>
        <MenuItem value="Approved" sx={{ fontSize: '14px' }}>Approved</MenuItem>
        <MenuItem value="On Hold" sx={{ fontSize: '14px' }}>On Hold</MenuItem>
        <MenuItem value="Canceled" sx={{ fontSize: '14px' }}>Canceled</MenuItem>
        </Select>
        </div>

        <div>
          <label htmlFor="wordCount">Word Count : </label>
          <input
            type="number"
            id="wordCount"
            name="wordCount"
            value={taskDetails.wordCount}
            placeholder="Enter count"
            onChange={handleChange}
            style={{ width: '100px',  outline: 'none',
                    height: '30px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '10px', 
                    padding: '2px',
                    }}
          />
        </div>
        </div>

        <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
        <div style={{ display: 'flex' , flexDirection: 'column', padding: '2px'}}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
          <label htmlFor="client" >Client : </label>
          <input
            type="text"
            id="client"
            name="client"
            value={taskDetails.client}
            placeholder="Enter name"
            onChange={handleChange}
            style={{ width: '150px',  outline: 'none',
                    height: '30px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '10px', 
                    padding: '2px',
                    }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px'}}>
        <label htmlFor="clientNumber" >Client Number : </label>
          <input
            type="text"
            id="clientNumber"
            name="clientNumber"
            value={taskDetails.clientNumber}
            placeholder="Enter number"
            onChange={handleChange}
            style={{ width: '150px',  outline: 'none',
                    height: '30px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '10px', 
                    padding: '2px',
                    }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <label htmlFor="university">University Name : </label>
          <input
            type="text"
            id="university"
            name="university"
            value={taskDetails.university}
            placeholder="Enter university"
            onChange={handleChange}
            style={{ width: '150px',  outline: 'none',
                    height: '30px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '10px', 
                    padding: '2px',
                    }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <label htmlFor="email" >Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            value={taskDetails.email}
            placeholder="exp@gmail.com"
            onChange={handleChange}
            style={{ width: '180px',  outline: 'none',
                    height: '30px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '10px', 
                    padding: '2px',
                    }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <label htmlFor="password" >Password : </label>
          <input
            type="text"
            id="password"
            name="password"
            value={taskDetails.password}
            placeholder="password"
            onChange={handleChange}
            style={{ width: '150px', outline: 'none',
                    height: '30px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '10px', 
                    padding: '2px',
                    }}
          />
        </div>
        </div>
        </Grid>
        
        <Grid item xs={12} sm={6}>
        <div style={{ display: 'flex' , flexDirection: 'column', padding: '2px'}}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <label htmlFor="payment">Payment Amount : </label>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Select
        value={paymentDetails.currency}
        onChange={(e) => handleChange(e)}
        style={{ maxWidth: '50px', width: '40px', height: '30px', borderRadius: '10px 0 0 10px',  outline: 'none' }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <input
        type="number"
        id="payment"
        name="payment"
        value={taskDetails.payment}
        placeholder="0000"
        onChange={handleChange}
        style={{ width: '90px',
                    height: '30px',  outline: 'none',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '0 10px 10px 0', 
                    padding: '2px',
                    }}
            /> 
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <label htmlFor="paid">Amount Paid : </label>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Select
        value={paymentDetails.currency}
        onChange={(e) => handleChange(e)}
        style={{ maxWidth: '50px', width: '40px', height: '30px', borderRadius: '10px 0 0 10px',  outline: 'none', }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <input
        type="number"
        id="paid"
        name="paid"
        value={taskDetails.paid}
        placeholder="0000"
        onChange={handleChange}
        style={{ width: '90px',
                    height: '30px',  outline: 'none',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '0 10px 10px 0', 
                    padding: '2px',
                    }}
      />
      </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <label htmlFor="balance">Balance Amount : </label>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Select
        value={paymentDetails.currency}
        onChange={(e) => handleChange(e)}
        style={{ maxWidth: '50px', width: '40px', height: '30px', borderRadius: '10px 0 0 10px', outline: 'none', }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <input
        type="number"
        id="balance"
        name="balance"
        value={taskDetails.balance}
        placeholder="0000"
        onChange={handleChange}
        style={{ width: '90px',  outline: 'none',
                    height: '30px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '0 10px 10px 0', 
                    padding: '2px',
                    }}
      />
      </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <label htmlFor="start">Start Date : </label>
          <input
            type="date"
            id="start"
            name="start"
            value={taskDetails.start}
            placeholder="DD-MM-YYYY"
            onChange={handleChange}
            style={{ width: '130px',  outline: 'none',
                    height: '30px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '10px', 
                    padding: '2px',
                    }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px' }}>
        <label htmlFor="end">End Date : </label>
          <input
            type="date"
            id="end"
            name="end"
            value={taskDetails.end}
            placeholder="DD-MM-YYYY"
            onChange={handleChange}
            style={{ width: '130px', outline: 'none',
                    height: '30px',
                    border: '1px solid #B3B3B3', 
                    borderRadius: '10px', 
                    padding: '2px',
                    }}
          />
        </div>
        </div>
        </Grid>
        </Grid>

        <div style={{ border: '1px solid #B3B3B3', borderRadius: '10px 10px 0 0', padding: '10px', marginTop: '10px', height: '80px', width: '550px' }}>
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
           }, }} onClick={handleAssignClick}>
            Assigne</Button>
        <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: 'green', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: 'limegreen',
           color: '#fff',
           }, }} onClick={handleSaveClick}
        > Save</Button>
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
