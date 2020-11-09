import React from "react";
import "./style.css";
import projectList from "./iframes";

const Projects = () => {
  const titleList = [
    "Madlibs",
    "Movie-Project",
    "Weekly-Workout-Planner",
    "M.Y-Inventory",
    "Food On Coupon",
  ];

  const textList = [
    "This is the first project that I've worked on during the time of the Re: Coded Bootcamp. The purpose of the website is to play mad libs. It also has Turkish and English language support. It can save your words by using local storage.  For the first time, I did pair programming and worked on a project with a partner (Hello Knar!) and it was my first ever vanilla JavaScript, HTML, CSS project. Also, it was the first time that I learned about and worked with regular expressions, i18next library, local storage. The style of the project was purely CSS. I didn't use any frameworks for styling. Overall, I had so much fun with this project and learned a lot too.",
    "Description goes here!",
    "Description goes here!",
    "Description goes here!",
    "Description goes here!",
  ];

  const repoList = [
    "https://github.com/bertacsevercan/Madlibz",
    "https://github.com/bertacsevercan/Movie-Project",
    "https://github.com/bertacsevercan/weekly-workout-planner",
    "https://github.com/bertacsevercan/tina-zita.v2",
    "https://github.com/ReCoded-Org/capstone-istanbul-feed_the_needy",
  ];

  const linkList = [
    "https://bertacsevercan.github.io/Madlibz/",
    "https://bertacsevercan.github.io/Movie-Project/",
    "https://weekly-workout-planner.netlify.app/",
    "https://my-inventory.netlify.app/",
    "https://feed-the-needy.netlify.app",
  ];

  const projectObjList = [];

  for (let i = 0; i < projectList.length; i++) {
    projectObjList.push({
      website: projectList[i],
      title: titleList[i],
      text: textList[i],
      repo: repoList[i],
      link: linkList[i],
    });
  }

  return (
    <div className="projects">
      <h1 className="title">My Projects</h1>
      {projectObjList.map((project) => (
        <div className="project-wrapper">
          <h1>{project.title}</h1>
          <h5>
            <a
              target="_blank"
              rel="noreferrer"
              title="repo link"
              href={project.repo}
            >
              Github repository.
            </a>
          </h5>
          {project.website}
          <h5>
            <a
              target="_blank"
              rel="noreferrer"
              title="website link"
              href={project.link}
            >
              Go to website in a seperate page.
            </a>
          </h5>
          <p>{project.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
