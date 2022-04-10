import ProjectCard from "./ProjectCard";
import React, { useState } from "react";
import { Row } from "reactstrap";
import "./Projects.css";

function Projects() {
  return (
    <>
      <h1>Projects </h1>
      <Row>
        <ProjectCard />
      </Row>
    </>
  );
}

export default Projects;
