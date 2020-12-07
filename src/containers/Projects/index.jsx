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
    "Tic-Tac-Toe",
    "Rock-Paper-Scissors",
    "Smart-Calculator",
    "Tic-Tac-Toe With AI",
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
    t("projects.texts.text10"),
    t("projects.texts.text11"),
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
    "https://github.com/bertacsevercan/Rock-Paper-Scissors",
    "https://github.com/bertacsevercan/Smart-Calculator",
    "https://github.com/bertacsevercan/tic-tac-toe-with-ai",
  ];

  const linkList = [
    "https://my-inventory-demo.netlify.app/",
    "https://itsonus.netlify.app/",
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
    "Python, Argparse",
    "Python, Random module",
    "Python",
    "Python, Random module",
    "Python, Deque",
    "Python",
    "Random module",
    "Deepcopy module",
  ];

  const topicList = [
    "SCRUM, React, Firebase",
    "SCRUM, Unit Testing, Code Reviews, UI/UX Design",
    "Pair-programming, React, Firebase, Ant Design",
    "Pair-programming, Object oriented programming, Bootstrap",
    "Vanilla JavaScript, HTML and CSS, i18next, Regular Expressions",
    "REST API, Object relational mapping",
    "Matrices, Math library, Nested lists, Recursion",
    "Argparse module",
    "Functions, loops, lists and other data types, Random and Load library",
    "Error handling, Nested lists",
    "Random module, Arrays, Formatted strings",
    "Stack, Queue, Deque, Dictionaries",
    "Object oriented programming, Minimax algorithm",
  ];

  const otherProjectsRepos = [
    "https://github.com/bertacsevercan/Simple-Banking-System",
    "https://github.com/bertacsevercan/Text-Based-Browser",
    "https://github.com/bertacsevercan/Coffee-Machine",
    "https://github.com/bertacsevercan/Simple-Chat-Bot",
    "https://github.com/bertacsevercan/restaurant-res-system",
  ];

  const otherProjectsNames = [
    "Simple-Banking-System",
    "Text-Based-Browser",
    "Coffee-Machine",
    "Simple-Chat-Bot",
    "Full-Stack Restaurant Reservation App",
  ];

  const otherProjectsTech = [
    "Python, Luhn algorithm, SQL, SQLite",
    "Python, HTTP requests, HTML",
    "Python, Object oriented programming",
    "Python, Control statements",
    "Java, JDBC, MySQL, SQL, Java Swing UI",
  ];

  const otherProjectList = [];
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

  for (let i = 0; i < otherProjectsTech.length; i++) {
    otherProjectList.push({
      repo: otherProjectsRepos[i],
      name: otherProjectsNames[i],
      tech: otherProjectsTech[i],
    });
  }

  return (
    <div className="projects">
      <h1 className="title">{t("projects.titles.title0")}</h1>
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
      <div className="project-wrapper">
        <div className="otherProjects">
          <h1>{t("projects.titles.title1")}</h1>
          <ul>
            {otherProjectList.map((project) => (
              <li>
                <a
                  className="github-icon"
                  target="_blank"
                  rel="noreferrer"
                  title={t("projects.links.link0")}
                  href={project.repo}
                >
                  <b>{project.name}</b> <GoMarkGithub />
                </a>{" "}
                {t("projects.bolds.bold1")} {project.tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
