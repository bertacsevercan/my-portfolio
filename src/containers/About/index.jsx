import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Image from "react-bootstrap/Image";
import pp from "../../images/pp.jpeg";
const About = () => {
  return (
    <div className="about">
      <div className="about-text-wrapper">
        <h1>Hi there;</h1>
        <h5>My name is Bertaç Severcan and I'm happy to introduce myself:</h5>
        <p>
          I am a junior software/web developer from Istanbul, Turkey. I studied
          Management Information Systems and Teaching English As a Foreign
          Language(Double Majors) at Istanbul Bilgi University. I also attended
          and graduated from Re: Coded Web development Bootcamp(uses Flatiron
          School's curriculum) where I gained my skills in front-end web
          development.
        </p>
        <p>
          Before the Bootcamp, I started programming in Java at Bilgi
          University. Then I learned about SQL and RDBMS there. To improve my
          skills in programming, I started to learn Python myself and loved it.
          When I started the Re: Coded Bootcamp, I didn't know about web
          development and that was where I first learned about it. We started
          with HTML and CSS, then moved on with JavaScript. Lastly, we finished
          with ReactJS.
        </p>
        <p>
          In my time within the Bootcamp, I've learned many new skills and
          knowledge. I've learned about Git and VCS and how important it was for
          my career. Also, I've worked on many projects with different partners
          during this time. I even formed a group of developers from the
          Bootcamp and attended a hackathon where we got 3'rd overall with our
          web-app: M.Y-Inventory. Also, right before I joined the Bootcamp, I
          formed my online study-group called "Çaylak Kodcular"(Rookie Coders).
          It was a Discord channel open to anyone who wanted to learn about
          programming. From this experience, I've both gained a lot and I tried
          to give back too.
        </p>
        <p>
          The reason I fell in love with programming is how creative it can be,
          it allowed me to build something from nothing. I also realized when I
          started programming, I love solving problems. One time, I was working
          on a project, I spent my entire day working on solving the problem I
          had and I didn't even get bored and that's when I realized I can do
          this without hesitation.
        </p>
        <p>
          I'm interested in all sorts of development; mobile, web, software,
          video-game. But one of my goals is to build my own video-game someday.
          As you can easily guess from this, I love playing video-games but
          mostly story-driven ones.
        </p>
        <p>
          The other thing I love as much as programming is music. I play 3
          different instruments; piano, drums, guitar and I'd like to combine my
          love for programming and music one day. Oh, and I also do CrossFit and
          I have a Level-1 trainer certificate in CrossFit. But I don't want to
          be that guy who talks about CrossFit all the time so I'll stop :)
        </p>
        <p>
          So, yeah, this is me! If you want to{" "}
          <Link to="/contact">contact me</Link> and get to know me even more,
          please do!
        </p>
        <h5>
          TL;DR: I'm a junior software/web developer who is interested in both
          backend and frontend and I'm looking for work, hire me! :)
        </h5>
      </div>
      <div className="img-wrapper">
      <Image
      className="img" 
      width="50%"
      roundedCircle
      src={pp}
      />
      </div>
    </div>
  );
};

export default About;
