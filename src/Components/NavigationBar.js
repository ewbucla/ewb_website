import React, { useState , useEffect } from 'react';
import ewbLogo from "../Media/UCLAEWBLogo.png";
import { Link } from "react-router-dom"; 
import ReorderIcon from '@mui/icons-material/Reorder';
import '../CSS/NavigationBar.css';

function NavigationBar() {

const [openLinks, setOpenLinks] = useState(false);
const toggleNavbar = () => {
  setOpenLinks(!openLinks);
};

//test

const [isScreenLessThan720, setIsScreenLessThan720] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsScreenLessThan720(window.innerWidth < 720);
  };

  // Initial check
  handleResize();

  // Event listener for window resize
  window.addEventListener('resize', handleResize);

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

//test

  return (
    <div className="navigationbar">
      <div className="leftSide" id={openLinks && isScreenLessThan720 ? "open" : "close"}>
        <img src={ewbLogo} />
        <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/joinus">Join us</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/joinus">Join us</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default NavigationBar;
