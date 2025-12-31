import React from "react";

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto text-base-content">
      <h2 id="skills" className="font-medium text-3xl mb-6">
        Technical Skills
      </h2>
      <div className="space-y-3 grid grid-cols-2 gap-8">
        <div>
          <div className="font-semibold">Languages: </div>
          <div className="text-sm">
            C++, C, Java, Python, TypeScript, JavaScript, SQL
          </div>
        </div>
        <div>
          <div className="font-semibold">Libraries/Frameworks: </div>
          <div className="text-sm">
            AWS SDK, Axios, FastAPI, Flask, React, Tailwind CSS, Next.js
          </div>
        </div>
        <div>
          <div className="font-semibold">Testing Frameworks: </div>
          <div className="text-sm">JUnit, Mockito, Jest, Mocha</div>
        </div>
        <div>
          <div className="font-semibold">Other Technologies: </div>
          <div className="text-sm">
            Git, Perforce, Linux, Amazon RDS, MySQL, PostgreSQL, GraphQL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
