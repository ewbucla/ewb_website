import React from 'react'
import "../CSS/Guatemala.css";
import { useEffect } from "react";

function Guatemala() {
  useEffect(() => {
  window.scrollTo(0, 0); } , []);
  return (
    <div className="guatemala">
        <div className="guatemalaTitleSection">
          <div className="guatemalaOverlay"></div>
          <div className="guatemalaTitle">Guatemala</div>
          <div className="guatemalaTitle2">Rain Harvest and Water Distribution Project</div>
        </div>
        <h1 className="sectionTitles">About the Project</h1>
        <h1 className="sectionSubTitles">Phase I</h1>
        <p className="sectionParagraphs">The rural community of Chocantariy is in desperate need of clean water. Residents typically rely on filthy streams as the source for all of their water needs, including drinking, bathing, and washing clothes. Many of these streams dry up shortly after the rainy season ends because of the community’s geographic location, further placing stress on families to meet water demands. Women and young children are often burdened with the task of retrieving water multiple times each day from these streams kilometers away from their homes, drawing time away from school or other household responsibilities. Since the community receives considerable rainfall roughly half of the year, our project seeks to provide an accessible means to store this potable water for the families to use throughout the dry season.</p>
        <p className="sectionParagraphs">An extensive household survey in the community revealed that a proposed groundwater supply system is technically feasible yet financially unsustainable. The alternative of rainwater collection was investigated and successful Phases I and II of the project implementation demonstrated the feasibility and sustainability of such rainwater collection system. Phase III and IV look to build on the success of Phase I and II and establish more rainwater collection systems to accommodate more families. UCLA-EWB has partnered with CasaSito a local Guatemalan Non-Governmental Organization, to build rainwater catchment systems throughout the community of Chocantairy, Guatemala. So far we have successfully implemented thirty-three (33) rainwater collection systems that are actively in use.</p>
        <h1 className="sectionSubTitles">Phase II</h1>
        <p className="sectionParagraphs">Our evaluation will be focused on sanitation and education. During the upcoming June 2014 trip, we will take water samples to evaluate the sanitation of the water that the tanks are providing. However, our project does not focus solely on the quality of the drinking water, but also on educating the community about practicing sanitation every day. On our closing trip to Guatemala we will also evaluate the community's knowledge of sanitation practices and educate the community about sanitation by distributing pamphlets and giving presentations. Our presentation will include information about filtering and boiling the water from the tanks before consumption and the importance of washing hands. Furthermore we will be providing a step-by-step instruction manual that teaches the families how to construct and maintain a tank on their own. The instruction manual will be the picture based IKEA-like manual to avoid the language barrier. Furthermore the manual will have text accompanying each picture, as to provide more instructions to those who can read. The text will be translated from English to both Spanish and Ki’che (a native Mayan language spoken in the community). The instruction manuals will be distributed throughout the community to ensure those families who have a tank can maintain it, and those families that seek to build a tank will have easy access to a manual.</p>
        <p className="sectionParagraphs">To test the water quality of the tanks made, we will perform various tests: Coliform, E. coli, and pH. Our goal is to have these tests’ results comply with the World Health Organization standards. For E. coli, the criterion is that our samples must not have any E. coli detectable in any 100 mL sample. For treated water the same recommendation is also given for total coliform bacteria, with a provision for up to 5% positive samples within the distribution system. The rationale for this additional criterion is the greater sensitivity of total coliforms for detecting irregularities (not necessarily fecal contamination) in treatment and distribution. Safe drinking water pH levels typically fall between 6 and 8.5. We also plan to create a health survey and talk with the village community members to gauge if the number of days they are ill a year is reduced due to the water tanks constructed through the project.</p>
        <p className="sectionParagraphs">We hope that by the end of this trip, EWB-UCLA will have truly left an impact in the community of Chocantariy, Guatemala and will have given the community tools and knowledge necessary to provide clean water for a lifetime. Throughout the span of the project, the UCLA team has been so fortunate to work with such an encouraging and kind community that is eager to learn and grow. Furthermore the students in the Guatemala team have shown that they can apply their knowledge, teamwork, and perseverance to a cause that is truly worthwhile, and without the hard work of the students the project would not be where it is today.</p>
    </div>
  )
}

export default Guatemala