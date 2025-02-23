import React, { useState } from 'react';
// import ewbLogo from "../Media/UCLAEWBLogo.png";
import ewbLogo from "../Media/whiteimage.jpg";
// import altLogo from "../Media/EWB.jpg";
import { Link } from "react-router-dom"; 
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import '../CSS/NavigationBar.css';
// import { InsertDriveFile } from '@mui/icons-material';
// import the project items for nav hover
import { EWBList } from "../Helpers/EWBList";

function NavigationBar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className='navigationbar'>
        <img src={ewbLogo} alt='EWB Logo'/>
        <div className='menu-icon' onClick={handleClick} >
          <button onClick={handleClick}>
           {click ? <CloseIcon /> : <ReorderIcon />}
          </button>
        </div>
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <div className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </div>
          <div className='nav-item'>
            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </div>
          <div className='nav-item projects'>
            <Link to='/projects' className='nav-links projects-link' onClick={closeMobileMenu}>
              Projects
            </Link>
            <div className="projects-dropdown-container">
              {EWBList.map((project, index) => {
                return(
                  <div className="dropdown-item" key={index}>
                    <Link to={"/projects/" + project.id} className="dropdown-item-link" onClick={closeMobileMenu}>
                      {project.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </div>
          <div className='nav-item'>
            <Link to='/joinus' className='nav-links' onClick={closeMobileMenu}>
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </>

  );

}

export default NavigationBar;