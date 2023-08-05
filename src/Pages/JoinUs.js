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
          <div className="headerContainer" style={{ backgroundImage: `url(${BackgroundIMG})`}}>
            <h1>Join Us</h1>
          </div>
          {/* <div className="contactInfo">
            <h1>Contact Info</h1>
            <p>Contact us at: INSERT EMAIL</p>
            <Link to="https://www.google.com/search?q=meme+computer+scienc&tbm=isch&ved=2ahUKEwj9terfubqAAxUoPEQIHYDtDP0Q2-cCegQIABAA&oq=meme+computer+scienc&gs_lcp=CgNpbWcQAzIFCAAQgAQyBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB46CggAEIoFELEDEEM6CAgAEIAEELEDOgcIABCKBRBDUN8EWPkVYLYXaABwAHgBgAHbAogBuRWSAQc1LjQuNi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=8nLIZP30Naj4kPIPgNuz6A8&bih=866&biw=1512#imgrc=OZaViWrueAy__M"><button>Join Mailing List </button></Link>
            <a href="https://www.google.com/search?q=meme+computer+scienc&tbm=isch&ved=2ahUKEwj9terfubqAAxUoPEQIHYDtDP0Q2-cCegQIABAA&oq=meme+computer+scienc&gs_lcp=CgNpbWcQAzIFCAAQgAQyBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB46CggAEIoFELEDEEM6CAgAEIAEELEDOgcIABCKBRBDUN8EWPkVYLYXaABwAHgBgAHbAogBuRWSAQc1LjQuNi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=8nLIZP30Naj4kPIPgNuz6A8&bih=866&biw=1512#imgrc=OZaViWrueAy__M">
              Join Mailing List 
            </a>
          </div> */}
          <div className="CurrentProjects">Current Projects</div>
            <p>We are always looking for new members to join our projects! Click on each project to see their meeting times.</p>
            <div className="projectsList">
              {ProjectsList.map((projectItem, key) => {
                return (
                // <Link className="projectLink" key={key} to={`/projects/${projectItem.id}`}>
                <ProjectItem
                key={key}
                image={projectItem.image}
                name={projectItem.name}
                meetingTimes={projectItem.meetingTimes}
                description={projectItem.description} 
                />
                // </Link>
                );
              })}
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