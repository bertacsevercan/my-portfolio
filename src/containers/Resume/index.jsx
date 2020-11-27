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
            href="https://my-inventory.netlify.app"
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
      <div className="techProject-text">
        <p>
          <b>It's On Us</b> -{" "}
          <a
            rel="noreferrer"
            target="_blank"
            title={t("projects.links.link0")}
            href="https://github.com/ReCoded-Org/capstone-istanbul-feed_the_needy"
          >
            <FaGithub />
          </a>{" "}
          |{" "}
          <a
            rel="noreferrer"
            target="_blank"
            title={t("projects.links.link1")}
            href="https://feed-the-needy.netlify.app"
          >
            <GoLinkExternal />
          </a>
        </p>
        <p>
          <i>{t("resume.texts.text2")}</i>
        </p>
        <ul>
          <li>{t("resume.list1.li0")}</li>
          <li>{t("resume.list1.li1")}</li>
          <li>{t("resume.list1.li2")}</li>
          <li>{t("resume.list1.li3")}</li>
          <li>{t("resume.list1.li4")}</li>
          <li>{t("resume.list1.li5")}</li>
          <li>{t("resume.list1.li6")}</li>
          <li>{t("resume.list1.li7")}</li>
        </ul>
      </div>
      <div className="techProject-text">
        <p>
          <b>Weekly Workout Planner</b> -{" "}
          <a
            rel="noreferrer"
            target="_blank"
            title={t("projects.links.link0")}
            href="https://github.com/bertacsevercan/weekly-workout-planner"
          >
            <FaGithub />
          </a>{" "}
          |{" "}
          <a
            rel="noreferrer"
            target="_blank"
            title={t("projects.links.link1")}
            href="https://weekly-workout-planner.netlify.app"
          >
            <GoLinkExternal />
          </a>
        </p>
        <p>
          <i>{t("resume.texts.text3")}</i>
        </p>
        <ul>
          <li>{t("resume.list2.li0")}</li>
          <li>{t("resume.list2.li1")}</li>
          <li>{t("resume.list2.li2")}</li>
        </ul>
      </div>
      <h6 className="techProjects-head">{t("resume.headers.head1")}</h6>
      <p className="techSkill-text">SQL, JavaScript, React, Java, Python</p>
      <h6 className="techProjects-head">{t("resume.headers.head2")}</h6>
      <div className="techProject-text">
        <p>
          <b>ECOSERV</b>, {t("resume.employment.company0.city")},{" "}
          {t("resume.employment.company0.country")}
          <a
            rel="noreferrer"
            target="_blank"
            title={t("resume.employment.company0.website")}
            href="http://ecoserv.com.tr/tr/Default.aspx"
          >
            <GoLinkExternal />
          </a>
        </p>
        <p>
          {t("resume.employment.company0.position")},{" "}
          <i>{t("resume.employment.company0.date")}</i>
        </p>
        <ul>
          <li>{t("resume.list3.li0")}</li>
          <li>{t("resume.list3.li1")}</li>
        </ul>
      </div>
      <h6 className="techProjects-head">{t("resume.headers.head3")}</h6>
    </div>
  );
};

export default Resume;
