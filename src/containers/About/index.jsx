import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Image from "react-bootstrap/Image";
import { FaHandPeace } from "react-icons/fa";
import { ImSmile2 } from "react-icons/im";
import { useTranslation } from "react-i18next";
import pp from "../../images/pp.jpeg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about-text-wrapper">
        <h1>
          {t("about.title")}
          <FaHandPeace />
        </h1>
        <h5>{t("about.headers.head0")}</h5>
        <div className="img-wrapper">
          <Image className="img" width="30%" roundedCircle src={pp} />
        </div>
        <p>{t("about.texts.text0")}</p>
        <p>{t("about.texts.text1")}</p>
        <p>{t("about.texts.text2")}</p>
        <p>{t("about.texts.text3")}</p>
        <p>{t("about.texts.text4")}</p>
        <p>
          {t("about.texts.text5")}
          <ImSmile2 />
        </p>
        <p>
          {t("about.texts.text6")}{" "}
          <Link to="/contact">{t("about.texts.text7")}</Link>{" "}
          {t("about.texts.text8")}
        </p>
        <h5>
          {t("about.headers.head1")} <ImSmile2 />
        </h5>
      </div>
    </div>
  );
};

export default About;
