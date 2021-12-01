import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined, GithubOutlined } from "@ant-design/icons";

const Project = ({ name, desc, live, code }) => {
  return (
    <div id="main">
      <div id="pro">
        <div id="project">{name}</div>
        <div id="btn">
          <Button
            style={{
              minWidth: "6rem",
              marginTop: "5px",
              color:"red",
              border:"red"
            }}
            type="primary"
            ghost
            className="button"
          >
            <a href={live} target="_blank" rel="noreferrer">
              Demo
              <ArrowRightOutlined />
            </a>
          </Button>
          <Button
            style={{
              minWidth: "6rem",
              marginTop: "5px",
              color:"red",
              border:"red"
            }}
            type="primary"
            ghost
            className="button"
          >
            <a href={code} target="_blank" rel="noreferrer">
              <GithubOutlined />
              Code
            </a>
          </Button>
        </div>
      </div>
      <p id="about_project">{desc}</p>
    </div>
  );
};

export default Project;
