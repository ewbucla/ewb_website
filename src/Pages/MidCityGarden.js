import React from 'react'
import { MidCityGardenBoard } from '../Helpers/MidCityBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/MidCityGarden.css";
import { useEffect } from "react";

function MidCityGarden() {
  useEffect(() => {
  window.scrollTo(0, 0); } , []);
  return (
    <div className="ecuador"> 
        <div className="ecuadorTitleSection">
          <div className="ecuadorOverlay"></div>
          <div className="ecuadorTitle">Ecuador</div>
          <div className="ecuadorTitle2">Improving access to safe, high-quality water in San Pedro de Cachihuayco, Ecuador</div>
        </div>
        <h1 className="sectionTitles">Project Leads</h1>
        <div className="BoardList">
          {MidCityGardenBoard.map((projectItem, key) => {
            return (
            <div className="Boardmember" key={key} to={`/projects/${projectItem.id}`}>
            <ProjectItem
            key={key}
            image={projectItem.image}
            name={projectItem.name}
            />
            </div>
            );
          })}
        </div>

    </div>
        )
    }

export default MidCityGarden
