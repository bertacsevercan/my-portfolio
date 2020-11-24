import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Jumbotron fluid className="jumbotron">
      <div className="titles">
        <h1>{t("home.titles.title0")}</h1>
        <h2>{t("home.titles.title1")}</h2>
      </div>
      <div className="summary-wrapper">
        <p className="summary-text">
          {t("home.texts.text0")}
          <br />
          {t("home.texts.text1")}
          <br />
          {t("home.texts.text2")}
          <br />
          {t("home.texts.text3")}
        </p>
      </div>
      <div className="buttons-wrapper">
        <Button className="button" as={Link} to="/projects" variant="danger">
          {t("home.buttons.button0")}
        </Button>
        <Button className="button" as={Link} to="/about" variant="danger">
          {t("home.buttons.button1")}
        </Button>
      </div>
    </Jumbotron>
  );
};

export default Home;
