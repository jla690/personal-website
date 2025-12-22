import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type HeroProps = {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({
  title = "Hi — I'm Jake. I build reliable production systems and polished web experiences.",
  subtitle = "I help teams ship resilient TypeScript apps and streamline front-end DX. Currently open to senior engineering & consulting opportunities.",
  primaryCta = { label: "View my work", href: "#projects" },
  secondaryCta = { label: "Download resume", href: "/resume.pdf" }
}: HeroProps){
  return (
    <header className="container">
      <a href="#main" className="skip-link">Skip to content</a>

      <div className="header" role="banner">
        <Link href="/" className="brand">
          <div className="logo">J</div>
          <div>
            <div style={{fontWeight:700}}>Jake Larsen</div>
            <div style={{fontSize:12, color:"var(--muted)"}}>Engineer • Frontend • Systems</div>
          </div>
        </Link>

        <div style={{display:"flex", gap:12, alignItems:"center"}}>
          <ThemeToggle />
        </div>
      </div>

      <div className="hero" aria-labelledby="site-title">
        <div className="hero-content">
          <h1 id="site-title">{title}</h1>
          <p>{subtitle}</p>

          <div style={{display:"flex", gap:12, marginTop:12}}>
            <a className="btn btn-primary" href={primaryCta.href}>{primaryCta.label}</a>
            <a className="btn btn-ghost" href={secondaryCta.href}>{secondaryCta.label}</a>
          </div>
        </div>

        <div style={{width:320, minWidth:240}}>
          <div style={{
            background: "linear-gradient(180deg, rgba(11,99,216,0.06), rgba(10,163,163,0.03))",
            borderRadius:12,
            padding:18,
            height:180,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            gap:8
          }}>
            <div style={{fontWeight:700}}>Open to work</div>
            <div className="small">Consulting, contract, or full-time — I enjoy improving reliability and UX.</div>
            <div style={{marginTop:12}}>
              <a className="btn btn-primary" href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
