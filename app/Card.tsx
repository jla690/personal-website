import React from "react";
import { FaGithub } from "react-icons/fa";

interface Props {
  title: string;
  link?: string | undefined;
  isPublic: boolean;
  description: string;
}

const Card = ({ title, link, description, isPublic }: Props) => {
  return (
    <>
      <div className="card card-border bg-base-200 text-neutral-content card-md w-60 ml-5 my-5 hover:bg-neutral/50 transition-colors h-64">
        <div className="card-body text-center items-center flex flex-col justify-between">
          <div>
            <div className="card-title">{title}</div>
            <div>{description}</div>
          </div>
          {isPublic ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project Link"
            >
              <button className="btn btn-outline btn-primary">
                <FaGithub size={14}></FaGithub>
              </button>
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
