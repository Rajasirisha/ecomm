import React, { useState } from 'react';
import { Box, Button, Modal, Typography, TextField } from '@mui/material';

const Loginpopup = ({ open, handleClose, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      handleLogin();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 300 }}>
        <Typography id="login-modal-title" variant="h6" component="h2" gutterBottom>
          Welcome to Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            margin="normal"
            sx={{textcolor: '#FFFFFF'}}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
          />
          <Button type="submit" variant="filled" 
          sx={{ mt: 2, backgroundColor: '#b98259', color: '#FFFFFF', '&:hover': {backgroundColor: '#b98200', color: '#FFFFFF'} }}>
            Login
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default Loginpopup;
