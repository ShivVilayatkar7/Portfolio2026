import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Services from "../sections/Services";
import Achievements from "../sections/Achievements";
import Certifications from "../sections/Certifications";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <main className="bg-[#14081F] text-white overflow-x-hidden">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Services />
      <Achievements />
      <Certifications />
      <Resume />
      <Contact />

      <Footer />
    </main>
  );
};

export default Home;