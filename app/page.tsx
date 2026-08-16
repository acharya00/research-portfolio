import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Activities from "./components/Activities";
import Skills from "./components/Skills";
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
      <Research />
      <Education />
      <Experience />
      <Publications />
      <Skills />
      <Activities />
      <Blog />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
