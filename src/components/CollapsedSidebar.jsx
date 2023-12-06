// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import './Sidebarmenu.css'

// const CollapsedSidebar = () => {
//   return (
//     <div className='container-fluid' >
//          <div className='row'>
//            <div className='bg-[#173767] col-auto min-vh-100 d-flex justify-content-between flex-column'>
//              <div><i className="bi bi-text-indent-left"></i>
//                <nav className='nav'>
//              <Link variant="link" class="nav-link text-white fs-5 ms-4 my-1 py-2 py-sm-0">
             
//              </Link>
//               </nav>
//     <div className="collapsedsidebar">
//       <ul>
//         <li>
//           <Link to="/dashboard">
//           <i class="bi bi-columns-gap"></i>
//           </Link>
//         </li>
//         <li>
//           <Link to="/task">
//           <i class="bi bi-pin-angle"></i>
//           </Link>
//         </li>
//         <li>
//           <Link to="/calendar">
//           <i class="bi bi-calendar4-week"></i>
//           </Link>
//         </li>
//         <li>
//           <Link to="/contacts">
//           <i class="bi bi-person-lines-fill"></i>
//           </Link>
//         </li>
//         <li>
//           <Link to="/invoicebills">
//           <i class="bi bi-receipt-cutoff"></i>
//           </Link>
//         </li>
//         <li>
//           <Link to="/">
//           <i class="bi bi-box-arrow-right"></i>
//           </Link>
//         </li>
     
//       </ul>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default CollapsedSidebar;

import React  from 'react'
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

        {/* <Button variant="link" class="nav-link text-white fs-5 ms-4 my-1 py-2 py-sm-0">
        <i className="bi bi-text-indent-left" onClick={e=> setSidebarOpen(!sidebarOpen)}></i>
        </Button> */}
         </div>
         </nav>
          <hr className='text-secondary d-none d-sm-inline'/>
          {/* <div className={'sidemenu-container-fluid ${sidebarMenuOpen ? "SidebarMenu":""}' }> */}
          <ul class="nav nav-pills flex-column mt-3 mt-sm-0">
            <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="manager" class="nav-link text-white fs-6" aria-current="page">
              <i class="bi bi-columns-gap"></i>
              </a>
            </li>
            <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="task" class="nav-link text-white fs-6" aria-current="page">
              <i class="bi bi-pin-angle"></i>
              </a>
            </li>
            <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="calendar" class="nav-link text-white fs-6" aria-current="page">
              <i class="bi bi-calendar4-week"></i>
              </a>
            </li>
            <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="contacts" class="nav-link text-white fs-6" aria-current="page">
              <i class="bi bi-person-lines-fill"></i>
              </a>
            </li>
            <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="invoicebills" class="nav-link text-white fs-6" aria-current="page">
              <i class="bi bi-receipt-cutoff"></i>
              </a>
            </li>
          </ul>
          </div>
          <div class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
              <a href="/" class="nav-link text-white fs-6 align-itemcenter ms-3 mt-2" aria-current="page">
              <i class="bi bi-box-arrow-right"></i>
              </a>
              </div>
              </div>
        </div>
      </div>
    // </div>
  )
}

export default Sidebar;