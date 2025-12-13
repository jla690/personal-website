import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/jla690">
            <FaGithub size={24}></FaGithub>
          </a>
          <a href="https://www.linkedin.com/in/jason-li-115732174/">
            <FaLinkedin size={24}></FaLinkedin>
          </a>
          <a href="mailto:jason.l.i@hotmail.com">
            <FaEnvelope size={24}></FaEnvelope>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
