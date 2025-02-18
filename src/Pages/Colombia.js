import React from 'react'
import { ColombiaBoard } from '../Helpers/ColombiaBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/Colombia.css";
import { useEffect } from "react";

function Colombia() {
  useEffect(() => {
  window.scrollTo(0, 0); } , []);
  return (
    <div className="colombia">
        <div className="colombiaTitleSection">
          <div className="colombiaOverlay"></div>
          <div className="colombiaTitle">Colombia</div>
          <div className="colombiaTitle2">Sanitation, Education & Development</div>
        </div>
        <h1 className="mainTitle">Project Leads</h1>
        <div className="BoardList">
          {ColombiaBoard.map((projectItem, key) => {
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
        <p className="sectionParagraphs">Colombia Description - need to update THIS IS THE CHANGE</p>
        <h1 className="sectionTitles">About Colombia</h1>
        <p className="sectionParagraphs">Describe communities</p>
        <h1 className="sectionTitles">Future Plans</h1>
        <p className="sectionParagraphs">Add future plans</p>
    </div>
  )
}

export default Colombia
