import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    id: "aiml",
    title: "AI & ML",
    subtitle: "ENGINEERING",
    color: "#FFE500",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4v1H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2v1a4 4 0 0 0 8 0v-1h2a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-2V6a4 4 0 0 0-4-4z"/>
        <path d="M9 12h6"/>
        <path d="M12 9v6"/>
      </svg>
    )
  },
  {
    id: "genai",
    title: "GENERATIVE",
    subtitle: "AI & RAG",
    color: "#2563EB",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 9h8"/>
        <path d="M8 13h5"/>
      </svg>
    )
  },
  {
    id: "agents",
    title: "AGENTIC",
    subtitle: "SYSTEMS",
    color: "#10B981",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v4"/>
        <line x1="8" y1="16" x2="8" y2="16"/>
        <line x1="16" y1="16" x2="16" y2="16"/>
      </svg>
    )
  },
  {
    id: "fullstack",
    title: "FULL STACK",
    subtitle: "ENGINEERING",
    color: "#8B5CF6",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  }
];

const Capabilities = () => {
  return (
    <section 
      id="capabilities"
      style={{
        padding: '2.75rem 0 3.25rem 0',
        borderTop: '2px solid rgba(45, 35, 20, 0.12)',
        borderBottom: '2px solid rgba(45, 35, 20, 0.12)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
          className="capabilities-wrapper"
        >
          {/* Left Title: "WHAT I DO BEST →" with hand-drawn underline */}
          <div style={{ flexShrink: 0 }}>
            <h3 
              className="font-heading"
              style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                letterSpacing: '0.04em',
                color: '#121212',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                margin: 0
              }}
            >
              WHAT I DO BEST →
            </h3>
            {/* Hand-drawn underline SVG */}
            <svg width="190" height="14" viewBox="0 0 190 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C45 4 125 2 188 9" stroke="#121212" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* 4 Capability Items */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
              flexWrap: 'wrap'
            }}
            className="capability-items-row"
          >
            {capabilities.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -4 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                className="capability-item"
              >
                {/* Circular Icon Background with Shadow and Micro-motion */}
                <motion.div 
                  whileHover={{ scale: 1.14, rotate: -6 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    border: '2.5px solid #121212',
                    boxShadow: '4px 4px 0 #121212',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.65rem',
                    transition: 'all 0.15s ease'
                  }}
                  className="capability-circle"
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <div 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.86rem',
                    fontWeight: 900,
                    lineHeight: 1.15,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    color: '#121212'
                  }}
                >
                  <div>{item.title}</div>
                  <div>{item.subtitle}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Far Right: Circular Hand-Drawn Stamp Seal with Continuous Rotation */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            style={{
              width: '88px',
              height: '88px',
              borderRadius: '50%',
              border: '2.5px dashed #121212',
              outline: '2.5px solid #121212',
              outlineOffset: '3px',
              backgroundColor: '#FFFFFF',
              boxShadow: '3px 3px 0 #121212',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              userSelect: 'none',
              cursor: 'pointer',
              flexShrink: 0
            }}
            className="animate-wobble"
          >
            <span style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              GOOD TECH
            </span>
            <span style={{ fontSize: '0.9rem', lineHeight: 1, margin: '2px 0', color: '#FF4B3A' }}>✦</span>
            <span style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              GOOD IMPACT
            </span>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .capabilities-wrapper {
            flex-direction: column;
            align-items: flex-start;
          }
          .capability-items-row {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            width: 100%;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Capabilities;
