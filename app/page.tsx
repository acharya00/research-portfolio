import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import MediaJourney from "./components/MediaJourney";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <About />
      <Research />
      <Projects />
      <Publications />
      <Education />
      <Experience />
      <Achievements />
      <Blog />
      <MediaJourney />
      <Contact />
      <Footer />
    </main>
  );
}