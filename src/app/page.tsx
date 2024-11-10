import Hero from "@/components/Hero";
import Image from "next/image";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Skills from "./skills/page";



export default function Home() {
  return (
    <div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}
