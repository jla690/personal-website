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
  return <div className="card card-border"></div>;
};

export default WorkCard;
