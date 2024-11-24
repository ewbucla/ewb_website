import React from 'react';
import { EWBList } from '../Helpers/EWBList';
import { OldProjectsList } from '../Helpers/OldProjectsList';
import ProjectItem from '../Components/ProjectItem';
import ProjectsBG from '../Media/ProjectsBG.jpg';
import { Link } from "react-router-dom"; 

import "../CSS/Projects.css";

function Projects() {
  return (
    <div className="projects" >
      <div className="projectsTitleSection">
        <div className="projectsOverlay"></div>
        <div className="projectsTitle">Our Projects</div>
      </div>
        <div className="CurrentProjects">Current Projects</div>
        <div className="projectsList">
          {EWBList.map((projectItem, key) => {
            return (
            <Link className="projectLink" key={key} to={`/projects/${projectItem.id}`}>
            <ProjectItem
            key={key}
            image={projectItem.image}
            name={projectItem.name}
            description={projectItem.description} 
            />
            </Link>
            );
          })}
          </div>

          <div className="OldProjects">Old Projects</div>
          <div className="projectsList">
          {OldProjectsList.map((projectItem, key) => {
            return (
            <Link className="projectLink" key={key} to={`/projects/${projectItem.id}`}>
            <ProjectItem
            key={key}
            image={projectItem.image}
            name={projectItem.name}
            description={projectItem.description} 
            />
            </Link>
            );
          })}
        </div>
    </div>
  );
}

export default Projects
