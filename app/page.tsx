import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import MediaJourney from "./components/MediaJourney";
import Footer from "./components/Footer";

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
      <Contact />
      <MediaJourney />
      <Footer />
    </main>
  );
}