import React from 'react'
import { NepalBoard } from '../Helpers/NepalBoard.js';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/Nepal.css";
import { useEffect } from "react";

function Nepal() {
  useEffect(() => {
  window.scrollTo(0, 0); } , []);
  return (
    <div className="nepal">
        <div className="nepalTitleSection">
          <div className="nepalOverlay"></div>
          <div className="nepalTitle">Nepal</div>
          <div className="nepalTitle2">Food Sustainability & Education</div>
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
        <p className="sectionParagraphs">The Nepal Farmhouse Project will be building an industrial-sized chicken farm (1000 square feet) to provide income and financial sustainability for the Freedom School. The Freedom School in rural Nepal prevents human trafficking by providing education to girls and children at high-risk. The chicken farm will provide extra nutrition for students, food security/sovereignty for the community, and income for local survivors and women operating the school.</p>
        <h1 className="sectionTitles">About the community</h1>
        <p className="sectionParagraphs">In 2019, the National Human Rights Commission estimated that 1.5 million Nepalis are vulnerable to human trafficking. Thus, the Freedom School, founded and maintained by Freedom and Hope Nepal and Her Future Coalition, serves 125 kids and 30 parents in adult education programs. The Freedom School aims to provide this education to prevent human trafficking and child marriage by making alternative economic and life options for children and families. The organization also supports 25 girls in residential care, who are at particularly high risk, employ survivors, and provide counseling to families. We felt inspired by these organizations' work and intend to ensure these programs can last forever through the economic and food assistance/sustainability provided by the chicken farm.</p>
        <h1 className="sectionTitles">Assessment Trips & Current State of Project</h1>
        <p className="sectionParagraphs">The Nepal Project started in Fall 2023. We have currently raised around $25,000 needed to fund the project, and as of January 2025 have begun construction on the farmhouse. An assessment trip is planned for March of 2025, where we hope to meet the community members and help with the construction process. Our goal is to make significant progress on the structure by this May, and finish completely before the monsoon season begins in Nepal.</p>
    </div>
  )
}

export default Nepal