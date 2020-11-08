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
        <h2>I'm Bertaç Severcan</h2>
        <h3>and this is my portfolio!</h3>
      </div>
      <div className="summary-wrapper">
        <p className="summary-text">
          I'm a junior web-developer interested in technology and programming.
          <br />
          I've studied Management Information Systems and English Language
          Teaching(Double Majors) at Istanbul Bilgi University and attended Re:
          Coded Web Development Bootcamp. 
          <br />
          I have experience in programming languages such as; Python, Java, Javascript, HTML, CSS and
          I'm interested in both backend and frontend development. 
          <br />
          I love learning new things and always look for something new.
        </p>
      </div>
      <p>
        <Button as={Link} to="/about" variant="primary">
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Home;
