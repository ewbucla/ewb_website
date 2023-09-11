import React from 'react'
import { NepalBoard } from '../Helpers/NepalBoard.js';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/Nepal.css";

function Nepal() {
  return (
    <div className="nepal">
        <div className="nepalTitleSection">
          <div className="nepalOverlay"></div>
          <div className="nepalTitle">Nepal</div>
          <div className="nepalTitle2">Insert description here</div>
        </div>
        <h1 className="sectionTitles">Project Leads</h1>
        <div className="BoardList">
          {NepalBoard.map((projectItem, key) => {
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

export default Nepal
