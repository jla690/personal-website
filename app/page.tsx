import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  return (
    <div className="">
      <ul className="menu menu-horizontal lg:menu-horizontal bg-base-200 flex justify-between w-full">
        <Link href={"/"} className="mx-2">
          Jason Li
        </Link>
        <div>
          <Link href={"/about"} className="mx-2">
            About Me
          </Link>
          <Link href={"/projects"} className="mx-2">
            Projects
          </Link>
          <Link href={"/work"} className="mx-2">
            Work History
          </Link>
        </div>
      </ul>
      <div className="ml-10 my-10">
        <div>
          <h1>Jason Li</h1>
        </div>
        <div className="card text-left">
          Hi! My name is Jason Li. I am a new graduate from Simon Fraser
          Universtity with a Bachelor's degree in Software Systems.
        </div>
      </div>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
