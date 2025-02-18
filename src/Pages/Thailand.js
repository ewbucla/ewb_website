import React from 'react'
import "../CSS/Thailand.css";
import { useEffect } from "react";

function Thailand() {
  useEffect(() => {
  window.scrollTo(0, 0); } , []);
  return (
    <div className="thailand">
        <div className="thailandTitleSection">
          <div className="thailandOverlay"></div>
          <div className="thailandTitle">Thailand</div>
          <div className="thailandTitle2">Schoolhouse Project</div>
        </div>
        <h1 className="sectionTitles">About the Project</h1>
        <p className="sectionParagraphs">EWB-UCLA was recruited to assist the residents of Nor Lae by The Royal Project of Thailand after completing high-quality work elsewhere in the country. In 2008, the project was opened by Jordan Spatz and the schoolhouse was completed in 2009. The capacity of the Nor Lae school is up to 100 preschool-age students. Presently about 50 students ages four through eight are being educated in the school. The village has utilized the school’s extra space as a community center and to store medical supplies.</p>
        <p className="sectionParagraphs">The school provides the only early educational opportunity for the expanding population of village. It enables the children of Nor Lae to integrate into Thai education system. The long term goal of the school is to provide early childhood education, therefore increasing the likelihood of the pursuit of higher education which improves the socio-economic situation for the Palaung hill tribe and surrounding community.</p>
        <p className="sectionParagraphs">In June 2013, a travel team was sent to Thailand for 7 days to conduct a monitoring trip on the schoolhouse. Our goal to ensure the sustainability of this preschool so that future generations can benefit from this infrastructure was not achieved. Unfortunately, the schoolhouse was not prioritized and so the village’s resources were directed into building a road to the village temple instead.</p>
        <p className="sectionParagraphs">With the Thailand schoolhouse project completed, the Thailand project team had considered planning a drainage system around the schoolhouse as the area would flood during rainy seasons. Unfortunately, this did not end up going through, and the Thailand project is now closed.</p>
   </div>
  )
}

export default Thailand