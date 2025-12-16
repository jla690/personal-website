import Link from "next/link";
import React from "react";

const underlineClasses: string =
  "mx-2 hover:decoration-green-400/80 max-w-0 hover:max-w-full hover:underline decoration-2 underline-offset-8 transition-all duration-300";

const Navbar = () => {
  return (
    <ul className="navbar shadow-sm flex justify-between w-full sticky top-0 z-50 bg-black/30 backdrop-blur-md transition-all duration-300 ease-in-out">
      <Link href={"/"} className="mx-2 text-xl">
        Jason Li
      </Link>
      <div className="">
        <Link href={"/#about"} className={underlineClasses}>
          About Me
        </Link>
        <Link href={"/#work"} className={underlineClasses}>
          Work History
        </Link>
        <Link href={"/#projects"} className={underlineClasses}>
          Projects
        </Link>
        <Link href={"/#resume"} className={underlineClasses}>
          Resume
        </Link>
      </div>
    </ul>
  );
};

export default Navbar;
