import React from "react";

type Props = {
  title: string;
  description: string;
  tech?: string[];
  live?: string;
  repo?: string;
};

export default function ProjectCard({ title, description, tech = [], live, repo }: Props){
  return (
    <article className="card" aria-labelledby={`proj-${title.replace(/\s+/g,"-")}`}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"start", gap:12}}>
        <div>
          <div className="meta small">Project</div>
          <h3 id={`proj-${title.replace(/\s+/g,"-")}`} className="title">{title}</h3>
        </div>
      </div>

      <p className="desc" style={{marginTop:6}}>{description}</p>

      <div className="tags" aria-hidden={tech.length === 0}>
        {tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      <div className="card-foot">
        {live && <a className="btn" href={live} target="_blank" rel="noopener noreferrer">View</a>}
        {repo && <a className="btn btn-ghost" href={repo} target="_blank" rel="noopener noreferrer">Code</a>}
      </div>
    </article>
  );
}
