import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Project Atlas",
    description: "A resilient micro-frontends platform with incremental static rendering and CI observability.",
    tech: ["TypeScript","Next.js","Kubernetes"],
    live: "https://example.com",
    repo: "https://github.com/jla690/atlas"
  },
  {
    title: "Internal Metrics UI",
    description: "High-throughput dashboard for SLOs and incident timelines with role-based access.",
    tech: ["React","GraphQL","Postgres"],
    live: "",
    repo: ""
  },
  {
    title: "Marketing Site",
    description: "Fast, accessible marketing site with optimized images and strong SEO.",
    tech: ["Next.js","Vercel","OG images"],
    live: "",
    repo: ""
  }
];

export default function Home(){
  return (
    <main id="main" style={{paddingBottom:60}}>
      <Hero />
      <section className="container" aria-labelledby="projects-heading" style={{paddingTop:8}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom:12}}>
          <h2 id="projects-heading" style={{margin:0}}>Selected projects</h2>
          <a className="small" href="/projects">See all</a>
        </div>
        <div className="grid" id="projects" style={{marginTop:8}}>
          {projects.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
