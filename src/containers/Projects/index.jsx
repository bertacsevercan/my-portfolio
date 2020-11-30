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
    "Graduation-Invite-App",
    "Numeric-Matrix-Processor",
    "Loan-Credit-Calculator",
    "Hangman",
    "Tic-Tac-Toe"
  ];

  const textList = [
    t("projects.texts.text0"),
    t("projects.texts.text1"),
    t("projects.texts.text2"),
    t("projects.texts.text3"),
    t("projects.texts.text4"),
    t("projects.texts.text5"),
    t("projects.texts.text6"),
    t("projects.texts.text7"),
    t("projects.texts.text8"),
    t("projects.texts.text9"),


  ];

  const repoList = [
    "https://github.com/bertacsevercan/tina-zita.v2",
    "https://github.com/ReCoded-Org/capstone-istanbul-feed_the_needy",
    "https://github.com/bertacsevercan/weekly-workout-planner",
    "https://github.com/bertacsevercan/Movie-Project",
    "https://github.com/bertacsevercan/Madlibz",
    "https://github.com/bertacsevercan/graduation-invite-app",
    "https://github.com/bertacsevercan/Numeric-Matrix-Processor",
    "https://github.com/bertacsevercan/Credit-Calculator",
    "https://github.com/bertacsevercan/Hangman",
    "https://github.com/bertacsevercan/Tic-Tac-Toe",
  ];

  const linkList = [
    "https://my-inventory.netlify.app/",
    "https://feed-the-needy.netlify.app",
    "https://weekly-workout-planner.netlify.app/",
    "https://bertacsevercan.github.io/Movie-Project/",
    "https://bertacsevercan.github.io/Madlibz/",
  ];

  const techList = [
    "React, Firebase; Cloud Firestore, Auth, JavaScript, Netlify, Sentry.io, Ant Design, i18next, Git and GitHub",
    "React, Firebase; Cloud Firestore, Auth and Storage, JavaScript, Netlify, Ant Design, i18next, Git and GitHub, Stripe API, Wordpress API, ChartJS, Figma, localstorage",
    "React, Firebase; Cloud Firestore, JavaScript, Netlify, Ant Design",
    "JavaScript, MovieDB API, Bootstrap, HTML and CSS",
    "JavaScript, HTML, CSS, i18next, localstorage",
    "TypeScript, ExpressJS, MySQL, XAMMP, REST API, React, JavaScript, TypeORM",
    "Python",
    "Python, Argparse, Load module",
    "Python, Load module, Random module",
    "Python"
  ];

  const topicList = [
    "SCRUM, React, Firebase",
    "SCRUM, Unit Testing, Code Reviews, UI/UX Design",
    "Pair-programming, React, Firebase, Ant Design",
    "Pair-programming, Object oriented programming, Bootstrap",
    "Vanilla JavaScript, HTML and CSS, i18next, Regular Expressions",
    "REST API, Object relational mapping",
    "Matrices, Math library, Nested lists, Recursion",
    "Argparse module, Load module",
    "Functions, loops, lists and other data types, Random and Load library",
    "Error handling, Nested lists"
  ];

  const projectObjList = [];

  for (let i = 0; i < projectList.length; i++) {
    projectObjList.push({
      website: projectList[i],
      title: titleList[i],
      text: textList[i],
      repo: repoList[i],
      link: linkList[i],
      topic: topicList[i],
      tech: techList[i],
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
            {project.link ? (
              <a
                className="external-icon"
                target="_blank"
                rel="noreferrer"
                title={t("projects.links.link1")}
                href={project.link}
              >
                <GoLinkExternal />
              </a>
            ) : null}
          </h3>
          <div className="project-iframe">{project.website}</div>
          <p className="project-text">{project.text}</p>
          <div className="projects-bolds">
            <p>
              <b>{t("projects.bolds.bold0")}</b>
              {project.topic}
            </p>
            <p>
              <b>{t("projects.bolds.bold1")}</b>
              {project.tech}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
