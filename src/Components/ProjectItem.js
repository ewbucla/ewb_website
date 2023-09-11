import React from 'react'

function ProjectItem({id, image, name, major, meetingTimes, description}) {
  const divClick = () => {  // incase ever need to add on click feature
    console.log("you just clicked");
  };
  return (
    <div className="projectItem" onClick={divClick}>
      <div className="image" style={{ backgroundImage: `url(${image})`}}>
        <div className="divText">
        {meetingTimes}
        </div>
      </div>
      <h1> {name} </h1>
      <p> {description} </p>
      <p> {major} </p>
    </div>
  )
}

export default ProjectItem