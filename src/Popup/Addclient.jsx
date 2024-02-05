import React, { useState, useRef } from 'react';
import { Grid, Box, Stack, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider} from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CancelIcon from '@mui/icons-material/Cancel';
import TaskIcon from '@mui/icons-material/Task';

export default function Addclient({ open, onClose, onAddClient }) {

    const [clientDetails, setClientDetails] = useState({
        name: "",
        id: "",
        position: "",
        email: "",
        phone: "",
        alternate: "",
        address: "",
        image: '',
      });

      const [dialogOpen, setDialogOpen] = useState(false);
      const handleDialogClose = () => {
        setDialogOpen(false);
      };

      const handleAddClient = () => {
        setDialogOpen(true);
        onAddClient(clientDetails);
        onClose();
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Client details submitted: ", clientDetails);
        onClose(); 
      };
     
      const handleImageChange = (e) => {
        const file = e.target.files[0];
      
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setClientDetails({
              ...clientDetails,
              image: event.target.result,
            });
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleCancelImage = () => {
        setClientDetails({ ...clientDetails, image: '' });
      };
    
      const fileInputRef = useRef(null);
    
      const handleCameraClick = () => {
        fileInputRef.current.click();
      };

      const [tableData, setTableData] = useState([
        { taskName: '', refereeName: '', date: '', university: '' },
        { taskName: '', refereeName: '', date: '', university: '' },
        { taskName: '', refereeName: '', date: '', university: '' },
        { taskName: '', refereeName: '', date: '', university: '' },
        { taskName: '', refereeName: '', date: '', university: '' },
      ]);
    
      const handleCellChange = (value, rowIndex, columnName) => {
        const updatedData = tableData.map((row, index) => {
          if (index === rowIndex) {
            return { ...row, [columnName]: value };
          }
          return row;
        });
        setTableData(updatedData);
      };
    
  return (
    <>
    <Dialog open={open} onClose={onClose} sx={{ '& .MuiDialog-paper': { width: '950px', height: '950px', borderRadius: '20px' } }}>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img className='rounded ' 
          style={{ width: '70px', height: '30px' }} 
          src="menulogo.png" 
          alt="logo" />
        Client Details
       <CancelRoundedIcon onClick={onClose} sx={{color: '#173767',  cursor: 'pointer'}}/>
        </DialogTitle>
      <Divider sx={{ marginTop: '-10px' }}/>
      
      <DialogContent sx={{ fontSize: '12px', fontStyle: 'semibold', fontFamily: 'Poppins' }}>
        <form onSubmit={handleSubmit}>
        
        <Stack spacing={1} direction="row">
        <Grid item xs={4}>
        <Card sx={{display: 'flex', alignItems: 'center', width: '140px', height: 160, border: '1px solid #B3B3B3', borderRadius: '5px',}}>
        <CardContent>
                <div
                  style={{
                    position: 'relative',
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px dashed #B3B3B3',
                    cursor: 'pointer',
                  }}
                  onClick={handleCameraClick}
                >
                    {clientDetails.image && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '8px',
                          cursor: 'pointer',
                          background: '#fff',
                          borderRadius: '50%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '20px',
                          height: '20px',
                          zIndex: '1',
                        }}
                        onClick={handleCancelImage}
                      >
                        <CancelIcon style={{ fontSize: 15, color: 'Red' }} />
                      </div>
                    )}
                    <img
                      src={clientDetails.image || 'placeholder.png'}
                      alt=""
                      style={{ width: '110px', height: '110px' }}
                    />
                    {!clientDetails.image && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: '1',
                          cursor: 'pointer',
                        }}
                      >
                        <PhotoCameraIcon
                        style={{ fontSize: 60, color: '#E2A925' }} />
                      </div>
                    )}
                     <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          width: '110px',
                          height: '110px',
                          opacity: '0',
                          cursor: 'pointer',
                        }}
                        ref={fileInputRef}
                      />
                    </div>
              </CardContent>
            </Card>
            </Grid>

            <Grid item xs={11}>
        <Card sx={{display: 'flex', alignItems: 'center', width: '100%', height: 160, border: '1px solid #B3B3B3', borderRadius: '5px',}}>
        <CardContent >
        <Grid item >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <label htmlFor="name">Client Name :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={clientDetails.name}
                  placeholder="Enter client name"
                  onChange={(e) => setClientDetails({ ...clientDetails, name: e.target.value })}
                  style={{outline: 'none', width: '120px' ,  margin: '5px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
             
                <div>
                <label htmlFor="id">Client ID :</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={clientDetails.id}
                  placeholder="Enter client ID"
                  onChange={(e) => setClientDetails({ ...clientDetails, id: e.target.value })}
                  style={{ width: '100px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
              
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                <label htmlFor="position">Position :</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={clientDetails.position}
                  placeholder="Enter position"
                  onChange={(e) => setClientDetails({ ...clientDetails, position: e.target.value })}
                  style={{ width: '100px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                <div>
                <label htmlFor="email">Email ID :</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={clientDetails.email}
                  placeholder="exp@gmail.com"
                  onChange={(e) => setClientDetails({ ...clientDetails, email: e.target.value })}
                  style={{  width: '140px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
              
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                <label htmlFor="phone">Phone No : </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={clientDetails.phone}
                  placeholder="9999999999"
                  onChange={(e) => setClientDetails({ ...clientDetails, phone: e.target.value })}
                  style={{ width: '100px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
             
                <div>
                <label htmlFor="alternate">Alternate No : </label>
                <input
                  type="number"
                  id="alternate"
                  name="alternate"
                  value={clientDetails.alternate}
                  placeholder="9999999999"
                  onChange={(e) => setClientDetails({ ...clientDetails, alternate: e.target.value })}
                  style={{ width: '100px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
              
                <div>
                <label htmlFor="address">Address : </label>
                <input
                  type="address"
                  id="address"
                  name="address"
                  value={clientDetails.address}
                  placeholder="Enter address"
                  onChange={(e) => setClientDetails({ ...clientDetails, address: e.target.value })}
                  style={{  width: '310px' , outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                
              </div>
              </Grid>
            </CardContent>
            </Card>
            </Grid>
            </Stack>

            <Box height={20} />
            <Grid item xs={12}>
          <Card sx={{ width: 550, height: 250, border: '1px solid #B3B3B3', borderRadius: '5px' }}>
          <CardContent>
          <div>
            <label style={{ fontSize: '16px', fontWeight: 600 }}>Reference Details</label>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', tableLayout: 'fixed', borderCollapse: 'collapse' }}>
                <colgroup>
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '30%' }} />
                </colgroup>
              <thead style={{ backgroundColor: '#173767', color: 'white' }}>
                <tr>
                  <th style={{ border: '1px solid white', padding: '4px' }}>Task Name</th>
                  <th style={{ border: '1px solid white', padding: '4px' }}>Referee/Referrer Name</th>
                  <th style={{ border: '1px solid white', padding: '4px' }}>Date</th>
                  <th style={{ border: '1px solid white', padding: '4px' }}>University</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((rowData, rowIndex) => (
                  <tr key={rowIndex}>
                    <td style={{ border: '1px solid #B3B3B3', padding: '4px' }}>
                      <input
                        type="text"
                        value={rowData.taskName}
                        onChange={(e) => handleCellChange(e.target.value, rowIndex, 'taskName')}
                        style={{ width: '100%', outline: 'none' }}
                      />
                    </td>
                    <td style={{ border: '1px solid #B3B3B3', padding: '4px' }}>
                      <input
                        type="text"
                        value={rowData.refereeName}
                        onChange={(e) => handleCellChange(e.target.value, rowIndex, 'refereeName')}
                        style={{ width: '100%', outline: 'none' }}
                      />
                    </td>
                    <td style={{ border: '1px solid #B3B3B3', padding: '4px' }}>
                      <input
                        type="date"
                        value={rowData.date}
                        onChange={(e) => handleCellChange(e.target.value, rowIndex, 'date')}
                        style={{ width: '100%', outline: 'none' }}
                      />
                    </td>
                    <td style={{ border: '1px solid #B3B3B3', padding: '4px' }}>
                      <input
                        type="text"
                        value={rowData.university}
                        onChange={(e) => handleCellChange(e.target.value, rowIndex, 'university')}
                        style={{ width: '100%', outline: 'none' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </CardContent>
      </Card>
    </Grid>
          <DialogActions>
          <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#173767',
           color: '#E2A925',
           }, }} onClick={handleAddClient}>Add Client</Button>
        <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#E2A925', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#E2A925',
           color: '#000000',
           }, }} onClick={onClose}>Cancel</Button>
      </DialogActions>
        </form>
      </DialogContent>
    </Dialog>

    <Dialog
    open={dialogOpen}
    onClose={handleDialogClose}
    sx={{ '& .MuiDialog-paper': { width: '300px', height: '180px', borderRadius: '10px' } }}
  >
    <DialogContent sx={{ display: 'flex', flexDirection: 'column' , alignItems: 'center', textAlign: 'center' }}>
    <TaskIcon sx={{ color: '#E2A925', fontSize: '70px'}}/>
      Client details added successfully
    </DialogContent>
  </Dialog>
  </>
  );
}
