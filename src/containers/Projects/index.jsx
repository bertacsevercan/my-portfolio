import React from "react";
import projectList from "./iframes";
import { GoLinkExternal, GoMarkGithub } from "react-icons/go";
import "./style.css";

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
    "This is the second project that I've worked on during the Re: Coded Bootcamp with a partner (Hello Tarkan!). This project was similar to the IMDb website which you can search for movies, actors and see popular movies, tv shows etc. In this project, I've used object-oriented programming and used MovieDb API to fetch the necessary movie data. Also, I used vanilla JavaScript, HTML and Bootstrap with CSS for styling. Overall, this project was more challenging than the previous Madlibs however; I was able to overcome the difficulties.",
    "This is the third project that I've worked on during the Re: Coded Bootcamp with my bro Ihab (Hello Ihab!). The purpose of this project was to create a board app which is similar to a to-do app. We decided to do a weekly-workout-planning app. In this project, I've used ReactJS for the first time and it was such a good practice for me to understand React. I've also used Ant Design to style the application. Also, I've used Google's Firebase to store user data. Overall, this project was challenging but so much fun and full of learning experience.",
    "With this application my team and I won the 3'rd place in Impact Hub Innovation Hackathon 2020. At the moment you can't reach this website without an authorized account. This is the first project that I worked on as a group of 5 people and it was outside of Re: Coded Bootcamp. I've formed a team of 5 people from the bootcamp and attended the Impact Hub Innovation Hackathon 2020. As a group we used SCRUM for the first time to develop our application rapidly in 3 weeks. The application's purpose was to manage the inventory of a restaurant (Tina Zita). We were using React for development, Firebase to store data, Ant Design for styling and Sentry.io to catch crashes. Our goal was to make M.Y-Inventory easy to use and we also added an enhanced mobile user experience for  different possible use cases. The application also supports three different languages; English, Turkish and Arabic with fully responsive design. Overall, this project was outside of my comfort zone but it was fun to put myself out there and I learned a lot thanks to this project.",
    "This is the last project that I've worked on during the Re: Coded Bootcamp. It is the capstone project and I've worked with a group of four people. The purpose of this website was to collect food coupon donations for the people in need. This project was the closest one to a real-life company project because we had a lead-engineer and we used SCRUM for development. We used ReactJS for development, Firebase to store data and Ant Design for styling. We've used iyzico API to handle payments, ChartJS for graphs, Wordpress API for our blog, i18next for language support and Redux for global states. We've also worked with a UI/UX designer for our designs and used Figma. Overall, this project was challenging but great as a good learning experience.",
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
      <h1 className="title">My projects</h1>
      {projectObjList.map((project) => (
        <div className="project-wrapper">
          <h1>{project.title}</h1>
          <h3>
            <a
              className="github-icon"
              target="_blank"
              rel="noreferrer"
              title="Github repository"
              href={project.repo}
            >
              <GoMarkGithub />
            </a>
            <a
              className="external-icon"
              target="_blank"
              rel="noreferrer"
              title="Open website in a seperate page"
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
