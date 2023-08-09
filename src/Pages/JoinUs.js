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
          <p>We are always looking for new members to join our projects! Hover on each project to see their meeting times.</p>
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
          <div className='button-display'>
            <Link to="https://www.google.com/search?q=meme+computer+scienc&tbm=isch&ved=2ahUKEwj9terfubqAAxUoPEQIHYDtDP0Q2-cCegQIABAA&oq=meme+computer+scienc&gs_lcp=CgNpbWcQAzIFCAAQgAQyBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB46CggAEIoFELEDEEM6CAgAEIAEELEDOgcIABCKBRBDUN8EWPkVYLYXaABwAHgBgAHbAogBuRWSAQc1LjQuNi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=8nLIZP30Naj4kPIPgNuz6A8&bih=866&biw=1512#imgrc=OZaViWrueAy__M">
              <button className="aesthetic-button" >Join EWB Mailing List </button>
            </Link>
            <Link to="https://www.google.com/search?q=meme+computer+scienc&tbm=isch&ved=2ahUKEwj9terfubqAAxUoPEQIHYDtDP0Q2-cCegQIABAA&oq=meme+computer+scienc&gs_lcp=CgNpbWcQAzIFCAAQgAQyBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB46CggAEIoFELEDEEM6CAgAEIAEELEDOgcIABCKBRBDUN8EWPkVYLYXaABwAHgBgAHbAogBuRWSAQc1LjQuNi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=8nLIZP30Naj4kPIPgNuz6A8&bih=866&biw=1512#imgrc=OZaViWrueAy__M">
              <button className="aesthetic-button" >Join EWB Discord </button>
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