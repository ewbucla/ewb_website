import React, { useState } from 'react';
import ewbLogo from "../Media/UCLAEWBLogo.png";
import { Link } from "react-router-dom"; 
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import '../CSS/NavigationBar.css';

function NavigationBar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navigationbar'>
      <img src={ewbLogo} />
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