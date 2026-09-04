import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Sparkles } from 'lucide-react';
import StickerStampBar from '../components/StickerStampBar';

const stampSkills = [
  { label: "PROBLEM SOLVER", color: "#FFE500" },
  { label: "FAST LEARNER", color: "#89B9F9" },
  { label: "TEAM PLAYER", color: "#A7F3D0" },
  { label: "CLEAN CODE", color: "#FF8073" },
  { label: "LIFELONG LEARNER", color: "#DDD6FE" }
];

const About = () => {
  const [activeSticky, setActiveSticky] = useState(0);

  const stickyNotes = [
    "Currently building: Autonomous RAG agents with LangGraph 🤖",
    "Favorite book: Designing Data-Intensive Applications 📚",
    "Go-to stack: React + FastAPI + PyTorch + ChromaDB ⚡",
    "Daily fuel: 2 cups of filter coffee & Lo-fi beats ☕"
  ];

  return (
    <section 
      id="about"
      style={{
        padding: '3.5rem 0 4.5rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Three-Column Notebook Scrapbook Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '260px 1.4fr 260px',
            gap: '2rem',
            alignItems: 'center',
            position: 'relative'
          }}
          className="about-scrapbook-grid"
        >
          {/* Column 1: "about me!" + Polaroid with Washi Tape */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Handwritten "about me!" + Curved Arrow */}
            <div style={{ alignSelf: 'flex-start', marginBottom: '0.4rem', position: 'relative' }}>
              <div 
                className="font-hand"
                style={{
                  fontSize: '1.7rem',
                  fontWeight: 700,
                  color: '#121212',
                  lineHeight: 1
                }}
              >
                about me!
              </div>
              {/* Hand-drawn arrow pointing down with sway */}
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              >
                <svg width="38" height="28" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '1.5rem' }}>
                  <path d="M5 2C15 15 25 18 30 24" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 3"/>
                  <path d="M22 25L32 24L30 14" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>

            {/* Polaroid Frame with Hover Lift & Shadow Expansion */}
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.05, y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '240px',
                backgroundColor: '#FAF5EB',
                padding: '12px 12px 28px 12px',
                border: '2.5px solid #121212',
                boxShadow: '5px 5px 0 #121212',
                borderRadius: '4px',
                transform: 'rotate(-3deg)',
                cursor: 'pointer'
              }}
              className="polaroid-frame"
            >
              {/* Yellow Washi Tape on top with slight tilt */}
              <div 
                className="washi-tape-yellow"
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(2deg)',
                  width: '95px',
                  height: '24px',
                  zIndex: 5
                }}
              />

              {/* Photo */}
              <div 
                style={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  overflow: 'hidden',
                  backgroundColor: '#E2E8F0',
                  border: '1.5px solid #121212',
                  borderRadius: '2px'
                }}
              >
                <img 
                  src="/riya_about.jpg" 
                  alt="Riya Umekar at desk"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%'
                  }}
                  onError={(e) => {
                    e.target.src = '/riya_polaroid.jpg';
                  }}
                />
              </div>

              {/* Caption on Polaroid Bottom */}
              <div 
                className="font-hand"
                style={{
                  textAlign: 'center',
                  marginTop: '8px',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#121212'
                }}
              >
                riya // code & coffee ✨
              </div>
            </motion.div>

          </div>

          {/* Column 2: Center Ruled Notebook Note with Paperclip */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="notebook-note"
            style={{
              padding: '2.25rem 2rem 1.85rem 2rem',
              backgroundColor: '#FFFFFF',
              position: 'relative'
            }}
          >
            {/* Red Paperclip Illustration in Top Left with Playful Sway */}
            <motion.div 
              whileHover={{ rotate: [-5, 5, -5] }}
              style={{
                position: 'absolute',
                top: '-18px',
                left: '25px',
                zIndex: 10,
                cursor: 'pointer'
              }}
            >
              <svg width="26" height="46" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12V32C7 35.3137 9.68629 38 13 38C16.3137 38 19 35.3137 19 32V8C19 4.68629 16.3137 2 13 2C9.68629 2 7 4.68629 7 8V28C7 29.6569 8.34315 31 10 31C11.6569 31 13 29.6569 13 28V12" stroke="#FF4B3A" strokeWidth="2.8" strokeLinecap="round"/>
              </svg>
            </motion.div>

            {/* Top Heading */}
            <div 
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.08rem',
                fontWeight: 800,
                color: '#121212',
                marginBottom: '1.1rem',
                lineHeight: 1.35,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                flexWrap: 'wrap'
              }}
            >
              <span>AI/ML Engineer | Full Stack Developer |</span>
              <span>Generative AI Enthusiast</span>
              <Heart size={16} fill="#FF4B3A" color="#FF4B3A" style={{ display: 'inline' }} />
            </div>

            {/* Body Paragraph */}
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#121212',
                marginBottom: '1.6rem',
                fontWeight: 500
              }}
            >
              I love building practical AI powered products that solve real-world problems. From intelligent systems to delightful user experiences, I enjoy turning ideas into impactful solutions.
            </p>

            {/* Bottom: 5 Scalloped Postage-Stamp Skill Tags with Spring Hover */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem'
              }}
            >
              {stampSkills.map((s, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.1, y: -3, rotate: (idx % 2 === 0 ? 2 : -2) }}
                  whileTap={{ scale: 0.95 }}
                  className="postage-stamp"
                  style={{
                    backgroundColor: s.color,
                    color: '#121212',
                    cursor: 'pointer'
                  }}
                >
                  {s.label}
                </motion.div>
              ))}
            </div>

            {/* Interactive Sticky Snippet Switcher */}
            <div 
              onClick={() => setActiveSticky((activeSticky + 1) % stickyNotes.length)}
              style={{
                marginTop: '1.25rem',
                padding: '0.5rem 0.85rem',
                backgroundColor: 'var(--bg-paper)',
                border: '1.5px dashed #121212',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                userSelect: 'none'
              }}
              title="Click to see another note!"
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#121212' }}>
                <span style={{ color: '#2563EB', fontWeight: 900 }}>NOTE:</span> {stickyNotes[activeSticky]}
              </div>
              <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#6B7280' }}>
                CLICK FOR MORE ➔
              </div>
            </div>

          </motion.div>

          {/* Column 3: Pinned "what's up" Note with Blue Washi Tape */}
          <motion.div 
            whileHover={{ rotate: 0, scale: 1.04, y: -4 }}
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '2.5px solid #121212',
              padding: '1.75rem 1.4rem 1.4rem 1.4rem',
              boxShadow: '5px 5px 0 #121212',
              borderRadius: '6px',
              transform: 'rotate(2deg)',
              cursor: 'default'
            }}
            className="whats-up-note"
          >
            {/* Blue Washi Tape at Top */}
            <div 
              className="washi-tape-blue"
              style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%) rotate(-1deg)',
                width: '100px',
                height: '24px',
                zIndex: 5
              }}
            />

            {/* Heading: "what's up" */}
            <div 
              className="font-hand"
              style={{
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#121212',
                borderBottom: '2px solid #121212',
                paddingBottom: '0.3rem',
                marginBottom: '0.95rem'
              }}
            >
              what's up
            </div>

            {/* Bullet List */}
            <ul 
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#121212',
                lineHeight: 1.45
              }}
            >
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#2563EB' }}>•</span> Building cool stuff
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#10B981' }}>•</span> Learning everyday
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#FF4B3A' }}>•</span> Exploring AI & LLMs
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: '#8B5CF6' }}>•</span> Turning caffeine into code ☕
              </li>
            </ul>

            {/* Bottom Right Squiggle Doodle with Sway */}
            <div style={{ textAlign: 'right', marginTop: '0.6rem' }}>
              <svg width="42" height="18" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C10 2 20 14 30 5C35 1 38 12 39 8" stroke="#121212" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>

          </motion.div>

        </div>

        {/* Interactive Sticker Stamp Reaction Bar */}
        <StickerStampBar />

      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-scrapbook-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
