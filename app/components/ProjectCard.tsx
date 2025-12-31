import React from "react";
import { FaGithub } from "react-icons/fa";

interface Props {
  title: string;
  link?: string | undefined;
  isPublic: boolean;
  languages: string[];
  description: string;
}

const ProjectCard = ({
  title,
  link,
  description,
  isPublic,
  languages = [],
}: Props) => {
  return (
    <>
      <div className="card card-border bg-base-100 border-base-100 card-md hover:border-base-content transition-colors duration-100">
        {/* <div className="relative w-full h-48">
          <img></img>
        </div> */}
        <div className="card-body text-center items-end justify-between">
          <div className="w-full">
            <div className="card-title w-full text-left font-medium text-base-content">
              {title}
            </div>
            <div className="text-base-content text-left text-sm">
              {description}
            </div>
          </div>
          <div className="flex items-end justify-between w-full">
            <div className="text-xs text-base-content/50 text-left">
              {languages.join(", ")}
            </div>
            {isPublic ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Project Link"
              >
                <button className="btn btn-outline btn-primary rounded-sm duration-100">
                  <FaGithub size={14}></FaGithub>
                </button>
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
