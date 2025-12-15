import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4 mx-10 text-center" id="projects">
        Projects
      </h1>
      <div className="flex mx-10">
        <Card
          isPublic={true}
          title="Unofficial AniList Clone"
          link="https://github.com/jla690/unofficial_anilist_program"
          description="Full-stack web app to retrieve and display real-time anime and manga data"
        ></Card>
        <Card
          isPublic={true}
          link="https://github.com/jla690/experience-checker"
          title="LinkedIn Experience Checker"
          description="Chrome extension to summarize YOE data in LinkedIn job postings"
        ></Card>
        <Card
          isPublic={false}
          title="Decaf Compiler (Not Public)"
          description="Fully functional compiler for the Decaf language (Java-like teaching language)"
        ></Card>
      </div>
    </div>
  );
};

export default Projects;
