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
      <div className="bg-base-100">
        <Description></Description>
      </div>
      <div className="bg-base-200 py-20">
        <Skills></Skills>
      </div>
      <Work></Work>
      <div className="bg-base-200 py-20 px-20">
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </div>
  );
}
