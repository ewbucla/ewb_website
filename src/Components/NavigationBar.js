import React, { useState , useEffect } from 'react';
import ewbLogo from "../Media/UCLAEWBLogo.png";
import { Link } from "react-router-dom"; 
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import '../CSS/NavigationBar.css';

import { Button } from './Button';
import Dropdown from './Dropdown';

// function NavigationBar() {

// const [openLinks, setOpenLinks] = useState(false);
// const toggleNavbar = () => {
//   setOpenLinks(!openLinks);
// };

// //test

// const [isScreenLessThan720, setIsScreenLessThan720] = useState(false);

// useEffect(() => {
//   const handleResize = () => {
//     setIsScreenLessThan720(window.innerWidth < 720);
//   };

//   // Initial check
//   handleResize();

//   // Event listener for window resize
//   window.addEventListener('resize', handleResize);

//   // Cleanup the event listener on component unmount
//   return () => {
//     window.removeEventListener('resize', handleResize);
//   };
// }, []);

// //test

//   return (
//     <div className="navigationbar">
//       <div className="leftSide" id={openLinks && isScreenLessThan720 ? "open" : "close"}>
//         <img src={ewbLogo} />
//         <div className="hiddenLinks">
//         <Link to="/">Home</Link>
//         <Link to="/aboutus">About us</Link>
//         <Link to="/projects">Projects</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/joinus">Join us</Link>
//         </div>
//       </div>
//       <div className="rightSide">
//         <Link to="/">Home</Link>
//         <Link to="/aboutus">About us</Link>
//         <Link to="/projects">Projects</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/joinus">Join us</Link>
//         <button onClick={toggleNavbar}>
//           <ReorderIcon />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default NavigationBar;


function NavigationBar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navigationbar'>
      <img src={ewbLogo} />
      {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
        </Link> */}
        <div className='menu-icon' onClick={handleClick} >
          <button onClick={handleClick}>
           {click ? <CloseIcon /> : <ReorderIcon />}
          </button>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/joinus' className='nav-links' onClick={closeMobileMenu}>
              Join Us
            </Link>
          </li>
        </ul>
      </nav>
    </>

  );

}

export default NavigationBar;