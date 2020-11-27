import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
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
            title={t("contact.texts.text1")}
          >
            <FaGithub />
          </a>{" "}
          |
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/bertac-severcan/"
            title={t("contact.texts.text2")}
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
      <h6 className="techProjects-head">{t("resume.headers.head0")}</h6>
      <div className="techProject-text">
        <p>
          <b>M.Y-Inventory</b> -{" "}
          <a
            rel="noreferrer"
            target="_blank"
            title={t("projects.links.link0")}
            href="https://github.com/bertacsevercan/tina-zita.v2"
          >
            <FaGithub />
          </a>{" "}
          |{" "}
          <a
            rel="noreferrer"
            target="_blank"
            title={t("projects.links.link1")}
            href="https://my-inventory.netlify.app "
          >
            <GoLinkExternal />
          </a>
        </p>
        <p>
          <i>{t("resume.texts.text1")}</i>
        </p>
        <ul>
          <li>{t("resume.list0.li0")}</li>
          <li>{t("resume.list0.li1")}</li>
          <li>{t("resume.list0.li2")}</li>
          <li>{t("resume.list0.li3")}</li>
          <li>{t("resume.list0.li4")}</li>
          <li>{t("resume.list0.li5")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
