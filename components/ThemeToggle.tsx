import { useEffect, useState } from "react";

export default function ThemeToggle(){
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme) } catch (e) {}
  }, [theme]);

  return (
    <button
      aria-label="Toggle color theme"
      className="btn btn-ghost"
      onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
      title="Toggle theme"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
