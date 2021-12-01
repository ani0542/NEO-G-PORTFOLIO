import React from "react";
import "./About.css";
import Resume from "../../resume/new resume.pdf";
import Skill from "../../components/Skills/Skill";
import ani from "../../images/ani.jpg";

const desc = [
  `Creative Front-End Developer  providing high-impact web
  solutions for diverse industry organizations.
  Skilled in designing, developing and testing
  multiple web-based applications incorporating a
  range of technologies. Aspiring to combine
  broad background with strong technical skills to
  excel as a Front-End Developer.`
];
const About = () => {
  return (
    <div id="about">
      <div>
        <img id="dp" src={ani} alt="" />
      </div>
      <div id="desc">
        <h1>About Me</h1>
        {desc.map((des, id) => (
          <h3 key={id} style={{ fontWeight: 700 }}>
            {des}
          </h3>
        ))}
        <h2 style={{ fontWeight: 700 }}>My Expertise</h2>

        <h3 style={{ fontWeight: 700 }}>
          Full Stack Enginner with primary focus on React and JavaScript:{" "}
          <a href={Resume} target="#">
            View Resume
          </a>
        </h3>
        {/* <Skill /> */}
      </div>
    </div>
  );
};

export default About;
