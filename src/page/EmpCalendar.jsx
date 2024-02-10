import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import EmpNavbar from '../components/EmpNavbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmpSidebar from '../components/EmpSidebar';
import "./Calendar.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function Calendar() {
    const [events, setEvents] = useState([
        { title: "Task added", date: new Date() },
      ]);
      const [open, setOpen] = useState(false);
      const [newEventTitle, setNewEventTitle] = useState("");
      const [newEventDate, setNewEventDate] = useState("");
      const [newEventTime, setNewEventTime] = useState("");
    
      const handleAddEvent = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleConfirmAddEvent = () => {
        const newEvent = { title: newEventTitle, date: new Date(`${newEventDate}T${newEventTime}`) }; 
        setEvents([...events, newEvent]);
        setOpen(false);
        setNewEventTitle("");
        setNewEventDate("");
        setNewEventTime("");
      };
    
      const handleRemoveEvent = () => {
        const updatedEvents = events.slice(0, events.length - 1);
        setEvents(updatedEvents);
      };

  return (
    <>
        <EmpNavbar />
        <Box height={40} />
        <Box sx={{display: "flex"}}>  
        <EmpSidebar />
       <Box component="main" sx={{ flexGrow: 1, p:3}}>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "prev,today,next",
          center: "title",
          end: "timeGridDay,timeGridWeek,dayGridMonth", 
        }}
        buttonText={{
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day'
          }}
          buttonColor={{
            backgroundColor: '#173767',
            color: '#fff',
          }}
        height={"90vh"}
        events={events}
      />
      <div>
            <Button variant= "filled" sx={{mr: 1, textTransform: 'none', borderRadius: '10px',
             backgroundColor: '#173767', color: '#fff', height: '25px',
            '&:hover': {
                backgroundColor: 'green',
                color: '#fff',}, }} 
            onClick={handleAddEvent}>Add Event</Button>
            <Button variant= "filled" sx={{textTransform: 'none',  borderRadius: '10px',
             backgroundColor: '#E2A925', color: '#fff', height: '25px',
            '&:hover': {
                backgroundColor: 'red',
                color: '#fff',}, }}
            onClick={handleRemoveEvent}>Remove Event</Button>
    </div>
    </Box>
       </Box>
       <Dialog open={open} onClose={handleClose} sx={{'& .MuiDialog-paper':{ borderRadius: '10px'}}}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', padding: '5px' }}>
          <lable>Enter event title:</lable>
          <input
            type="text"
            value={newEventTitle}
            style={{border: "1px solid #B3B3B3"}}
            onChange={(e) => setNewEventTitle(e.target.value)}
          />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', padding: '5px' }}>
          <lable> Date :</lable>
          <input
            type="date"
            value={newEventDate}
            style={{border: "1px solid #B3B3B3", color: '#173767'}}
            onChange={(e) => setNewEventDate(e.target.value)}
          />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', padding: '5px' }}>
          <lable> Time :</lable>
          <input
            type="time"
            value={newEventTime}
            style={{border: "1px solid #B3B3B3", color: '#173767'}}
            onChange={(e) => setNewEventTime(e.target.value)}
          />
          </div>
          </div>
        </DialogContent>
        <DialogActions>
        <Button variant= "filled" sx={{textTransform: 'none',  borderRadius: '10px',
             backgroundColor: '#E2A925', color: '#fff', height: '20px',
            '&:hover': {
                backgroundColor: 'red',
                color: '#fff',}, }}
                onClick={handleClose}>Cancel</Button>
        <Button variant= "filled" sx={{mr: 1, textTransform: 'none', borderRadius: '10px',
             backgroundColor: '#173767', color: '#fff', height: '20px',
            '&:hover': {
                backgroundColor: 'green',
                color: '#fff',}, }} 
                onClick={handleConfirmAddEvent}>Add</Button>
        </DialogActions>
      </Dialog>
   </> 
  );
}

export default Calendar;