import React from "react";

interface Props {
  jobTitle: string;
  date: string;
  description: string[];
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
    <div className="border-l-2 pl-6">
      <div className="flex-1">
        <div className="text-base-content card-title text-xl font-medium mb-1">
          {jobTitle}
        </div>
        <div className="text-base-content/60 mb-1">{company}</div>
        <div className="text-base-content/60 mb-3 text-sm">{date}</div>
        <div className="text-sm text-base-content/50 mb-2">
          {languages.join(", ")}
        </div>
        <div className="text-base-content/60">
          {description.map((line, i) => (
            <p key={i} className="mb-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
