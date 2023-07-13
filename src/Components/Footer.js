import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import '../CSS/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <Link to="https://www.instagram.com/ewbucla/">
          <InstagramIcon />
        </Link>
        <Link to="https://www.facebook.com/ewbucla">
          <FacebookIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/ewb-ucla-0b933a277/">
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  )
}

export default Footer
