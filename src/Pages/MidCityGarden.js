import React from 'react'
import { MidCityGardenBoard } from '../Helpers/MidCityBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/MidCityGarden.css";
import { useEffect } from "react"; 

function MidCityGarden() {
    useEffect(() => {
    window.scrollTo(0, 0); }, []);
    return (
        <div className="MidCityGarden">
            <div className="MidCityGardenTitleSection">
                <div className = "MidCityGardenOverlay"></div>
                <div className="MidCityGardenTitle">MidCityGarden</div>
                <div className="MidCityGardenTitle2">"New Project Coming Soon."</div>
            </div>
            <h1 className="sectionTitles">Project Leads</h1>
            <div className="BoardList">
                
                </div>



    </div>
    )
}

export default MidCityGarden