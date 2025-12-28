import Link from "next/link";
import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const linkClasses =
  "relative mx-2 inline-flex items-center gap-1 group hover:text-black";

const Navbar = () => {
  return (
    <ul className="navbar shadow-sm flex justify-between w-full sticky top-0 z-50 px-80 text-sm bg-base-100">
      <Link href="/" className="mx-2 text-lg font-medium">
        Jason Li
      </Link>

      <div className="flex items-center text-gray-500">
        <Link href="/#about" className={linkClasses}>
          About Me
          <span />
        </Link>

        <Link href="/#work" className={linkClasses}>
          Work History
          <span />
        </Link>

        <Link href="/#projects" className={linkClasses}>
          Projects
          <span />
        </Link>

        <a href="/resume.pdf" target="_blank" className={linkClasses}>
          Resume
          <RiExternalLinkLine size={14} />
          <span />
        </a>
      </div>
    </ul>
  );
};

export default Navbar;
