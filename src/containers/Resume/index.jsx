import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./style.css";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();

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
          | {t("contact.texts.text0")}
        </p>
      </div>
      <div className="bio-summary">
        <p>{t("resume.texts.text0")}</p>
      </div>
    </div>
  );
};

export default Resume;
