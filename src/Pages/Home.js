import React from 'react';
import { Link } from "react-router-dom";
// import BackgroundIMG from '../Media/EWBBG2.jpg'
import BackgroundIMG from '../Media/ProjectsBG.jpg'
import '../CSS/Home.css'


function Home() {
  return (
    <div className="homediv">
    <div className="home" style={{ backgroundImage: `url(${BackgroundIMG})`}}>
      <div className="headerContainer">
        <h1>Engineers Without Borders</h1>
        <p> University of California, Los Angeles Student Chapter</p>
        <Link to="https://support.ewb-usa.org/team/501623">
          <button className="DonateButton">DONATE</button>
        </Link>
      </div>
    </div>
    <h1 className="EBW">Learn more about our projects</h1>
    <Link to="/Projects">
      <button className="ProjectsButton">Projects</button>
    </Link>
    </div>
  );

}
export default Home;
