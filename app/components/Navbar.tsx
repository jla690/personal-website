"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { RiExternalLinkLine } from "react-icons/ri";

const linkClasses =
  "relative mx-2 inline-flex items-center gap-1 group hover:text-base-content transition-colors";

const sections = ["about", "work", "projects"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [theme, setTheme] = useTheme();

  useEffect(() => {}, [theme]);

  useEffect(() => {
    const elements: HTMLElement[] = sections
      .map((section) => document.getElementById(section))
      .filter((element) => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.75 }
    );

    for (const element of elements) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <ul className="navbar shadow-sm flex justify-between w-full sticky top-0 z-50 text-sm bg-base-100 font-medium border-b border-base-content/20">
      <Link href="/" className="text-base-content mx-2 text-lg font-medium">
        Jason Li
      </Link>

      <div className="flex items-center text-base-content/60">
        <Link
          href="/#about"
          className={`${linkClasses} ${
            activeSection === "about"
              ? "text-base-content"
              : "text-base-content/60"
          }`}
        >
          About Me
          <span />
        </Link>

        <Link
          href="/#work"
          className={`${linkClasses} ${
            activeSection === "work"
              ? "text-base-content"
              : "text-base-content/60"
          }`}
        >
          Work History
          <span />
        </Link>

        <Link
          href="/#projects"
          className={`${linkClasses} ${
            activeSection === "projects"
              ? "text-base-content"
              : "text-base-content/60"
          }`}
        >
          Projects
          <span />
        </Link>

        <a href="/resume.pdf" target="_blank" className={linkClasses}>
          Resume
          <RiExternalLinkLine size={14} />
          <span />
        </a>
        <label className="toggle text-base-content">
          <input
            type="checkbox"
            className="theme-controller"
            aria-label="Toggle color theme"
            checked={theme === "dark"}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "lofi")}
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </ul>
  );
};

export default Navbar;
