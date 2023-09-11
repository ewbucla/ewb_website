import React from 'react'
import { EthiopiaBoard } from '../Helpers/EthiopiaBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/Ethiopia.css";

function Ethiopia() {
  return (
    <div className="ethiopia">
        <div className="ethiopiaTitleSection">
          <div className="ethiopiaOverlay"></div>
          <div className="ethiopiaTitle">Ethiopia</div>
          <div className="ethiopiaTitle2">Insert description here</div>
        </div>
        <h1 className="sectionTitles">Project Leads</h1>
        <div className="BoardList">
          {EthiopiaBoard.map((projectItem, key) => {
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
        <p className="sectionParagraphs">Insert paragraph here</p>
    </div>
  )
}

export default Ethiopia
