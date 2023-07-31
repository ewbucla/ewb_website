import React from 'react';
import { Link } from "react-router-dom";
import BackgroundIMG from '../Media/EWBBG2.jpg'
import '../CSS/JoinUs.css'

function JoinUs() {
  return (
    <div className="joinus" >
      {/* <div className="bannerContainer" style={{ backgroundImage: `url(${BackgroundIMG})`}}>
        <h1>Engineers Without Borders</h1>
        <p> University of California, Los Angeles Student Chapter</p>
      </div> */}
      <div className="headerContainer" style={{ backgroundImage: `url(${BackgroundIMG})`}}>
        <h1>Join Us</h1>
      </div>
    </div>
  );

}

export default JoinUs;
