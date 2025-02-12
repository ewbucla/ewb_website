import React from 'react'
import { InlandEmpireBoard } from '../Helpers/InlandEmpireBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/InlandEmpire.css";
import { useEffect } from "react";

function InlandEmpire() {
  useEffect(() => {
  window.scrollTo(0, 0); } , []);
  return (
    <div className="inland-empire">
        
    </div>
  )
}

export default InlandEmpire
