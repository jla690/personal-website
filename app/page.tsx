import Link from "next/link";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Description from "./components/Description";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg-base-100" id="about">
        <Description></Description>
      </div>
      <div className="bg-base-200 py-20">
        <Skills></Skills>
      </div>
      <div className="bg-base-100 py-24 px-6" id="work">
        <Work></Work>
      </div>
      <div className="bg-base-200 py-20 px-20" id="projects">
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </div>
  );
}
