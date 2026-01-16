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
          <div className="ecuadorTitle">Ethiopia</div>
          <div className="ecuadorTitle2">Enhancing water catchment, distribution, and chlorination infrastructure to improve access to safe, high-quality water in San Pedro de Cachihuayco, Ecuador</div>
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
    </div>
  )};