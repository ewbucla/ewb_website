import React from 'react'
import { EcuadorBoard } from '../Helpers/EcuadorBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/Ecuador.css";
import { useEffect } from "react";

function Ecuador() {
  useEffect(() => {
  window.scrollTo(0, 0); } , []);
  return (
    <div className="ecuador"> 
        <div className="ecuadorTitleSection">
          <div className="ecuadorOverlay"></div>
          <div className="ecuadorTitle">Ecuador</div>
          <div className="ecuadorTitle2">Enhancing access to safe, high-quality water in San Pedro de Cachihuayco, Ecuador</div>
        </div>
        <h1 className="sectionTitles">Project Leads</h1>
        <div className="BoardList">
          {EcuadorBoard.map((projectItem, key) => {
            return (
            <div className="Boardmember" key={key} to={`/projects/${projectItem.id}`}>
            <ProjectItem
            key={key}
            image={projectItem.image}
            name={projectItem.name}
            description={projectItem.description} 
            major={projectItem.major}
            />
            </div>
            );
          })}
        </div>
        <h1 className="sectionTitles">About the Project</h1>
        <p className="sectionParagraphs">Thank you for your interest in learning about this Ecuador-based water infrastructure project under the UCLA chapter of Engineers Without Borders. The San Pedro de Cachihuayco Water Project aims to enhance the community's water supply system, addressing critical infrastructure deficiencies and improving water quality for 42 families. Located in the highlands of Ecuador’s Chimborazo province, San Pedro de Cachihuayco relies on outdated and inefficient water catchment and distribution systems. The project will focus on improving catchment areas, distribution systems, and water quality. We are excited to work alongside this community to create long-term solutions for this water system.</p>
        <h1 className="sectionTitles">About the community</h1>
        <p className="sectionParagraphs">San Pedro de Cachihuayco is a rural indigenous community in Punin parish, Riobamba canton, Ecuador, and it is home to about 120 residents. The community’s economy is centered around agriculture and livestock, with families growing crops like potatoes and corn, and raising livestock for milk and wool. The water system relies on three catchment points located on a hill about a 45-minute walk from the community center, but this infrastructure is in need of maintenance. Residents are deeply invested in improving their water supply, with a community water board designated to oversee the water system. This project will support their efforts to build more resilient water infrastructure that meets the economic and usage needs.</p>
        <h1 className="sectionTitles">Assessment Trips and the Current State of the Project</h1>
        <p className="sectionParagraphs">
          This project was recently adopted by the UCLA chapter in August 2025. 
          With an estimated budget of $16,250, our chapter is working towards 
          securing funds for construction while building a team of committed 
          engineering students. An assessment trip is tentatively planned for 
          Spring 2025 to assess the current state of the water system and to 
          develop a better understanding of this community's issues with it. 
          We are just getting started, so be on the lookout for more details! 
          Thank you for supporting this project.</p>
    </div>
        )
    }

export default Ecuador
