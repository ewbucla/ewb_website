import React from 'react';
import { Link } from "react-router-dom";
import BackgroundIMG from '../Media/bgpic.JPG'
import '../CSS/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="headerContainer" style={{ backgroundImage: `url(${BackgroundIMG})`}}>
        <h1>Engineers Without Borders</h1>
        <p> University of California, Los Angeles Student Chapter</p>
        <Link to="https://support.ewb-usa.org/team/501623">
          <button>DONATE</button>
        </Link>
      </div>
    </div>
  );

}

export default Home;
