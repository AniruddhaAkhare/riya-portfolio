import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight, Zap, Sparkles, Terminal, Heart, Coffee, Award, Send } from 'lucide-react';
import AIAgentPlayground from '../components/AIAgentPlayground';

const Hero = () => {
  const [catPurr, setCatPurr] = useState(false);
  const [coffeeBoost, setCoffeeBoost] = useState(false);
  const [energyLevel, setEnergyLevel] = useState(98);

  const handleCatClick = () => {
    setCatPurr(true);
    setTimeout(() => setCatPurr(false), 2400);
  };

  const handleCoffeeClick = () => {
    setCoffeeBoost(true);
    setEnergyLevel(prev => Math.min(prev + 10, 150));
    setTimeout(() => setCoffeeBoost(false), 2000);
  };

  return (
    <section 
      id="home"
      style={{
        position: 'relative',
        padding: '2.5rem 0 3.5rem 0',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        {/* Two Column Grid matching Reference */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '2.5rem',
            alignItems: 'center',
            position: 'relative'
          }}
          className="hero-grid"
        >
          {/* Left Column: Typography & Information */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            
            {/* Top Left: Smiley Doodle + "ENGINEERING with purpose" + Curved Arrow */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem',
                position: 'relative'
              }}
            >
              {/* Hand-drawn Smiley Circle Doodle with Hover Bounce */}
              <motion.div
                whileHover={{ scale: 1.18, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '2.5px solid #121212',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '3px 3px 0 #121212',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.45rem',
                  lineHeight: 1,
                  userSelect: 'none',
                  cursor: 'pointer'
                }}
                className="animate-wobble"
              >
                ☺
              </motion.div>

              {/* Text: ENGINEERING with purpose */}
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.1 }}>
                  ENGINEERING
                </div>
                <div className="font-hand" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-ink-soft)', lineHeight: 1 }}>
                  with purpose
                </div>
              </div>

              {/* Hand-drawn Curved Arrow pointing down with gentle sway */}
              <motion.div
                animate={{ y: [0, 3, 0], x: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <svg width="48" height="34" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '0.5rem', transform: 'rotate(10deg)' }}>
                  <path d="M5 10C15 8 30 14 38 24" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3"/>
                  <path d="M28 25L40 25L38 13" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>

            {/* Giant Coral Red "HELLO!" */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 
                className="font-display"
                style={{
                  fontSize: 'clamp(4.8rem, 10vw, 8.5rem)',
                  lineHeight: 0.85,
                  letterSpacing: '0.02em',
                  color: '#FF4B3A',
                  margin: 0,
                  textShadow: '3px 3px 0 rgba(18,18,18,0.08)'
                }}
              >
                HELLO!
              </h1>
            </motion.div>

            {/* "I'M ✱" with Animated Spinning Asterisk */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                margin: '0.1rem 0'
              }}
            >
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(3.8rem, 8vw, 6.8rem)',
                  lineHeight: 0.85,
                  letterSpacing: '0.01em',
                  color: '#121212',
                  margin: 0
                }}
              >
                I'M
              </h2>
              {/* Bold Black 8-Point Asterisk with subtle spin animation */}
              <motion.span 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                  color: '#121212',
                  lineHeight: 0.8,
                  fontWeight: 900,
                  transformOrigin: 'center center'
                }}
              >
                ✱
              </motion.span>
            </div>

            {/* "RIYA UMEKAR" Massive Bold Black Heading */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 
                className="font-display"
                style={{
                  fontSize: 'clamp(4.8rem, 11.5vw, 9.5rem)',
                  lineHeight: 0.82,
                  letterSpacing: '0.01em',
                  color: '#121212',
                  margin: 0,
                  textTransform: 'uppercase'
                }}
              >
                RIYA UMEKAR
              </h1>
            </motion.div>

            {/* Yellow Highlight Rectangle Box with Gentle Float */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              style={{
                marginTop: '1.4rem',
                backgroundColor: '#FFE500',
                border: '2.5px solid #121212',
                borderRadius: '8px',
                padding: '0.75rem 1.35rem',
                boxShadow: '4px 4px 0 #121212',
                transform: 'rotate(-1deg)',
                display: 'inline-block',
                maxWidth: '540px'
              }}
              className="animate-wobble"
            >
              <p 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
                  fontWeight: 800,
                  color: '#121212',
                  lineHeight: 1.35,
                  margin: 0
                }}
              >
                I build intelligent AI systems & digital<br />
                experiences that connect & convert.
              </p>
            </motion.div>

            {/* Location Card & Action Buttons */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginTop: '1.75rem'
              }}
            >
              {/* White Location Card with Animated Pulse Indicator */}
              <motion.div 
                whileHover={{ y: -3 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #121212',
                  padding: '0.55rem 1rem',
                  borderRadius: '6px',
                  boxShadow: '3px 3px 0 #121212'
                }}
              >
                <Globe size={22} color="#121212" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.2 }}>
                  <div>BASED IN</div>
                  <div style={{ color: '#2563EB' }}>MAHARASHTRA, INDIA 🌐</div>
                  <div style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
                    OPEN TO OPPORTUNITIES
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#work" 
                  className="btn-brutal btn-brutal-blue"
                >
                  VIEW MY WORK →
                </motion.a>

                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="btn-brutal btn-brutal-white"
                >
                  LET'S CONNECT ✦
                </motion.a>
              </div>
            </div>

            {/* Small Floating Scrapbook Note in Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.25rem',
                backgroundColor: '#FFFFFF',
                border: '1.5px dashed #121212',
                padding: '0.3rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.74rem',
                fontWeight: 800,
                color: '#121212'
              }}
            >
              <span style={{ color: '#FF4B3A' }}>⚡</span>
              <span className="font-hand" style={{ fontSize: '1rem', fontWeight: 700 }}>
                LangChain • PyTorch • RAG Pipelines • Full Stack
              </span>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual with Sunshine Yellow Blob & Coder Illustration */}
          <div 
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '500px'
            }}
          >
            {/* Crown Doodle in Top Right with Gentle Float */}
            <div 
              className="animate-float"
              style={{
                position: 'absolute',
                top: '5px',
                right: '35px',
                zIndex: 15
              }}
            >
              <svg 
                width="44" 
                height="32" 
                viewBox="0 0 50 35" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'rotate(15deg)' }}
              >
                <path d="M5 28L10 10L25 22L40 10L45 28Z" stroke="#121212" strokeWidth="2.5" fill="#FFE500" strokeLinejoin="round"/>
                <circle cx="10" cy="8" r="2.5" fill="#121212"/>
                <circle cx="25" cy="8" r="2.5" fill="#121212"/>
                <circle cx="40" cy="8" r="2.5" fill="#121212"/>
              </svg>
            </div>

            {/* Sparkle / Star Doodles with Twinkle Animation */}
            <div className="animate-twinkle" style={{ position: 'absolute', top: '15px', left: '12%', fontSize: '1.6rem', fontWeight: 900, color: '#121212', zIndex: 12 }}>
              ✦
            </div>
            <div className="animate-twinkle" style={{ position: 'absolute', top: '40px', right: '12px', fontSize: '1.3rem', fontWeight: 900, color: '#2563EB', zIndex: 12, animationDelay: '1s' }}>
              ✧
            </div>
            <div className="animate-twinkle" style={{ position: 'absolute', bottom: '70px', right: '10px', fontSize: '1.6rem', fontWeight: 900, color: '#FF4B3A', zIndex: 12, animationDelay: '0.5s' }}>
              ✦
            </div>

            {/* Sunshine Yellow Organic / Blob Shape with Breathing Scale */}
            <motion.div 
              animate={{ 
                scale: [1, 1.025, 1],
                rotate: [-4, -3, -4]
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '470px',
                aspectRatio: '1 / 1',
                backgroundColor: '#FFE500',
                border: '3px solid #121212',
                borderRadius: '52% 48% 60% 40% / 45% 55% 45% 55%',
                boxShadow: '7px 7px 0 #121212',
                zIndex: 1
              }}
            />

            {/* Main Coder Girl Pixel Illustration (Clickable Easter Egg!) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={handleCatClick}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                zIndex: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Click on the desk for a cute easter egg!"
            >
              <img 
                src="/riya_coder.png" 
                alt="Riya Umekar - AI/ML Engineer"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(4px 4px 0px rgba(18,18,18,0.25))',
                  userSelect: 'none'
                }}
              />

              {/* Cat Purr Easter Egg Bubble */}
              <AnimatePresence>
                {catPurr && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -15, scale: 1 }}
                    exit={{ opacity: 0, y: -25, scale: 0.8 }}
                    style={{
                      position: 'absolute',
                      bottom: '80px',
                      right: '30px',
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #121212',
                      borderRadius: '12px',
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      boxShadow: '3px 3px 0 #121212',
                      zIndex: 30,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span>🐱 purr~ code compiles!</span>
                    <Heart size={14} fill="#FF4B3A" color="#FF4B3A" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Red Sticker: "AI IS MY SUPERPOWER" with Lightning Bolt and Float Animation */}
            <motion.div
              initial={{ scale: 0.9, rotate: 6 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              style={{
                position: 'absolute',
                top: '16%',
                right: '-12px',
                zIndex: 20,
                backgroundColor: '#FF4B3A',
                color: '#FFFFFF',
                padding: '0.65rem 1.15rem',
                borderRadius: '10px',
                border: '2.5px solid #121212',
                outline: '3px solid #FFFFFF',
                boxShadow: '5px 5px 0 #121212',
                transform: 'rotate(8deg)',
                cursor: 'pointer',
                userSelect: 'none'
              }}
              className="animate-float"
            >
              <div 
                className="font-display"
                style={{
                  fontSize: '1.45rem',
                  lineHeight: 1,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}
              >
                AI IS MY<br />SUPERPOWER
              </div>

              {/* Yellow Lightning Bolt underneath with Glow Pulse */}
              <div 
                className="animate-pulse-lightning"
                style={{ position: 'absolute', bottom: '-24px', right: '15px' }}
              >
                <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2L3 18H15L12 34L27 15H14L16 2Z" fill="#FFE500" stroke="#121212" strokeWidth="2.5" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>

            {/* Mini Floating Sticky Note on Desk */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.08 }}
              style={{
                position: 'absolute',
                bottom: '15px',
                left: '-15px',
                backgroundColor: '#FFF8B0',
                border: '2px solid #121212',
                borderRadius: '4px',
                padding: '0.4rem 0.75rem',
                boxShadow: '3px 3px 0 #121212',
                transform: 'rotate(-6deg)',
                fontSize: '0.74rem',
                fontWeight: 900,
                zIndex: 10,
                cursor: 'default'
              }}
            >
              <div style={{ color: '#2563EB' }}>✦ DAILY GOAL</div>
              <div className="font-hand" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#121212' }}>
                ship clean models
              </div>
            </motion.div>

            {/* Interactive Coffee Mug with Animated Steam Waves & Energy Boost Easter Egg */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: -4 }}
              onClick={handleCoffeeClick}
              style={{
                position: 'absolute',
                bottom: '18px',
                right: '40px',
                backgroundColor: '#FFE500',
                border: '2px solid #121212',
                borderRadius: '8px',
                padding: '0.4rem 0.7rem',
                boxShadow: '3px 3px 0 #121212',
                cursor: 'pointer',
                zIndex: 25,
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
              title="Click to drink coffee! (+10 Energy)"
            >
              {/* Rising Steam Waves */}
              <div style={{ position: 'relative', display: 'flex', gap: '3px' }}>
                <span className="animate-steam-1" style={{ fontSize: '0.9rem', color: '#8B5CF6', fontWeight: 900, display: 'inline-block' }}>~</span>
                <span className="animate-steam-2" style={{ fontSize: '0.9rem', color: '#FF4B3A', fontWeight: 900, display: 'inline-block' }}>~</span>
                <span className="animate-steam-3" style={{ fontSize: '0.9rem', color: '#2563EB', fontWeight: 900, display: 'inline-block' }}>~</span>
              </div>
              <span style={{ fontSize: '1rem' }}>☕</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: 900 }}>{energyLevel}% FUEL</span>
            </motion.div>

            {/* Floating Coffee Energy Boost Popup */}
            <AnimatePresence>
              {coffeeBoost && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -25, scale: 1.1 }}
                  exit={{ opacity: 0, y: -45, scale: 0.8 }}
                  style={{
                    position: 'absolute',
                    bottom: '65px',
                    right: '35px',
                    backgroundColor: '#FFE500',
                    border: '2px solid #121212',
                    borderRadius: '6px',
                    padding: '0.3rem 0.65rem',
                    fontSize: '0.78rem',
                    fontWeight: 900,
                    boxShadow: '3px 3px 0 #121212',
                    zIndex: 35,
                    whiteSpace: 'nowrap'
                  }}
                >
                  ⚡ +10 COFFEE ENERGY!
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating Scrapbook Pointer Badge: B.E IT 26, 8.86 cgpa */}
            <motion.div
              className="animate-float"
              style={{
                position: 'absolute',
                top: '-18px',
                left: '20px',
                backgroundColor: '#FAF5EB',
                border: '2px dashed #121212',
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                boxShadow: '3px 3px 0 #121212',
                fontSize: '0.74rem',
                fontWeight: 900,
                zIndex: 12,
                transform: 'rotate(-4deg)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span style={{ color: '#2563EB' }}>✦ B.E IT 26,</span>
              <span style={{ color: '#10B981' }}>8.86 CGPA</span>
              {/* Pointer indicator / arrow */}
              <span style={{ fontSize: '0.85rem', color: '#FF4B3A', transform: 'rotate(45deg)', display: 'inline-block' }}>➤</span>
            </motion.div>

            {/* Floating Scrapbook Badge 2: 4x Hackathon Winner */}
            <motion.div
              className="animate-float-reverse"
              style={{
                position: 'absolute',
                bottom: '-12px',
                right: '-10px',
                backgroundColor: '#FFEBE8',
                border: '2px solid #FF4B3A',
                padding: '0.35rem 0.75rem',
                borderRadius: '20px',
                boxShadow: '3px 3px 0 #121212',
                fontSize: '0.74rem',
                fontWeight: 900,
                zIndex: 12,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                transform: 'rotate(3deg)'
              }}
            >
              <Award size={14} color="#FF4B3A" />
              <span>4x HACKATHON WINNER 🏆</span>
            </motion.div>

          </div>
        </div>

        {/* Animated Flying Paper Airplane with Trailing Flight Loop */}
        <div 
          className="animate-plane"
          style={{
            position: 'absolute',
            top: '20px',
            right: '25%',
            zIndex: 12,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <svg width="70" height="24" viewBox="0 0 70 24" fill="none">
            <path d="M2 18 C 25 2, 45 22, 68 8" stroke="#121212" strokeWidth="1.8" strokeDasharray="3 3" />
          </svg>
          <span style={{ fontSize: '1.4rem', transform: 'rotate(15deg)', display: 'inline-block' }}>✈</span>
        </div>

        {/* Innovative Live AI Agent Prompt Terminal Widget */}
        <AIAgentPlayground />

      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
