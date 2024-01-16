// import { useEffect } from "react";
import React from "react";
// import { Select, Space } from "antd";
// import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import Login from "./page/Login";
import Freelancer from "./page/Freelancer";
import Manager from './page/Manager';
import Employee from './page/Employee'
import Forgotpassword from "./page/Forgotpassword";
import Recovery from './page/Recovery';
import SetPassword from "./page/SetPassword";
import Alldone from "./page/Alldone";
import Task from "./page/Task";
import Calendar from "./page/Calendar";
import Contacts from "./page/Contacts";
import Invoicebills from "./page/Invoicebills";
import Activity from "./page/Activity";
import Empgenerate from "./page/Empgenerate";

function App() {
  return(
<div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path="/forgotpassword" element={<Forgotpassword/>} />
    <Route path="/recovery" element={<Recovery/>} />
    <Route path="/setpassword" element={<SetPassword/>} />
    <Route path="/alldone" element={<Alldone/>} />
    <Route path="/manager" element={<Manager />} />
    <Route path="/employee" element={<Employee/>} />
    <Route path="/freelancer" element={<Freelancer/>} />
    <Route path="/activity" element={<Activity/>} />
    <Route path="/task" element={<Task/>} />
    <Route path="/calendar" element={<Calendar/>} />
    <Route path="/contacts" element={<Contacts/>} />
    <Route path="/invoicebills" element={<Invoicebills/>} />
    <Route path="/empgenerate" element={<Empgenerate/>} />
    
 </Routes>
  </BrowserRouter>

</div>
  );
  
}

export default App;