import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CaseStudy from '../components/CaseStudy1';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="case-study">
        <CaseStudy />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}