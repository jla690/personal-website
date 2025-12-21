import React from "react";
import { FaGithub } from "react-icons/fa";

interface Props {
  title: string;
  link?: string | undefined;
  isPublic: boolean;
  languages: string[];
  description: string;
}

const Card = ({ title, link, description, isPublic, languages }: Props) => {
  return (
    <>
      <div className="card card-border bg-base-100 text-neutral-content card-md hover:bg-neutral transition-colors rounded-sm">
        <div className="card-body text-center items-end justify-between">
          <div className="w-full">
            <div className="card-title w-full justify-center">{title}</div>
            <div className="text-center justify-center">{description}</div>
          </div>
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
            {isPublic ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Project Link"
              >
                <button className="btn btn-outline btn-primary rounded-sm">
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

export default Card;
