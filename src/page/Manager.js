import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CollapsedSidebar from '../components/CollapsedSidebar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Manager = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header ">
      {isSidebarOpen ? (
           <i className="bi bi-text-indent-right" onClick={toggleSidebar}></i>
        ) : (
           <i className="bi bi-text-indent-left" onClick={toggleSidebar}></i>
        )}
      </div>

     
      {isSidebarOpen ? <Sidebar /> : <CollapsedSidebar />}
      
    </div>
  );
};


export default Manager;

// import React, { useState }  from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import './SideNavBar.css'
// import { Image, Button } from 'react-bootstrap';

// function SidebarMenu () {
//   const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);

//   // const toggleSidebar = () => {
//   //   setSidebarOpen(!sidebarOpen);
//   //   };
//   return (
//     <div className='container-fluid' >
//       <div className='row'>
//         <div className='bg-[#173767] col-auto min-vh-100 d-flex justify-content-between flex-column'>
//           <div>
//           {/* <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2'> */}
//             {/* <span className='ms-1 fs-4'src="menulogo.png"></span> */}
//             {/* <img className='ms-4 bg-[#A3A3A3] rounded ' style={{ width: '105px', height: '50px' }} src="menulogo.png" alt=" " />
//             <i class="bi bi-text-indent-right"></i>
//             <span className='ms-3 d-none d-sm-inline'></span>
//           </a> */}
//           <nav className='nav'>
//           <div className="d-flex align-items-center">
//           <Image className='ms-4 bg-[#A3A3A3] rounded ' style={{ width: '105px', height: '50px' }} src="menulogo.png" alt="logo" />

//         <Button variant="link" class="nav-link text-white fs-5 ms-4 my-1 py-2 py-sm-0">
//         <i className="bi bi-text-indent-right" onClick={e=> setSidebarMenuOpen(!sidebarMenuOpen)}></i>
//         </Button>
//          </div>
//          </nav>
//           <hr className='text-secondary d-none d-sm-inline'/>
//           {/* <div className={'sidemenu-container-fluid ${sidebarMenuOpen ? "SidebarMenu":""}' }> */}
//           <ul class="nav nav-pills flex-column mt-3 mt-sm-0">
//             <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
//               <a href="manager" class="nav-link text-white fs-6" aria-current="page">
//               <i class="bi bi-columns-gap"></i>
//               <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
//               </a>
//             </li>
//             <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
//               <a href="task" class="nav-link text-white fs-6" aria-current="page">
//               <i class="bi bi-pin-angle"></i>
//               <span className='ms-3 d-none d-sm-inline'>Task</span>
//               </a>
//             </li>
//             <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
//               <a href="calendar" class="nav-link text-white fs-6" aria-current="page">
//               <i class="bi bi-calendar4-week"></i>
//               <span className='ms-3 d-none d-sm-inline'>Calendar</span>
//               </a>
//             </li>
//             <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
//               <a href="contacts" class="nav-link text-white fs-6" aria-current="page">
//               <i class="bi bi-person-lines-fill"></i>
//               <span className='ms-3 d-none d-sm-inline'>Contacts</span>
//               </a>
//             </li>
//             <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
//               <a href="invoicebills" class="nav-link text-white fs-6" aria-current="page">
//               <i class="bi bi-receipt-cutoff"></i>
//               <span className='ms-3 d-none d-sm-inline'>Invoice Bills</span>
//               </a>
//             </li>
//           </ul>
//           </div>
//           <div class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
//               <a href="/" class="nav-link text-white fs-6 align-itemcenter ms-3 mt-2" aria-current="page">
//               <i class="bi bi-box-arrow-right"></i>
//               <span className='ms-3 d-none d-sm-inline'>Logout</span>
//               </a>
//               </div>
//               </div>
//         </div>
//       </div>
//     // </div>
//   )
// }

// export default SidebarMenu;