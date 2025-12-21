import React from "react";

const Skills = () => {
  return (
    <div className="px-15 pb-20 max-w-4xl mx-auto">
      <h2 id="skills" className="font-bold text-2xl mb-6">
        Technical Skills
      </h2>
      <div className="space-y-3">
        <div>
          <span className="font-bold">Languages: </span>
          <span>C++, C, Java, Python, TypeScript, JavaScript, SQL</span>
        </div>
        <div>
          <span className="font-bold">Libraries/Frameworks: </span>
          <span>
            AWS SDK, Axios, FastAPI, Flask, React, Tailwind CSS, Next.js
          </span>
        </div>
        <div>
          <span className="font-bold">Testing Frameworks: </span>
          <span>JUnit, Mockito, Jest, Mocha</span>
        </div>
        <div>
          <span className="font-bold">Other Technologies: </span>
          <span>
            Git, Perforce, Linux, Amazon RDS, MySQL, PostgreSQL, GraphQL
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
