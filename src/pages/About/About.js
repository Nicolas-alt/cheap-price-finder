import React from "react";
import "./About.scss";
import Card from "./Card/Card";

const About = () => {
  return (
    <div className="about___container">
      <h2 className="about___title">About Project</h2>
      <div className="about___paragraph">
        <p className="paragraph">
          This project is a product searcher, and it has a particular function
          of filtering so many prices in Internet and to show the user the most
          low.
          This project was developed by two enthusiasts developers, by the way
          look for us in:
          <br />
          <span className="paragraph__icons">
            <i className="fab fa-github-alt github"></i>
            <i className="fab fa-twitter twitter"></i>
          </span>
        </p>
      </div>
      <h2 className="about___title">Colaborators</h2>
      <div className="cards___container">
        <Card name="Daniel Páez" skill="Frontend Developer"/>
        <Card name="Nicolás Jimenez" skill="Full Stack Developer" />
      </div>
    </div>
  );
};

export default About;
