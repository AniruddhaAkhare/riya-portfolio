import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import MarqueeRibbon from './sections/MarqueeRibbon';
import Capabilities from './sections/Capabilities';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import TerminalIntro from './components/TerminalIntro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <TerminalIntro onComplete={() => setShowIntro(false)} />}

      <motion.div 
        className="portfolio-wrapper" 
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <Navigation />

        <main style={{ flexGrow: 1 }}>
          <Hero />
          
          {/* Animated Marquee Ribbon 1 */}
          <MarqueeRibbon 
            text="AI/ML ENGINEER ✻ GENERATIVE AI & RAG ✻ AGENTIC SYSTEMS ✻ FULL STACK DEVELOPER ✻ PYTHON & PYTORCH ✻ DEPLOYING INTELLIGENCE ✻ "
            bgColor="#FFE500"
            textColor="#121212"
          />

          <Capabilities />
          <About />
          <Projects />

          {/* Animated Marquee Ribbon 2 */}
          <MarqueeRibbon 
            text="✦ BUILD ✦ TEST ✦ DEPLOY ✦ SOLVE REAL PROBLEMS ✦ CLEAN ARCHITECTURES ✦ INNOVATE CONTINUOUSLY ✦ COFFEE & CODE ☕ ✦ "
            bgColor="#FF4B3A"
            textColor="#FFFFFF"
            reverse={true}
          />

          <Experience />
          <TechStack />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}

export default App;
