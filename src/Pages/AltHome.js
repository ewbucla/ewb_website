import React from 'react';
import { Link } from "react-router-dom";
import BackgroundIMGEWB from '../Media/EWBBG2.jpg'
import BackgroundIMGEBW from '../Media/EBWBG.jpg'
import '../CSS/AltHome.css'


function Home() {
  return (
    <div className = "althome">
    <div className="homeewb" style={{ backgroundImage: `url(${BackgroundIMGEWB})` }}>
      <div className="headerContainerEWB">
        <h1>Engineers Without Borders</h1>
        <p> University of California, Los Angeles Student Chapter</p>
        <Link to="https://support.ewb-usa.org/team/501623">
          <button>Learn more about EWB</button>
        </Link>
      </div>
    </div>
    <div className="separator"> t </div>
    <div className="homeebw" style={{ backgroundImage: `url(${BackgroundIMGEBW})` }}>
        <div className="headerContainerEBW">
          <h1>Engineering a Better World</h1>
          <p> Sister Organization</p>
          <Link to="https://support.ewb-usa.org/team/501623">
            <button>Learn more about EBW</button>
          </Link>
        </div>
      </div>
      </div>
  );

}
export default Home;