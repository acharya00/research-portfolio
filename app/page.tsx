import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Research />
      <Projects />
      <Publications />
      <Education />
      <Experience />
      <Achievements />
      <Skills />
    </main>
  );
}