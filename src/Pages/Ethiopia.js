import React from 'react'
import { EthiopiaBoard } from '../Helpers/EthiopiaBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/Ethiopia.css";
import { useEffect } from "react";

function Ethiopia() {
  useEffect(() => {
  window.scrollTo(0, 0); } , []);
  return (
    <div className="ethiopia">
        <div className="ethiopiaTitleSection">
          <div className="ethiopiaOverlay"></div>
          <div className="ethiopiaTitle">Ethiopia</div>
          <div className="ethiopiaTitle2">Water Access & Education</div>
        </div>
        <h1 className="sectionTitles">Project Leads</h1>
        <div className="BoardList">
          {EthiopiaBoard.map((projectItem, key) => {
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
        <p className="sectionParagraphs">We are grateful for your interest in learning about our education and sanitation project for Dire Dawa, Ethiopia through Engineering a Better World at UCLA. Having partnered and received a grant from United Support of Artists for Africa, we have traveled to Dire Dawa and identified an integral project to greatly improve sanitation and clean-water access within a primary school of 1200 children and teachers. Our project has three goals: the design and construction of 8 latrines, the installation of a new water tank to maintain latrine cleanliness and increase water access, and the creation of a digital library to serve students in all of Dire Dawa’s most common languages. As we finalize our designs and plan for implementation, we are excited to share more information about out project and our engineers.</p>
        <h1 className="sectionTitles">About the community</h1>
        <p className="sectionParagraphs">Dire Dawa (ድሬዳዋ) is a diverse city in eastern Ethiopia with a population of around 450,000. Its establishment dates back to 1902 when it became a major stop on the new railway line connecting the Ethiopian capital, Addis Ababa, to its neighboring country, Djibouti. Dire Dawa remains a major transportation hub, especially for the holy Islamic city Harar about 30 miles away. The Dachatu Wadi (river) running through Dire Dawa separates the city into two regions: Kezira, the colonial style quarter with European influence, and Megaala, the old islamic quarter with a large Muslim population. The melting pot of Dire Dawa stands as a testament to Ethiopia's rich cultural heritage and progressive development.</p>
        <h1 className="sectionTitles">Assessment Trips & Current State of Project</h1>
        <p className="sectionParagraphs">In January of 2023, we were invited by USAFA and the Dire Dawa community to start a major partnership between our organization, Engineering a Better World at UCLA, and the Dire Dawa community. As part of this collaboration, our team visited Dire Dawa, located in Eastern Ethiopia, with the purpose of identifying the community’s most pressing infrastructure needs.</p>
        <p className="sectionParagraphs">During our visit, we had the privilege of engaging in a week-long collaboration with various key stakeholders, including the Ethiopian Ministry of Education, the UN Representative for African Economic Development, senior management from Dire Dawa University, local school principals, and members of the Dire Dawa community. This collaboration proved to be highly successful and resulted in the inception of several infrastructure projects.</p>
        <p className="sectionParagraphs">Among these projects, one stands out as particularly crucial: the construction of a latrine at a local public school in Dire Dawa. This is the specific initiative for which we are currently seeking fundraising support. We believe that addressing the sanitation needs of this school is of utmost importance, and we invite you to join us in making a positive impact on the lives of the students and the entire Dire Dawa community.</p>
        <p className="sectionParagraphs">It is also kind of included in initial paragraph if this is too long, but please let me know if there is anything else needed, I can definitely change things up but I'm not sure the length we're looking for.</p>
    </div>
  )
}

export default Ethiopia