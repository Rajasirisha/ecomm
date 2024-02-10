import React, { useState, useRef } from 'react';
import { Grid, Box, Stack, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, Button, Divider} from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CancelIcon from '@mui/icons-material/Cancel';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { styled } from '@mui/material/styles';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function FreeProfilePage({ isOpen, onClose, onFreeProfilePage }) {

    const [profileDetails, setProfileDetails] = useState({
        name: "",
        id: "",
        email: "",
        position: "",
        phone: "",
        address: "",
        image: "",
        onboarding: "",
        worked: "",
        expertise: "",
      });

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Freelancer Profile details submitted: ", profileDetails);
        onClose(); 
      };
     
      const handleImageChange = (e) => {
        const file = e.target.files[0];
      
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setProfileDetails({
              ...profileDetails,
              image: event.target.result,
            });
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleCancelImage = () => {
        setProfileDetails({ ...profileDetails, image: '' });
      };
    
      const fileInputRef = useRef(null);
    
      const handleCameraClick = () => {
        fileInputRef.current.click();
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

      const [skills, setSkills] = useState(['']);

      const handleAddSkill = (e) => {
        e.preventDefault();
        setSkills([...skills, '']);
      };
    
      const handleSkillChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = value;
        setSkills(updatedSkills);
      };

       const handleDeleteSkill = (e, index) => {
         e.preventDefault();
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const handleSaveConfirmed = () => {
    onFreeProfilePage(profileDetails);
    onClose();
    setConfirmationDialogOpen(false);
  };

  const handleSaveCanceled = () => {
    setConfirmationDialogOpen(false);
  };
    
  return (
    <Dialog
    open={isOpen}
    onClose={onClose}
    maxWidth="md"
    fullWidth
    sx={{
      '& .MuiDialog-paper': {
        width: '90%',
        maxWidth: '600px',
        margin: 'auto',
        borderRadius: '20px'
      },
    }}
  >
    <Dialog open={confirmationDialogOpen} onClose={handleSaveCanceled}
  sx={{ '& .MuiDialog-paper': { width: '300px', height: '180px', borderRadius: '10px' } }}
>
  <DialogTitle sx={{ textAlign: 'center' }}>Save Changes</DialogTitle>
  <DialogContent sx={{ textAlign: 'center' }}>
     Do you want to save the profile details?
  </DialogContent>
  <DialogActions>
  <Button variant="filled" onClick={handleSaveConfirmed}
    sx={{color: '#fff', backgroundColor: '#173767', height: '20px',
    textTransform: 'none', borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'green',
      color: '#fff',
      },}} autoFocus>
      Yes
    </Button>
    <Button variant="filled" onClick={handleSaveCanceled}
     sx={{color: '#fff', backgroundColor: '#E2A925', height: '20px',
     textTransform: 'none', borderRadius: '10px',
     '&:hover': {
      backgroundColor: 'red',
      color: '#fff',
      },}}>
      No
    </Button>
  </DialogActions>
</Dialog>

      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img className='rounded ' 
          style={{ width: '70px', height: '30px' }} 
          src="menulogo.png" 
          alt="logo" />
        Freelancer Details
       <CancelRoundedIcon onClick={onClose} sx={{color: '#173767',  cursor: 'pointer'}}/>
        </DialogTitle>
      <Divider sx={{ marginTop: '-10px' }}/>
      
      <DialogContent sx={{ fontSize: '12px', fontStyle: 'semibold', fontFamily: 'Poppins' }}>
        <form onSubmit={handleSubmit}>
        
        <Stack spacing={1} direction="row">
        <Grid item xs={4}>
        <Card sx={{display: 'flex', alignItems: 'center', width: '140px', height: 170, border: '1px solid #B3B3B3', borderRadius: '5px',}}>
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
                    {profileDetails.image && (
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
                      src={profileDetails.image || 'placeholder.png'}
                      alt=""
                      style={{ width: '110px', height: '110px' }}
                    />
                    {!profileDetails.image && (
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
        <Card sx={{ width: '100%', height: 170, border: '1px solid #B3B3B3', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <CardContent >
        <Grid item >
            <div>
              <div>
                <label htmlFor="name"> Name :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profileDetails.name}
                  placeholder="Enter Freelancer name"
                  onChange={(e) => setProfileDetails({ ...profileDetails, name: e.target.value })}
                  style={{outline: 'none', width: '120px' , margin: '5px', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                             
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                <label htmlFor="id">Freelancer ID :</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={profileDetails.id}
                  placeholder="Enter ID"
                  onChange={(e) => setProfileDetails({ ...profileDetails, id: e.target.value })}
                  style={{ width: '80px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="phone">Phone No : </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={profileDetails.phone}
                  placeholder="9999999999"
                  onChange={(e) => setProfileDetails({ ...profileDetails, phone: e.target.value })}
                  style={{ width: '100px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div> 

                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                <label htmlFor="expertise">Expertise :</label>
                <input
                  type="text"
                  id="expertise"
                  name="expertise"
                  value={profileDetails.expertise}
                  placeholder="Enter expertise"
                  onChange={(e) => setProfileDetails({ ...profileDetails, expertise: e.target.value })}
                  style={{ width: '100px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>

                <div>
                <label htmlFor="position">Position :</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={profileDetails.position}
                  placeholder="Enter position"
                  onChange={(e) => setProfileDetails({ ...profileDetails, position: e.target.value })}
                  style={{ width: '100px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
              
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                <label htmlFor="email">Email ID :</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={profileDetails.email}
                  placeholder="exp@gmail.com"
                  onChange={(e) => setProfileDetails({ ...profileDetails, email: e.target.value })}
                  style={{  width: '140px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                </div>
                            
                <div>
                <label htmlFor="address">Address : </label>
                <input
                  type="address"
                  id="address"
                  name="address"
                  value={profileDetails.address}
                  placeholder="Enter address"
                  onChange={(e) => setProfileDetails({ ...profileDetails, address: e.target.value })}
                  style={{  width: '300px' , outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                
              </div>
              </Grid>
            </CardContent>
            </Card>
            </Grid>
            </Stack>

            <Box height={10} />
            <Stack spacing={1} direction="row">
                <div>
            <Stack spacing={1} direction="column">
            <Grid item xs={6}>
             <Card sx={{display: 'flex', alignItems: 'center', width: 280, height: 100, border: '1px solid #B3B3B3', borderRadius: '5px' }}>
               <CardContent>
                <div>
                <label style={{ fontSize: '16px', fontWeight: 600 }}>Basic Information</label>
                <div>
                <label htmlFor="onboarding">Onboarding :</label>
                <input
                  type="date"
                  id="onboarding"
                  name="onboarding"
                  value={profileDetails.onboarding}
                  onChange={(e) => setProfileDetails({ ...profileDetails, onboarding: e.target.value })}
                  style={{ width: '100px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>
                <div>
                <label htmlFor="worked">Worked For :</label>
                <input
                  type="experiance"
                  id="worked"
                  name="worked"
                  value={profileDetails.worked}
                  placeholder=" Years, Months"
                  onChange={(e) => setProfileDetails({ ...profileDetails, worked: e.target.value })}
                  style={{ width: '100px' ,  margin: '5px', outline: 'none', height: '25px', border: '1px solid #B3B3B3', borderRadius: '10px', padding: '2px' }}
                />
                </div>           
                </div>
               </CardContent>
             </Card>
            </Grid>

            <Grid item xs={6}>
             <Card sx={{ width: 280, height: 90, border: '1px solid #B3B3B3', borderRadius: '5px', overflowX: 'auto' }}>
               <CardContent>
               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label style={{ fontSize: '16px', fontWeight: 600 }}>Skills</label>
            <button 
              style={{ width: '40px', height: '20px', color: '#fff', background: '#173767', borderRadius: '5px', '&:hover': {
                backgroundColor: '#173767',
                color: '#E2A925',
                },}} 
              onClick={handleAddSkill}>Add</button>
               </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {skills.map((skill, index) => (
                <div key={index}  style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  key={index}
                  type="text"
                  placeholder="Skills"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  style={{ width: '60px', margin: '5px', outline: 'none', height: '20px', border: '1px solid #B3B3B3', borderRadius: '5px', padding: '2px' }}
                />
                <button onClick={(e) => handleDeleteSkill(e, index)}><CancelRoundedIcon style={{ fontSize: '15px', color: 'Red'}}/></button>
                </div>
              ))}
              </div>
                       
               </CardContent>
             </Card>
            </Grid>

            <Grid item xs={6}>
             <Card sx={{ display: 'flex', alignItems: 'center', width: 280, height: 60, border: '1px solid #B3B3B3', borderRadius: '5px' }}>
               <CardContent>
                <div>
            <label style={{ fontSize: '16px', fontWeight: 600 }}>Occupation Information</label>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label style={{ background: '#173767', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '22px', height: '22px' }}>
                <AccessTimeFilledIcon style={{ fontSize: 16, color: '#fff' }} /></label>
                <select type="Select" style={{ margin: '5px', marginRight: '20px', outline: 'none', height: '20px', border: '1px solid #B3B3B3', borderRadius: '5px', padding: '2px' }} >
                <option value="inoffice">Full-Time</option>
                  <option value="wfh">Part-Time</option>
                </select>
                                       
              <label style={{ background: '#173767', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '22px', height: '22px' }}>
                <LocationOnIcon style={{ fontSize: 16, color: '#fff' }} /></label>
                <input type="location" placeholder="Location" style={{ width: '80px', margin: '5px', outline: 'none', height: '20px', border: '1px solid #B3B3B3', borderRadius: '5px', padding: '2px' }} />
              
            </div>
          </div>
               </CardContent>
             </Card>
            </Grid>
            </Stack>
            </div>

            <Grid item xs={8}>
             <Card sx={{ width: '100%', height: 265, border: '1px solid #B3B3B3', borderRadius: '5px',  overflow: 'auto' }}>
               <CardContent>
                <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                <label style={{ fontSize: '16px', fontWeight: 600 }}>Upload Doc : </label>
                <Button component="label" variant="contained" startIcon={<AttachmentIcon sx={{transform: 'rotate(-45deg)', width: '20px', height: '15px'}}/>}
                sx={{color: '#000000', backgroundColor: '#fff', height: '30px',
                textTransform: 'none', borderRadius: '10px', fontSize: '12px',
                '&:hover': {
                backgroundColor: '#B3B3B3',
                color: '#000000',
                }, }}>
                Upload
                <VisuallyHiddenInput type="file" />
                </Button>
                </div>
                </div>
               </CardContent>
             </Card>
            </Grid>
            </Stack>
          <DialogActions>
          <Button variant='filled' 
        sx={{color: '#fff', backgroundColor: '#173767', height: '30px',
          textTransform: 'none', borderRadius: '10px',
          '&:hover': {
           backgroundColor: '#173767',
           color: '#E2A925',
           }, }} onClick={() => setConfirmationDialogOpen(true)}> Save </Button>
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
  );
}
