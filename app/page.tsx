import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      <About />
      <Education />
       <Experience />
      <Publications />
      <Research />
      <Projects />  
      <Achievements />
      <Blog />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}