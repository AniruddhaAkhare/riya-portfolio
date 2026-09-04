import React from 'react';
import { motion } from 'framer-motion';

const ExperienceEducationAchievements = () => {
  return (
    <section 
      id="experience"
      style={{
        padding: '3.25rem 0 4.5rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Three Column Grid matching Reference */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1.15fr',
            gap: '2.5rem',
            alignItems: 'flex-start'
          }}
          className="three-column-grid"
        >
          
          {/* Column 1: EXPERIENCE → */}
          <div>
            <h3 
              className="font-heading"
              style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#121212',
                marginBottom: '1.75rem',
                letterSpacing: '0.04em'
              }}
            >
              EXPERIENCE →
            </h3>

            {/* Timeline Item */}
            <motion.div 
              whileHover={{ x: 3 }}
              style={{ position: 'relative', paddingLeft: '1.5rem' }}
            >
              {/* Vertical Guide Line */}
              <div 
                style={{
                  position: 'absolute',
                  left: '5px',
                  top: '8px',
                  bottom: '0',
                  width: '2px',
                  backgroundColor: '#E5E7EB'
                }}
              />

              {/* Yellow Dot with Glow Pulse */}
              <div 
                style={{
                  position: 'absolute',
                  left: '0px',
                  top: '5px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#FFE500',
                  border: '2px solid #121212',
                  boxShadow: '0 0 6px rgba(255, 229, 0, 0.6)'
                }}
              />

              {/* Role & Company with Fireblaze logo badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', fontWeight: 900, color: '#121212', lineHeight: 1.2 }}>
                    Full Stack Developer Intern
                  </h4>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4B5563', margin: '0.15rem 0' }}>
                    Fireblaze AI School
                  </div>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#6B7280', marginBottom: '0.65rem' }}>
                    Jun 2025 – Dec 2025
                  </div>
                </div>

                {/* Fireblaze Stylized Badge with Hover Wiggle */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    backgroundColor: '#FFEBE8',
                    border: '1.5px solid #FF4B3A',
                    borderRadius: '4px',
                    padding: '0.25rem 0.5rem',
                    textAlign: 'center',
                    flexShrink: 0,
                    boxShadow: '2px 2px 0 rgba(255, 75, 58, 0.2)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '0.85rem' }}>🔥</div>
                  <div style={{ fontSize: '0.55rem', fontWeight: 900, color: '#FF4B3A', lineHeight: 1 }}>FIREBLAZE</div>
                  <div style={{ fontSize: '0.48rem', fontWeight: 700, color: '#6B7280', lineHeight: 1 }}>AI SCHOOL</div>
                </motion.div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.84rem', lineHeight: 1.55, color: '#374151', fontWeight: 500 }}>
                Built full-stack applications, real-time features, integrated AI solutions & optimized performance across products.
              </p>
            </motion.div>
          </div>

          {/* Column 2: EDUCATION → */}
          <div id="education">
            <h3 
              className="font-heading"
              style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                color: '#121212',
                marginBottom: '1.75rem',
                letterSpacing: '0.04em'
              }}
            >
              EDUCATION →
            </h3>

            {/* Timeline Item */}
            <motion.div 
              whileHover={{ x: 3 }}
              style={{ position: 'relative', paddingLeft: '1.5rem' }}
            >
              {/* Vertical Guide Line */}
              <div 
                style={{
                  position: 'absolute',
                  left: '5px',
                  top: '8px',
                  bottom: '0',
                  width: '2px',
                  backgroundColor: '#E5E7EB'
                }}
              />

              {/* Green Dot with Glow Pulse */}
              <div 
                style={{
                  position: 'absolute',
                  left: '0px',
                  top: '5px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  border: '2px solid #121212',
                  boxShadow: '0 0 6px rgba(16, 185, 129, 0.6)'
                }}
              />

              {/* Degree & Institute */}
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', fontWeight: 900, color: '#121212', lineHeight: 1.2 }}>
                B.Tech in Information Technology
              </h4>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4B5563', margin: '0.15rem 0' }}>
                Prof. Ram Meghe Institute, Amravati
              </div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#6B7280', marginBottom: '0.65rem' }}>
                2022 – 2026
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.84rem', lineHeight: 1.55, color: '#374151', fontWeight: 500 }}>
                Building strong foundation in CS, AI/ML & modern technologies.
              </p>

              {/* Graduation Cap Doodle Icon with Gentle Float */}
              <div className="animate-float" style={{ textAlign: 'right', marginTop: '0.75rem' }}>
                <svg width="45" height="34" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 5L3 14L22.5 23L42 14L22.5 5Z" stroke="#121212" strokeWidth="2.2" fill="#FFFFFF" strokeLinejoin="round"/>
                  <path d="M10 18V26C10 26 14 30 22.5 30C31 30 35 26 35 26V18" stroke="#121212" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
                  <path d="M38 16V28" stroke="#121212" strokeWidth="2.2" strokeLinecap="round"/>
                  <circle cx="38" cy="29" r="2" fill="#121212"/>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Column 3: ACHIEVEMENTS → */}
          <div id="achievements" style={{ position: 'relative' }}>
            
            {/* Header + Red Hand-Drawn Star Doodle with Twinkle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
              <h3 
                className="font-heading"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  color: '#121212',
                  letterSpacing: '0.04em',
                  margin: 0
                }}
              >
                ACHIEVEMENTS →
              </h3>

              {/* Red Star Doodle with Twinkle */}
              <div className="animate-twinkle">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.8 8.2L21.5 8.9L16.4 13.4L17.9 20L12 16.5L6.1 20L7.6 13.4L2.5 8.9L9.2 8.2L12 2Z" stroke="#FF4B3A" strokeWidth="2.2" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* 3 Trophy Badges in Row with Hover Spring */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.85rem'
              }}
            >
              {/* Achievement 1 */}
              <motion.div 
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.15 }}
                style={{
                  backgroundColor: '#FAF5EB',
                  border: '2px solid #121212',
                  borderRadius: '6px',
                  padding: '0.85rem 0.4rem',
                  textAlign: 'center',
                  boxShadow: '3px 3px 0 #121212',
                  cursor: 'default'
                }}
              >
                {/* Hand-Drawn Trophy Illustration */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto 0.35rem auto' }}>
                  <path d="M8 6H24V14C24 18.4 20.4 22 16 22C11.6 22 8 18.4 8 14V6Z" fill="#FFE500" stroke="#121212" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M8 8H4C3 8 2 9 2 10V11C2 13.8 4.2 16 7 16H8" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M24 8H28C29 8 30 9 30 10V11C30 13.8 27.8 16 25 16H24" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 22V26M11 28H21" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                </svg>

                <div style={{ fontSize: '0.76rem', fontWeight: 900, color: '#121212', lineHeight: 1.1 }}>
                  Winner
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#2563EB', marginTop: '0.15rem' }}>
                  SRIJAN'26
                </div>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>
                  Hackathon
                </div>
              </motion.div>

              {/* Achievement 2 */}
              <motion.div 
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.15 }}
                style={{
                  backgroundColor: '#FAF5EB',
                  border: '2px solid #121212',
                  borderRadius: '6px',
                  padding: '0.85rem 0.4rem',
                  textAlign: 'center',
                  boxShadow: '3px 3px 0 #121212',
                  cursor: 'default'
                }}
              >
                {/* Trophy */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto 0.35rem auto' }}>
                  <path d="M8 6H24V14C24 18.4 20.4 22 16 22C11.6 22 8 18.4 8 14V6Z" fill="#FFE500" stroke="#121212" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M8 8H4C3 8 2 9 2 10V11C2 13.8 4.2 16 7 16H8" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M24 8H28C29 8 30 9 30 10V11C30 13.8 27.8 16 25 16H24" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 22V26M11 28H21" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                </svg>

                <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#121212', lineHeight: 1.1 }}>
                  2nd Runner Up
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#FF4B3A', marginTop: '0.15rem' }}>
                  TECHSPRINT
                </div>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>
                  Hackathon
                </div>
              </motion.div>

              {/* Achievement 3 */}
              <motion.div 
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.15 }}
                style={{
                  backgroundColor: '#FAF5EB',
                  border: '2px solid #121212',
                  borderRadius: '6px',
                  padding: '0.85rem 0.4rem',
                  textAlign: 'center',
                  boxShadow: '3px 3px 0 #121212',
                  cursor: 'default'
                }}
              >
                {/* Trophy */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto 0.35rem auto' }}>
                  <path d="M8 6H24V14C24 18.4 20.4 22 16 22C11.6 22 8 18.4 8 14V6Z" fill="#FFE500" stroke="#121212" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M8 8H4C3 8 2 9 2 10V11C2 13.8 4.2 16 7 16H8" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M24 8H28C29 8 30 9 30 10V11C30 13.8 27.8 16 25 16H24" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 22V26M11 28H21" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
                </svg>

                <div style={{ fontSize: '0.76rem', fontWeight: 900, color: '#121212', lineHeight: 1.1 }}>
                  Winner
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#10B981', marginTop: '0.15rem' }}>
                  INNOVO'25
                </div>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>
                  Hackathon
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .three-column-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceEducationAchievements;
