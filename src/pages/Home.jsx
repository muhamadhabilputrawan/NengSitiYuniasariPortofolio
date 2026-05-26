import Hero from '../sections/Hero';
import About from '../sections/About';
import Education from '../sections/Education';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Organization from '../sections/Organization';
import CertificatesPreview from '../sections/CertificatesPreview';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Organization />
      <CertificatesPreview />
      <Contact />
    </div>
  );
};

export default Home;
