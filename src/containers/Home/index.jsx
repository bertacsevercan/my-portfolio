import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Jumbotron fluid className="jumbotron">
      <div className="titles">
        <h1>Hello, world!</h1>
        <h2>My name is Bertaç Severcan,</h2>
      </div>
      <div className="summary-wrapper">
        <p className="summary-text">
          I'm a junior software/web-developer interested in technology and
          programming.
          <br />
          I've studied Management Information Systems and English Language
          Teaching (Double Majors) at Istanbul Bilgi University and attended the
          Re:Coded Web Development Bootcamp.
          <br />
          I have experience in programming languages such as: Python, Java,
          Javascript, HTML, CSS, SQL and I'm interested in both backend and
          frontend development.
          <br />I love learning new things and am always looking for something
          new.
        </p>
      </div>
      <div className="buttons-wrapper">
      <Button className="button" as={Link} to="/projects" variant="danger">
          Check out my projects
        </Button>
        <Button className="button" as={Link} to="/about" variant="danger">
          Learn more about me
        </Button>
        </div>
    </Jumbotron>
  );
};

export default Home;
