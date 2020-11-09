import React from "react";
import "./style.css";
import projectList from "./iframes";

const Projects = () => {

  const titleList = ["Madlibs", "Movie-Project", "Weekly-Workout-Planner", "M.Y-Inventory", "Food On Coupon" ];

  const textList = ["Description goes here!", "Description goes here!", "Description goes here!",
   "Description goes here!", "Description goes here!"];

  const repoList = ["https://github.com/bertacsevercan/Madlibz", "https://github.com/bertacsevercan/Movie-Project" ,
  "https://github.com/bertacsevercan/weekly-workout-planner","https://github.com/bertacsevercan/tina-zita.v2", 
"https://github.com/ReCoded-Org/capstone-istanbul-feed_the_needy"];

  const linkList =["https://bertacsevercan.github.io/Madlibz/", "https://bertacsevercan.github.io/Movie-Project/",
  "https://weekly-workout-planner.netlify.app/", "https://my-inventory.netlify.app/", "https://feed-the-needy.netlify.app"];

  const projectObjList = [];

  for(let i = 0; i < projectList.length; i++){
    projectObjList.push({website: projectList[i], title: titleList[i], text: textList[i], 
    repo: repoList[i], link: linkList[i]})
}

  return (
  <div className="projects">
    {projectObjList.map(project =>(
      <div className="project-wrapper"> 
      <h1>{project.title}</h1>
      <h5><a target="_blank" rel="noreferrer" title="repo link" href={project.repo}>Github repository.</a></h5>
      {project.website}
      <h5><a target="_blank" rel="noreferrer" title="website link" href={project.link}>Go to website in a seperate page.</a></h5>
      <p>{project.text}</p>
      </div>
    ))}
  </div>
  );
};

export default Projects;
