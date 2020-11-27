import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./style.css";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Bertaç Severcan</h1>
      <div className="contact-head">
        <p>
          +90-543-327-9325 | bertac.severcan@gmail.com |{" "}
          <a
            href="https://github.com/bertacsevercan"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>{" "}
          |
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/bertac-severcan/"
          >
            {" "}
            <FaLinkedinIn />{" "}
          </a>{" "}
          | Istanbul/Turkey
        </p>
      </div>
      <div className="bio-summary">
        <p>
          Full-stack web developer with a passion for problem-solving. With
          experience in Python, Java, SQL, JavaScript, and React and a
          background in Management Information Systems, I discovered web
          development through Re:Coded Web Development Bootcamp. I bring strong
          skills in team-building and creating solutions that help tech
          companies increase their values. Always open to learn new things and
          improve in every way possible.
        </p>
      </div>
    </div>
  );
};

export default Resume;
