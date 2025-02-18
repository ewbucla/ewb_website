import React from 'react'
import { UgandaBoard } from '../Helpers/UgandaBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/Uganda.css";
import { useEffect } from "react";

function Uganda() {
  useEffect(() => {
  window.scrollTo(0, 0); } , []);
  return (
    <div className="uganda">
        <div className="ugandaTitleSection">
          <div className="ugandaOverlay"></div>
          <div className="ugandaTitle">Uganda</div>
          <div className="ugandaTitle2">Support for Better Education</div>
        </div>
        <h1 className="sectionTitles">Project Leads</h1>
        <div className="BoardList">
          {UgandaBoard.map((projectItem, key) => {
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
        <p className="sectionParagraphs">The three main goals of the Uganda Water Project is to increase water supply, improve water quality, and improve ease of access to water for the Bukonko community. Currently, the Bukonko community does not have access to clean water. People are suffering due to waterborne illnesses, and children are forced to skip school in order to travel and bring back clean water. </p>
        <h1 className="sectionTitles">About the Community</h1>
        <p className="sectionParagraphs">The Bukonko community has 1360 members, about 400 households. The current sources of drinking water are: 2 boreholes, open source (swampy area, contaminated); shallow hand-dug wells (covered, limited to certain community members); spring box (uncovered, contaminated);  and, rainwater catchment systems (privately owned). There is currently no form of water treatment. Additionally, there is no electricity or running water. </p>
        <h1 className="sectionTitles">Assessment Trips & Current State of Project</h1>
        <p className="sectionParagraphs">We traveled to the Bukonko community in spring of 2021. This was our assessment trip where we met the community, NGOs, and country office. We performed water testing to gain a better understanding of the water quality in the community. We also mapped out the community area to determine the best locations for boreholes. Additionally, we conducted household surveys to ensure we were fully aware of the community's water needs. This also helped us determine the best approach to fulfilling the community's needs. This fall we plan to complete drilling of the borehole. After drilling is complete, a pump test will be performed to determine if a motorized pump or hand pump is best. After this phase is complete, we will move onto implementing a spring box and rain catchments. </p>
    </div>
  )
}

export default Uganda
