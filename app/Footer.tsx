import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const iconClassname = "hover:text-sky-400 transition-colors duration-300";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/jla690"
            aria-label="Visit my GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className={iconClassname}></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/jason-li-115732174/"
            aria-label="Connect with me on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className={iconClassname}></FaLinkedin>
          </a>
          <a
            href="mailto:jason.l.i@hotmail.com"
            aria-label="Send me an email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={24} className={iconClassname}></FaEnvelope>
          </a>
        </div>
        <div className="pt-3">© {new Date().getFullYear()} Jason Li</div>
      </nav>
    </footer>
  );
};

export default Footer;
