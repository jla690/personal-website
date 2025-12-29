import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-medium mb-12">Work History</h1>
      <div className="space-y-12">
        <WorkCard
          jobTitle="Software Developer 1"
          date="January 2024 - August 2024"
          description="Worked on NodeJS and JDBC Wrappers."
          company="Improving"
          languages={["Java", "TypeScript"]}
        ></WorkCard>
        <WorkCard
          jobTitle="Junior Software Developer"
          date="January 2022 - August 2022"
          description="Worked on JDBC drivers."
          company="Insight Software"
          languages={["C++", "Java"]}
        ></WorkCard>
      </div>
    </div>
  );
};

export default Work;
