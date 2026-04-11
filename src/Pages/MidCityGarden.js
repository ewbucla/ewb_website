import React from 'react'
import { MidCityBoard } from '../Helpers/MidCityBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/MidCity.css";
import { useEffect } from "react";

function Uganda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="midCity">
      <div className="midCityTitleSection">
        <div className="midCityOverlay"></div>
        <div className="midCityTitle">Mid City Garden Project</div>
        <div className="midCityTitle2"> Urban Garden for Ecological Restoration  </div> 
      </div>
      <h1 className="sectionTitles">Project Leads</h1>
      <div className="BoardList">
        {MidCityBoard.map((projectItem, key) => {
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
       TeaPot Gardens is a climate resilience initiative located in Mid City, Los Angeles. By modernizing the ancient tradition of Paradise Gardens, we are transforming an urban space into a sanctuary centered on cultural connection and environmental safety. Supported by the LA Repair Grant, our mission is to mitigate urban environmental risks like soil contaminants and dust inhalation through innovative landscape design and hyperaccumulator plants that naturally stabilize the soil. This project serves as a model for how community-driven green spaces can protect and nourish urban populations.
    </p>
      <h1 className="sectionTitles">About the Community</h1>
      <p className = "sectionParagraphs">
        We are building for the heart of Los Angeles. TeaPot Gardens is designed to be a safe place for children and a cultural hub for residents, expected to serve approximately 8,000 people per year. Through our partnership with the NAMLA chapter at the UCLA Extension school, we ensure the garden is rooted in indigenous wisdom and local ecological needs.
      </p>
      <h1 className="sectionTitles">Current State of Project</h1>
      <p className="sectionParagraphs">
        We have completed our foundational phase. After establishing a leadership team and conducting a site visit, we have moved past the initial research of hydrological systems, including atmospheric thermodynamics and runoff management. Most of the funding is already secured via grants, the land is privately owned, and there are no permitting roadblocks, meaning we are officially ready for the design phase.
      </p>
    </div>
  );
}

export default Uganda;
