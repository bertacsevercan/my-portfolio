import React from "react";
import "./style.css";
import projectList from "./iframes";

const Projects = () => {

  const titleList = ["M.Y-Inventory", "Madlibz"];
  const textList = ["Description goes here!", "Description goes here!"];
  const repoList = ["https://github.com/bertacsevercan/tina-zita.v2", "https://github.com/bertacsevercan/Madlibz"];

  const projectObjList = [];

  for(let i = 0; i < projectList.length; i++){
    projectObjList.push({website: projectList[i], title: titleList[i], text: textList[i], 
    repo: repoList[i]})
}

  return (
  <div className="projects">
    {projectObjList.map(project =>(
      <div className="project-wrapper"> 
      <h1>{project.title}</h1>
      <h5><a target="_blank" rel="noreferrer" title="repo link" href={project.repo}>Github repository link.</a></h5>
      {project.website}
      <p>{project.text}</p>
      </div>
    ))}
  </div>
  );
};

export default Projects;
