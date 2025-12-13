import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="flex">
        <Card
          title="Unofficial AniList Clone"
          description="Full-stack web app to retrieve and display real-time anime and manga data"
        ></Card>
        <Card
          title="LinkedIn Experience Checker"
          description="Chrome extension to summarize YOE data in LinkedIn job postings"
        ></Card>
        <Card
          title="Decaf Compiler"
          description="Fully functional compiler for the Decaf language(Java-like teaching language)"
        ></Card>
      </div>
    </div>
  );
};

export default Projects;
