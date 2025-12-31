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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    console.log(theme);
  }, [theme]);

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
        <input
          type="checkbox"
          className="toggle theme-controller"
          onChange={(e) => setTheme(e.target.checked ? "dark" : "lofi")}
        />
      </div>
    </ul>
  );
};

export default Navbar;
