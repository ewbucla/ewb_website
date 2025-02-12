import React from 'react'
import { NicaraguaBoard } from '../Helpers/NicaraguaBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/Nicaragua.css";

function Nicaragua() {
  return (
    <div className="nicaragua">
        <div className="nicaraguaTitleSection">
          <div className="nicaraguaOverlay"></div>
          <div className="nicaraguaTitle">Nicaragua</div>
          <div className="nicaraguaTitle2">Sanitation, Education & Development</div>
        </div>
        <h1 className="sectionTitles">About the Project</h1>
        <p className="sectionParagraphs">The Nicaragua Schoolhouse Project site is  located in San Sebastián, a rural town near the east coast of Nicaragua. Our goal is to build a new schoolhouse structure for educational and community uses. Throughout the construction, we will work with local residents, including people from San Sebastián and its surrounding communities: Cano Negro, Cano Azul, and Nuevo Alianza. By working with the local communities, we aim to create accessible educational institutions for all students in the region and establish a multipurpose space for the surrounding communities.</p>
        <p className="sectionParagraphs">In 2017, a team of UCLA students and professional engineers traveled to San Sebastian on an assessment trip to address these educational needs. UCLA’s Engineers Without Borders members have completed two implementation trips across a four-year period to carry on the project. We have poured all of the footings and half of the continuous concrete beam for the structure’s foundation.  </p>
        <p className="sectionParagraphs">Due to the ongoing COVID-19 pandemic, our team has decided to monitor the construction remotely, ensuring the safety of both our members and the local residents. Currently, we are working with the contractors and completing the foundation of the schoolhouse. Our first phase of remote construction will begin on March 1, 2021.</p>
        <h1 className="sectionTitles">About San Sebastián, Nicaragua</h1>
        <p className="sectionParagraphs">San Sebastián is a small community, marked with the red pin in the map above. The community of San Sebastián has a population of over 65 families, and the residents there have a literacy rate of 85%.  Each family owns approximately 10-20 manzanas (1 manzana is equal to 10,000 square meters). Being the central area of nearby communities in the region, San Sebastián is surrounded by the communities of Cano Negro, Cano Azul, and Nuevo Alianza. Bluefields is the closest city to the construction site. It takes approximately 45 minutes to travel from Bluefields to San Sebastián by car.</p>
        <p className="sectionParagraphs">The major road in the area is most conveniently used during the summer season since it floods during the rainy season. In addition, the most common form of transportation is by foot or by horse due to the predominantly agricultural economy in the area. Most families own small crops and farms (chickens, pigs, cows, etc.) or work as lumberjacks. Families in the community have access to radio and electricity (although electricity is used sparingly), and community announcements are broadcasted via radio each morning. </p>
        <p className="sectionParagraphs">Currently, the poor condition of San Sebastian’s existing schoolhouse is creating problems for the surrounding communities. There are multiple cracks allowing water leakage into the structure. Moreover, the existing schoolhouse has a  6 meter x 6 meter footprint only, forcing multiple classes to be held in the same room at the same time. These issues not only lead to a stressful learning environment but also create a challenge for the teacher and students, for both of them are easily distracted. </p>
        <p className="sectionParagraphs">Another problem discussed by the head schoolteacher in San Sebastián is student attendance. Although there are about 100 eligible students in the area, approximately 45 of the children do not attend school. Travel, distance, flood season, and a lack of time are some reasons for this lack in attendance. Many students have to work to support their families. Thus, San Sebastián is proposing to implement a new program, which is similar to a summer school or summer camp. They aim to gather all children in San Sebastian and let them stay in school for the entire week during the Christmas holiday, Holy week holiday, and Independence day holiday. However, in order to do this, San Sebastian would need to provide lodging for the surplus of students. This is another reason why San Sebastián is proposing to remodel its existing schoolhouse structure. A larger schoolhouse with a dorm & board building is in needed to accommodate all students.</p>
        <h1 className="sectionTitles">Future Plans</h1>
        <p className="sectionParagraphs">After completing the schoolhouse’s foundation with our February 2021 implementation, we aim to complete the wooden frame and roof of the structure.  We also plan to continue fundraising to complete the school as soon as possible.</p>
    </div>
  )
}

export default Nicaragua
