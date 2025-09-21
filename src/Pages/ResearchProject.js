import React from 'react'
import { ResearchProjectBoard } from '../Helpers/ResearchProjectBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/ResearchProject.css";
import { useEffect } from "react";

function Uganda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="researchProject">
      <div className="researchProjectTitleSection">
        <div className="researchProjectOverlay"></div>
        <div className="researchProjectTitle">Fire Perimeter Research Project</div>
        <div className="ugandaTitle2"> Fire-Sensing IoT for Disaster Monitoring   </div> 
      </div>
      <h1 className="sectionTitles">Project Leads</h1>
      <div className="BoardList">
        {ResearchProjectBoard.map((projectItem, key) => {
          return (
            <div
              className="Boardmember"
              key={key}
              to={`/projects/${projectItem.id}`}
            >
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
      <p className="sectionParagraphs">
       Our project began with a mission to address soil-related disaster evaluation efficiency in the Los Angeles region, providing increased local presence to Engineers Without Borders. We have mainly focused on the research, design, and fabrication of a ground-level fire perimeter measuring sensor that functions with IoT data collection. We plan to design a low-cost sensor that relies on the Seebeck effect to generate voltage from heat differences, followed by near real-time fire tracking with high resolution and low latency. The project collaborates with Professor Sriram Narasimhan from the Civil and Environmental Engineering Department, his SRILab for robotics and structural sensing, and an affiliated startup in the field. 
      </p>
      <h1 className="sectionTitles">Current State of Project</h1>
      <p className="sectionParagraphs">
        We are currently drafting our Bill of Materials (BOM) to begin designing Prototype I of the sensor. We plan on devoting this fall quarter to Prototype I and gaining any necessary knowledge on optimal sensor materials, environmental implications, and needed software. We seek to address any heat transfer and coolant complications, finding the vital intersections of knowledge between our diverse composition of majors currently involved. 
      </p>
    </div>
  );
}

export default Uganda;
