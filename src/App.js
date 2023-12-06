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
import { Calendar } from "antd";
import Contacts from "./page/Contacts";
import Invoicebills from "./page/Invoicebills";
import Dashboard from "./page/Dashboard";

function App() {
  //  const { collapseSidebar } = useProSidebar();
  return(
<div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path="/forgotpassword" element={<Forgotpassword/>} />
    <Route path="/recovery" element={<Recovery/>} />
    <Route path="/setpassword" element={<SetPassword/>} />
    <Route path="/alldone" element={<Alldone/>} />
  {/* <SideNavBar /> */}    
    {/* <Route path="/home" element={<Home/>} /> */}
    <Route path="/manager" element={<Manager />} />
    <Route path="/employee" element={<Employee/>} />
    <Route path="/freelancer" element={<Freelancer/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/task" element={<Task/>} />
    <Route path="/calendar" element={<Calendar/>} />
    <Route path="/contacts" element={<Contacts/>} />
    <Route path="/invoicebills" element={<Invoicebills/>} />
    
 </Routes>
  </BrowserRouter>

</div>
  );
  
}

export default App;