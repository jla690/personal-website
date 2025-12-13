import React from "react";

interface Props {
  title: string;
  description: string;
}

const Card = ({ title, description }: Props) => {
  return (
    <div className="card card-border bg-neutral text-neutral-content card-md w-60 ml-5 my-5 hover:bg-neutral/50 transition-colors">
      <div className="card-body text-center items-center">
        <div className="card-title">{title}</div>
        <div>{description}</div>
      </div>
      <div className="justify-end card-actions mx-3 my-3">
        <button className="btn btn-primary">Link</button>
      </div>
    </div>
  );
};

export default Card;
