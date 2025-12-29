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
          description={["• Worked on a Java JDBC Wrapper and a NodeJS Wrapper in an agile development style", "• Wrote custom regex to support endpoints from Chinese AWS regions on JDBC Wrapper", "• Ported over 5+ plugins from JDBC Wrapper to NodeJS Wrapper, reducing feature gaps between the two", "• Added AD FS and Okta support into NodeJS Wrapper, providing additional authentication methods for users", "• Configured Github Actions integration tests to run on both LTS and latest database versions, doubling testing pipeline throughput", "• Benchmarked the NodeJS wrapper, discovering an import bottleneck that made it 100× slower than the Java wrapper implementation"]}
          company="Improving"
          languages={["Java", "TypeScript", "Amazon RDS", "Amazon Aurora"]}
        ></WorkCard>
        <WorkCard
          jobTitle="Junior Software Developer"
          date="January 2022 - August 2022"
          description={["• Developed unit tests that improved reliability of key features and reduced regressions during development", "• Worked on Primary Key/Foreign Key support for JDBC database driver, allowing for more complete SQL support", "• Collaborated with clients to discuss potential solutions for new features and bug fixes, reducing ambiguity", "• Implemented feature for automatically closing stale HTTP connections, allowing SQL queries exceeding 5 minutes to complete successfully"]}
          company="Insight Software"
          languages={["C++", "Java", "SQL", "ODBC", "JDBC"]}
        ></WorkCard>
      </div>
    </div>
  );
};

export default Work;
