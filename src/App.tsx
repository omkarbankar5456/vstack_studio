import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import SectionDivider from './components/SectionDivider';
import { ScrollProgress, ScrollToTop } from './components/ScrollAnimations';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Global Cursor Glow Effect */}
      <CursorGlow />

      <Navbar />
      <main>
        <Hero />
        <SectionDivider variant="gradient" />
        <Services />
        <SectionDivider variant="purple" />
        <Portfolio />
        <SectionDivider variant="blue" />
        <About />
        <SectionDivider variant="orange" />
        <Contact />
      </main>
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
