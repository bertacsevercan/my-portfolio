import React from "react";
import projectList from "./iframes";
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";
import "./style.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const titleList = [
    "M.Y-Inventory",
    "It's On Us",
    "Weekly-Workout-Planner",
    "Movie-Project",
    "Madlibs",
  ];

  const textList = [
    t("projects.texts.text0"),
    t("projects.texts.text1"),
    t("projects.texts.text2"),
    t("projects.texts.text3"),
    t("projects.texts.text4"),
  ];

  const repoList = [
    "https://github.com/bertacsevercan/tina-zita.v2",
    "https://github.com/ReCoded-Org/capstone-istanbul-feed_the_needy",
    "https://github.com/bertacsevercan/weekly-workout-planner",
    "https://github.com/bertacsevercan/Movie-Project",
    "https://github.com/bertacsevercan/Madlibz",
  ];

  const linkList = [
    "https://my-inventory.netlify.app/",
    "https://feed-the-needy.netlify.app",
    "https://weekly-workout-planner.netlify.app/",
    "https://bertacsevercan.github.io/Movie-Project/",
    "https://bertacsevercan.github.io/Madlibz/",
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
      <h1 className="title">{t("projects.title")}</h1>
      {projectObjList.map((project) => (
        <div className="project-wrapper">
          <h1>{project.title}</h1>
          <h3>
            <a
              className="github-icon"
              target="_blank"
              rel="noreferrer"
              title={t("projects.links.link0")}
              href={project.repo}
            >
              <GoMarkGithub />
            </a>
            <a
              className="external-icon"
              target="_blank"
              rel="noreferrer"
              title={t("projects.links.link1")}
              href={project.link}
            >
              <GoLinkExternal />
            </a>
          </h3>
          {project.website}
          <p>{project.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
