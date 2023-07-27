import React from 'react';
import { ProjectsList } from '../Helpers/ProjectsList';
import { OldProjectsList } from '../Helpers/OldProjectsList';
import ProjectItem from '../Components/ProjectItem';
import ProjectsBG from '../Media/ProjectsBG.jpg';
import { Link } from "react-router-dom"; 

import "../CSS/Projects.css";

function Projects() {
  return (
    <div className="projects" >
        <div className="projectsTitle" style={{ backgroundImage: `url(${ProjectsBG})`}}>Our Projects</div>
        <div className="CurrentProjects">Current Projects</div>
        <div className="projectsList">
          {ProjectsList.map((projectItem, key) => {
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
