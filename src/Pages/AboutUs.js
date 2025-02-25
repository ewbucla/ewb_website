import React from 'react'
import { ExecBoard } from '../Helpers/ExecBoard.js';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutus">
        <div className="aboutusTitleSection">
          <div className="aboutusOverlay"></div>
          <div className="aboutusTitle">About Us</div>
        </div>
        <h1 className="sectionTitles">Who We Are</h1>
        <p className="sectionParagraphs">The UCLA student chapter of Engineers Without Borders (EWB) was founded in 2006 by a group of diverse students who were dedicated to using their education to create a lasting, positive impact in the world. Since then, our club has become strongly involved in many international projects, including ongoing critical infrastructure developments in Uganda, Ethiopia, Nepal, Colombia, and Inland Empire, CA.
        </p>
        <h1 className="mainTitle">Meet the Board</h1>
        <div className="BoardList">
          {ExecBoard.map((projectItem, key) => {
            return (
            <div className="Boardmember" key={key} to={`/projects/${projectItem.id}`}>
            <ProjectItem
            key={key}
            image={projectItem.image}
            name={projectItem.name}
            position={projectItem.position}
            description={projectItem.description} 
            major={projectItem.major}
            />
            </div>
            );
          })}
        </div>
        <h1 className="sectionTitles">MISSION</h1>
        <p className="sectionParagraphs">Our mission is to support community-driven development programs worldwide by collaborating with local partners to design and implement sustainable engineering projects while creating transformative experiences and responsible leaders. We find ways to create lasting impact on communities in need through successful remote community work, construction, and project implementation.</p>
        <h1 className="sectionTitles">VISION</h1>
        <p className="sectionParagraphs">Our vision includes a world in which communities have the capacity to meet their basic human needs. We believe this can be best achieved by focusing on the intersection of international collaboration and strong engineering principles. As for our students, our goal is to help them develop their engineering skills while shaping them into global citizens guided by principles of sustainability, engineering ethics, and empowering infrastructure.</p>
    </div>
  )
}

export default AboutUs