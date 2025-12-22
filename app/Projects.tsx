import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4 mx-10 text-center" id="projects">
        Projects
      </h1>
      <div className="mx-10 grid grid-cols-3 gap-4 my-10">
        <Card
          isPublic={true}
          title="Unofficial AniList Clone"
          link="https://github.com/jla690/unofficial_anilist_program"
          description="Full-stack web app to retrieve and display real-time anime and manga data"
          languages={["TypeScript", "Python"]}
        ></Card>
        <Card
          isPublic={true}
          link="https://github.com/jla690/experience-checker"
          title="LinkedIn Experience Checker"
          description="Chrome extension to summarize YOE data in LinkedIn job postings"
          languages={["TypeScript"]}
        ></Card>
        <Card
          isPublic={false}
          title="Decaf Compiler (Not Public)"
          description="Fully functional compiler for the Decaf language (Java-like teaching language)"
          languages={["C++", "Yacc", "Lex"]}
        ></Card>
        <Card
          isPublic={true}
          title="Home Defense System"
          description="Project using Beaglebone Black to monitor home using a variety of different sensors"
          link="https://github.com/jla690/Home_Defense_System"
          languages={["C++", "C"]}
        ></Card>
        <Card
          isPublic={true}
          title="Item Manager"
          description="Website that can be used for cataloguing items like a store would. Uses SQLite database"
          link="https://github.com/jla690/flask-website-project"
          languages={["Python"]}
        ></Card>
      </div>
    </div>
  );
};

export default Projects;
