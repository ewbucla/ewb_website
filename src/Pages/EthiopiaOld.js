import React from 'react'
import "../CSS/EthiopiaOld.css";
import { useEffect } from "react";

function EthiopiaOld() {
  useEffect(() => {
  window.scrollTo(0, 0); } , []);
  return (
    <div className="ethiopiaold">
        <div className="ethiopiaoldTitleSection">
          <div className="ethiopiaoldOverlay"></div>
          <div className="ethiopiaoldTitle">Ethiopia</div>
          <div className="ethiopiaoldTitle2">Support for Better Education</div>
        </div>
        <h1 className="sectionTitles">About the Project</h1>
        <p className="sectionParagraphs">School children in the rural village of Sm’echa-Zala, located in northern Ethiopia, lack the materials and resources vital to expanding their education. The local elementary school does not have a proper class setting -- missing chairs, a library, books, latrines, etc.  The community has reached out for help in improving the learning environment.</p>
        <p className="sectionParagraphs">The Engineers Without Borders student chapter at UCLA, working with the non-profit Relief Society of Tigray, plans to design and build a library in this village. The library will act not only as a place of learning for local children, but for everyone in the surrounding region.  With this one-story building, we aspire to create a library fully equipped with solar panels which will provide electricity for an e-learning center.</p>
        <p className="sectionParagraphs">We are currently raising money to fund an assessment trip to determine measurements and specifications of the project, as well as also planning community outreach presentations to spread education awareness.</p>
        <h1 className="sectionTitles">How You Can Help</h1>
        <p className="sectionParagraphs">This project will not only give meaningful experience to aspiring engineers of UCLA, but will more importantly make a lasting impact in the community of Sm’echa-Zala,Ethiopia. We appreciate any level of support in our endeavor to bring the joy of reading and education to the children of Sm’echa-Zala. Thank you for visiting our page!</p>
    </div>
  )
}

export default EthiopiaOld