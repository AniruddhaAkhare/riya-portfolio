import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Heart, Copy, Check, Sparkles } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/Icons';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [stickerHearts, setStickerHearts] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("hello@riyaumekar.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleStickerClick = () => {
    setStickerHearts(true);
    setTimeout(() => setStickerHearts(false), 2000);
  };

  return (
    <section 
      id="contact"
      style={{
        padding: '2.5rem 0 4.5rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Large Split CTA Container */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            borderRadius: '14px',
            border: '2.5px solid #121212',
            boxShadow: '8px 8px 0 #121212',
            overflow: 'hidden',
            position: 'relative'
          }}
          className="cta-split-box"
        >
          {/* Left Panel: Bright Sunshine Yellow */}
          <div 
            style={{
              backgroundColor: '#FFE500',
              padding: '2.75rem 2.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              borderRight: '2.5px solid #121212'
            }}
          >
            {/* Star Doodle in Top Left with Twinkle */}
            <div className="animate-twinkle" style={{ position: 'absolute', top: '20px', left: '25px' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 8.5L21.5 9.2L16.2 13.8L17.8 20.8L12 17.2L6.2 20.8L7.8 13.8L2.5 9.2L9.5 8.5L12 2Z" stroke="#121212" strokeWidth="2.2" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Giant Headline: LET'S CREATE SOMETHING GREAT! */}
            <div style={{ marginTop: '0.75rem' }}>
              <motion.h2 
                whileHover={{ scale: 1.02 }}
                className="font-display"
                style={{
                  fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
                  lineHeight: 0.88,
                  letterSpacing: '0.02em',
                  color: '#121212',
                  margin: 0
                }}
              >
                LET'S CREATE
              </motion.h2>

              <motion.h2 
                whileHover={{ scale: 1.02 }}
                className="font-display"
                style={{
                  fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
                  lineHeight: 0.95,
                  letterSpacing: '0.02em',
                  color: '#121212',
                  margin: 0
                }}
              >
                SOMETHING GREAT!
              </motion.h2>
            </div>

            {/* Star Doodle in Bottom Left with Twinkle */}
            <div className="animate-twinkle" style={{ position: 'absolute', bottom: '25px', left: '25px', animationDelay: '1.2s' }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 8.5L21.5 9.2L16.2 13.8L17.8 20.8L12 17.2L6.2 20.8L7.8 13.8L2.5 9.2L9.5 8.5L12 2Z" stroke="#121212" strokeWidth="2.2" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Curved Arrow pointing to Right Panel with gentle sway */}
            <motion.div 
              animate={{ x: [0, 5, 0], y: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{ alignSelf: 'flex-end', marginTop: '0.5rem' }}
            >
              <svg width="105" height="38" viewBox="0 0 100 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10C25 5 60 30 90 20" stroke="#121212" strokeWidth="2.8" strokeLinecap="round" strokeDasharray="3 3"/>
                <path d="M80 14L92 20L84 28" stroke="#121212" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>

          {/* Right Panel: Poppy Coral */}
          <div 
            style={{
              backgroundColor: '#FF4B3A',
              padding: '2.75rem 2.25rem',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Heading: LET'S CONNECT → */}
            <h3 
              className="font-heading"
              style={{
                fontSize: '1.35rem',
                fontWeight: 900,
                letterSpacing: '0.04em',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                margin: '0 0 1.5rem 0'
              }}
            >
              LET'S CONNECT →
            </h3>

            {/* Contact Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
              
              {/* Email with Click-to-Copy */}
              <div 
                onClick={handleCopyEmail}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  width: 'fit-content'
                }}
                className="cta-contact-link"
                title="Click to copy email address"
              >
                <Mail size={19} color="#FFFFFF" />
                <span>hello@riyaumekar.com</span>
                <span 
                  style={{
                    backgroundColor: copied ? '#FFE500' : 'rgba(255,255,255,0.2)',
                    color: copied ? '#121212' : '#FFFFFF',
                    fontSize: '0.68rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    fontWeight: 900,
                    marginLeft: '0.35rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {copied ? "COPIED! ✨" : "COPY"}
                </span>
              </div>

              {/* LinkedIn */}
              <motion.a 
                whileHover={{ x: 4 }}
                href="https://linkedin.com/in/riyaumekar"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  width: 'fit-content'
                }}
                className="cta-contact-link"
              >
                <LinkedinIcon size={19} color="#FFFFFF" />
                <span>linkedin.com/in/riyaumekar</span>
              </motion.a>

              {/* GitHub */}
              <motion.a 
                whileHover={{ x: 4 }}
                href="https://github.com/riyaumekar"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  width: 'fit-content'
                }}
                className="cta-contact-link"
              >
                <GithubIcon size={19} color="#FFFFFF" />
                <span>github.com/riyaumekar</span>
              </motion.a>

            </div>

            {/* Pinned White Sticker: "THANK YOU! 🤍" with Yellow Washi Tape & Heart Pop */}
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleStickerClick}
              style={{
                position: 'absolute',
                top: '25%',
                right: '25px',
                backgroundColor: '#FFFFFF',
                border: '2.5px solid #121212',
                borderRadius: '10px',
                padding: '0.75rem 1.25rem',
                boxShadow: '4px 4px 0 #121212',
                transform: 'rotate(5deg)',
                textAlign: 'center',
                userSelect: 'none',
                cursor: 'pointer'
              }}
              className="thank-you-sticker"
              title="Click me!"
            >
              {/* Yellow Washi Tape at Top */}
              <div 
                className="washi-tape-yellow"
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%) rotate(-3deg)',
                  width: '72px',
                  height: '20px',
                  zIndex: 5
                }}
              />

              <div 
                className="font-heading"
                style={{
                  fontSize: '1.08rem',
                  fontWeight: 900,
                  color: '#121212',
                  lineHeight: 1.1,
                  letterSpacing: '0.03em',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.2rem'
                }}
              >
                <span>THANK</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  YOU! <Heart size={15} fill="#FF4B3A" color="#FF4B3A" />
                </span>
              </div>

              {/* Heart Pop Animation */}
              <AnimatePresence>
                {stickerHearts && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 0 }}
                    animate={{ opacity: 1, scale: 1.3, y: -25 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-10px',
                      fontSize: '1.5rem',
                      zIndex: 20
                    }}
                  >
                    💖
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Bottom Right Smiley Doodle with Hover Wiggle */}
            <motion.div 
              whileHover={{ scale: 1.2, rotate: 20 }}
              style={{
                position: 'absolute',
                bottom: '15px',
                right: '25px',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                color: '#FFFFFF',
                cursor: 'pointer'
              }}
            >
              ☺
            </motion.div>

          </div>
        </div>

      </div>

      <style>{`
        .cta-contact-link:hover {
          text-decoration: underline;
        }
        @media (max-width: 820px) {
          .cta-split-box {
            grid-template-columns: 1fr !important;
          }
          .cta-split-box > div:first-child {
            border-right: none !important;
            border-bottom: 2.5px solid #121212 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
