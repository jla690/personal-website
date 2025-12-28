import Link from "next/link";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Work from "./Work";
import Description from "./Description";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="" id="about">
        <Description></Description>
      </div>
      <div className="bg-gray-50 py-20">
        <Skills></Skills>
      </div>
      <div className="py-24 px-6" id="work">
        <Work></Work>
      </div>
      <div className="bg-gray-50 py-20 px-20" id="projects">
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </div>
  );
}
