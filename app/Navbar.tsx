import Link from "next/link";
import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const linkClasses = "relative mx-2 inline-flex items-center gap-2 group";

const underlineClasses =
  "absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full";

const Navbar = () => {
  return (
    <ul className="navbar shadow-sm flex justify-between w-full sticky top-0 z-50 bg-slate-900/40 backdrop-blur-md">
      <Link href="/" className="mx-2 text-xl">
        Jason Li
      </Link>

      <div className="flex items-center">
        <Link href="/#about" className={linkClasses}>
          About Me
          <span className={underlineClasses} />
        </Link>

        <Link href="/#work" className={linkClasses}>
          Work History
          <span className={underlineClasses} />
        </Link>

        <Link href="/#projects" className={linkClasses}>
          Projects
          <span className={underlineClasses} />
        </Link>

        <a href="/resume.pdf" target="_blank" className={linkClasses}>
          Resume
          <RiExternalLinkLine size={18} />
          <span className={underlineClasses} />
        </a>
      </div>
    </ul>
  );
};

export default Navbar;
