import React from "react";
import "./About.scss";
import astro from "../../assets/astro.png";
const About = () => {
  return (
    <div className="about">
      <p className="about__info">About Our Company</p>
      <img alt="someImage.png" className="about__image" src={astro} />
      <a href="/">Learn More!</a>
    </div>
  );
};

export default About;
