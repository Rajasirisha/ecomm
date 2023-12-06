// import React, { useState } from "react";
// import { MdOutlineDashboard } from "react-icons/md";
// import { BsPinAngle } from "react-icons/bs";
// import { FaCalendarAlt } from "react-icons/fa";
// import { MdOutlinePeopleAlt } from "react-icons/md";
// import { FaWpforms } from "react-icons/fa";
// import { TbLogout } from "react-icons/tb";
// import "./SideNavBar.css";

// const SideNavBar = () => {
// 	const [isExpanded, setExpendState] = useState(false);
// 	const menuItems = [
// 		{
// 			path: "/manager",
//             text: "Dashboard",
// 			icon: <MdOutlineDashboard />,
// 		},
// 		{
// 			path: "/task",
//             text: "Task",
// 			icon: <BsPinAngle />,
// 		},
	
// 		{
// 			path: "/calendar",
//             text: "Calendar",
// 			icon:  <FaCalendarAlt />,
// 		},
	
// 		{
// 			path: "/contacts",
//             text: "Contacts",
// 			icon: <MdOutlinePeopleAlt />,
// 		},
// 		{
// 			path: "/invoicebills",
//             text: "Invoice Bills",
// 			icon: <FaWpforms />,
// 		},
// 	];
// 	return (
// 		<div
// 			className={
// 				isExpanded
// 					? "side-nav-container"
// 					: "side-nav-container side-nav-container-NX"
// 			}
// 		>
// 			<div className="nav-upper">
// 				<div className="nav-heading">
// 					{isExpanded && (
// 						<div className="nav-brand">
// 							<img src="menulogo.png" alt="" srcset="" />
// 						</div>
// 					)}
// 					<button
// 						className={
// 							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
// 						}
// 						onClick={() => setExpendState(!isExpanded)}
// 					>
// 						<span></span>
// 						<span></span>
// 						<span></span>
// 					</button>
// 				</div>
// 				<div className="nav-menu">
// 					{menuItems.map(({ text, icon }) => (
// 						<a
// 							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
// 							href="#"
// 						>
// 							<img className="menu-item-icon" src={icon} alt="" srcset="" />
// 							{isExpanded && <p>{text}</p>}
// 						</a>
// 					))}
// 				</div>
// 			</div>
// 			<div className="nav-footer">
// 				{isExpanded && (
// 					<div className="nav-details">
// 						<div className="nav-footer-info">
//                             icon: <TbLogout />,
// 							<p className="nav-footer-user-name">Logout</p>
// 						</div>
// 					</div>
// 				)}
                
// 				{/* <img className="logout-icon" src="icons/logout.svg" alt="" srcset="" /> */}
// 			</div>
// 		</div>
// 	);
// };

// export default SideNavBar;

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Sidebarmenu.css'
// import { Button } from 'react-bootstrap';

function Sidebar () {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  //   };
  return (
    <div className='container-fluid' >
      <div className='row'>
        <div className='bg-[#173767] col-auto min-vh-100 d-flex justify-content-between flex-column'>
          <div>
          {/* <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2'> */}
            {/* <span className='ms-1 fs-4'src="menulogo.png"></span> */}
            {/* <img className='ms-4 bg-[#A3A3A3] rounded ' style={{ width: '105px', height: '50px' }} src="menulogo.png" alt=" " />
            <i class="bi bi-text-indent-right"></i>
            <span className='ms-3 d-none d-sm-inline'></span>
          </a> */}
          <nav className='nav'>
          <div className="d-flex align-items-center">
          <img className='ms-4 bg-[#A3A3A3] rounded ' style={{ width: '105px', height: '50px' }} src="menulogo.png" alt="logo" />

        {/* <Button variant="link" class="nav-link text-white fs-5 ms-4 my-1 py-2 py-sm-0">
        <i className="bi bi-text-indent-right" onClick={e=> setSidebarOpen(!sidebarOpen)}></i>
        </Button> */}
         </div>
         </nav>
          <hr className='text-secondary d-none d-sm-inline'/>
          {/* <div className={'sidemenu-container-fluid ${sidebarMenuOpen ? "SidebarMenu":""}' }> */}
          <ul class="nav nav-pills flex-column mt-3 mt-sm-0">
            <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="manager" class="nav-link text-white fs-6" aria-current="page">
              <i class="bi bi-columns-gap"></i>
              <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
              </a>
            </li>
            <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="task" class="nav-link text-white fs-6" aria-current="page">
              <i class="bi bi-pin-angle"></i>
              <span className='ms-3 d-none d-sm-inline'>Task</span>
              </a>
            </li>
            <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="calendar" class="nav-link text-white fs-6" aria-current="page">
              <i class="bi bi-calendar4-week"></i>
              <span className='ms-3 d-none d-sm-inline'>Calendar</span>
              </a>
            </li>
            <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="contacts" class="nav-link text-white fs-6" aria-current="page">
              <i class="bi bi-person-lines-fill"></i>
              <span className='ms-3 d-none d-sm-inline'>Contacts</span>
              </a>
            </li>
            <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="invoicebills" class="nav-link text-white fs-6" aria-current="page">
              <i class="bi bi-receipt-cutoff"></i>
              <span className='ms-3 d-none d-sm-inline'>Invoice Bills</span>
              </a>
            </li>
          </ul>
          </div>
          <div class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="/" class="nav-link text-white fs-6 align-itemcenter ms-3 mt-2" aria-current="page">
              <i class="bi bi-box-arrow-right"></i>
              <span className='ms-3 d-none d-sm-inline'>Logout</span>
              </a>
              </div>
              </div>
        </div>
      </div>
    // </div>
  )
}

export default Sidebar;