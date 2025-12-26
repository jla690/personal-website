import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4 mx-10 text-center" id="work">
        Work History
      </h1>
      <div className="flex flex-col items-center">
        <WorkCard
          jobTitle="Software Developer 1"
          date="January 2024 - August 2024"
          description=""
          company="Improving"
          languages={["Java", "TypeScript"]}
        ></WorkCard>
        <WorkCard
          jobTitle="Junior Software Developer"
          date="January 2022 - August 2022"
          description=""
          company="Insight Software"
          languages={["C++", "Java"]}
        ></WorkCard>
      </div>
    </div>
  );
};

export default Work;
