import React from "react";
import { UgandaBoard } from "../Helpers/UgandaBoard";
import ProjectItem from "../Components/ProjectItem";
import "../CSS/Uganda.css";
import { useEffect } from "react";

function Uganda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        The three main goals of the Uganda Water Project is to increase water
        supply, improve water quality, and improve ease of access to water for
        the Bukonko community, located in Iganga, Uganda. When the project began
        in 2021, the Bukonko community did not have access to clean water.
        People were suffering due to waterborne illnesses, and children were
        forced to skip school in order to travel and bring back water, often
        from contaminated open sources. In January 2024, the project
        successfully completed the drilling of a 63 meter deep borehole,
        bringing over 240,000 liters of clean water a day to the community. A
        hand pump was installed, allowing the community to pump their own water
        on demand. Currently, the project aims to install a solar powered pump
        in the borehole to increase water flow and is designing a water
        distribution system throughout the community, including a water tank,
        expanded tap stands, and a piping system. This distribution system will
        alleviate travel and walking distances that the members of the community
        face, as well as eliminating excessive queuing times that the handpump
        currently faces.
      </p>
      <h1 className="sectionTitles">About the Community</h1>
      <p className="sectionParagraphs">
        Located in Iganga, Uganda, the Bukonko community is a rural farming
        community of roughly 1360 members, consisting of about 400 households.
        The water infrastructure of the Bukonko community was once very
        unreliable and the community was getting water from contaminated open
        sources that often run dry during the dry season. Phase 1 of this
        project drilled a borehole at a centralized location providing a new,
        clean water source for the community. Although the community has a clean
        water source, the travel distance to the borehole and the wait times for
        water are substantial. Residents must walk nearly a kilometer to access
        the borehole, resulting in a round trip of about 2 kilometers that
        typically takes 30-45 minutes, predominantly undertaken by women and
        children. The containers they use to transport water weigh up to 45 lbs
        when filled with only 5 gallons of water. Additionally, wait times at
        the single tap/hand pump system may exceed up to 3 hours every day
        during peak hours, forcing many residents to leave the pump empty handed
        at night due to long queue times.
      </p>
      <h1 className="sectionTitles">
        Assessment Trips & Current State of Project
      </h1>
      <p className="sectionParagraphs">
        We traveled to the Bukonko community in spring of 2022. This was our
        assessment trip where we met the community, NGOs, and country office. We
        performed water testing to gain a better understanding of the water
        quality in the community. We also mapped out the community area to
        determine the best locations for boreholes. Additionally, we conducted
        household surveys to ensure we were fully aware of the community's water
        needs. This also helped us determine the best approach to fulfilling the
        community's needs. In January 2024, the project completed the remote
        implementation of Phase 1 of the project. A 63 meter deep borehole was
        drilled, yielding over 15 cubic meters of clear water per hour.
        Currently, the project is building upon the success of the borehole’s
        drilling and is in the process of designing and implementing a larger
        distribution system. The system consists of upgrading the current hand
        pump to a motorized pump powered by solar panels, and the construction
        of a piping system consisting of a water tank and multiple tap stands
        throughout the community, increasing overall water access.
      </p>
    </div>
  );
}

export default Uganda;
