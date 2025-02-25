import React from 'react';
import { Link } from "react-router-dom";
import BackgroundIMG from '../Media/EWBBG2.jpg'
import '../CSS/JoinUs.css'
import { ProjectsList } from '../Helpers/ProjectsList';
// import { OldProjectsList } from '../Helpers/OldProjectsList';
import ProjectItem from '../Components/ProjectItem';
import ProjectsBG from '../Media/ProjectsBG.jpg';

function JoinUs() {
  return (
        <div className="joinus" >
          <div className='banner'>
            <div className="banner-overlay"></div>
            <div className='banner-text'>Join Us</div>
          </div>
          <div className="CurrentProjects">Current Projects</div>
          <p className="LookingForMembers">We are always looking for new members to join our projects! Hover or click on each project to see their meeting times.</p>
          <div className="projectsList">
            {ProjectsList.map((projectItem, key) => {
              return (
              <Link className="projectLink" key={key} to={`/projects/${projectItem.id}`}>
                <ProjectItem
                  key={key}
                  image={projectItem.image}
                  name={projectItem.name}
                  meetingTimes={projectItem.meetingTimes}
                  description={projectItem.description} 
                />
              </Link>
              );
            })}
          </div>
          <div className='button-display'>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeIhzFkpkdqqEvi5gAMj6q7BUgeWu3tRAgUpRomvsV7rSftNQ/viewform">
              <button className="aesthetic-button" >Join EWB Mailing List </button>
            </Link>
            <Link to="https://tinyurl.com/ewbucladiscord">
              <button className="aesthetic-button" >Join EWB Discord Server</button>
            </Link>
          </div>
        </div>
  );

}

export default JoinUs;


// Code trying to make button work:
/*

  Why didn't this work: <button onclick="window.location.href='www.yoursite.com';">Click me</button>

  <button onClick={clickHandler}>
    Join Mailing List
  </button>
  const clickHandler = () => {
    console.log("Button clicked!");
    windows.location.replace("https://www.ranker.com/list/jokes-for-programmers/samantha-dillinger");
  }

  <form>
    <a href="https://www.ranker.com/list/jokes-for-programmers/samantha-dillinger"></a>
    <input type="button" value="Join Mailing List"></input>
  </form> 
*/