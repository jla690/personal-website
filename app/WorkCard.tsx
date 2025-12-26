import React from "react";

interface Props {
  jobTitle: string;
  date: string;
  description: string;
  company: string;
  languages: string[];
}

const WorkCard = ({
  jobTitle,
  date,
  description,
  company,
  languages,
}: Props) => {
  return (
    <div className="card card-border bg-base-100 w-200">
      <div className="card-body">
        <div className="card-title justify-center">{jobTitle}</div>
        <div className="flex items-end justify-between w-full">
          <div>
            {languages.map((language, i) => (
              <div
                key={i}
                className="badge badge-outline badge-warning badge-sm rounded-sm mx-1"
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
