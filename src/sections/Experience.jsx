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
              💼 EXPERIENCE →
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* Internship 1: Fireblaze AI School */}
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
                    bottom: '-25px',
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', fontWeight: 900, color: '#121212', lineHeight: 1.2 }}>
                      Full Stack Developer Intern
                    </h4>
                    <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#2563EB', margin: '0.15rem 0' }}>
                      Fireblaze AI School
                    </div>
                    <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#6B7280' }}>
                      June 2025 – December 2025
                    </div>
                  </div>

                  {/* Fireblaze Stylized Badge with Hover Wiggle */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      backgroundColor: '#FFEBE8',
                      border: '1.5px solid #FF4B3A',
                      borderRadius: '4px',
                      padding: '0.2rem 0.45rem',
                      textAlign: 'center',
                      flexShrink: 0,
                      boxShadow: '2px 2px 0 rgba(255, 75, 58, 0.2)'
                    }}
                  >
                    <div style={{ fontSize: '0.8rem' }}>🔥</div>
                    <div style={{ fontSize: '0.52rem', fontWeight: 900, color: '#FF4B3A', lineHeight: 1 }}>FIREBLAZE</div>
                  </motion.div>
                </div>

                {/* Bullet Points */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {[
                    "Developed responsive web applications using React and TypeScript",
                    "Worked across frontend, backend and database development",
                    "Implemented application features and integrations",
                    "Worked with real-time database functionality",
                    "Focused on application performance and development"
                  ].map((bullet, bIdx) => (
                    <li key={bIdx} style={{ fontSize: '0.8rem', lineHeight: 1.45, color: '#374151', fontWeight: 600, display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                      <span style={{ color: '#FF4B3A', fontWeight: 900, lineHeight: 1 }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Internship 2: Infosys Springboard 6.0 */}
              <motion.div 
                whileHover={{ x: 3 }}
                style={{ position: 'relative', paddingLeft: '1.5rem' }}
              >
                {/* Blue Dot with Glow Pulse */}
                <div 
                  style={{
                    position: 'absolute',
                    left: '0px',
                    top: '5px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#2563EB',
                    border: '2px solid #121212',
                    boxShadow: '0 0 6px rgba(37, 99, 235, 0.6)'
                  }}
                />

                {/* Role & Company with Infosys logo badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.98rem', fontWeight: 900, color: '#121212', lineHeight: 1.2 }}>
                      AI & Machine Learning Intern
                    </h4>
                    <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#2563EB', margin: '0.15rem 0' }}>
                      Infosys Springboard 6.0
                    </div>
                    <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#6B7280' }}>
                      August 2025 – October 2025
                    </div>
                  </div>

                  {/* Infosys Stylized Badge */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    style={{
                      backgroundColor: '#EFF6FF',
                      border: '1.5px solid #2563EB',
                      borderRadius: '4px',
                      padding: '0.2rem 0.45rem',
                      textAlign: 'center',
                      flexShrink: 0,
                      boxShadow: '2px 2px 0 rgba(37, 99, 235, 0.2)'
                    }}
                  >
                    <div style={{ fontSize: '0.8rem' }}>⚡</div>
                    <div style={{ fontSize: '0.52rem', fontWeight: 900, color: '#2563EB', lineHeight: 1 }}>INFOSYS</div>
                  </motion.div>
                </div>

                {/* Bullet Points */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {[
                    "Worked on Artificial Intelligence and Machine Learning",
                    "Built and explored ML models",
                    "Performed data preprocessing",
                    "Worked on AI-driven solutions for real-world applications."
                  ].map((bullet, bIdx) => (
                    <li key={bIdx} style={{ fontSize: '0.8rem', lineHeight: 1.45, color: '#374151', fontWeight: 600, display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                      <span style={{ color: '#2563EB', fontWeight: 900, lineHeight: 1 }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
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
              🎓 EDUCATION →
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
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.02rem', fontWeight: 900, color: '#121212', lineHeight: 1.2 }}>
                B.E in Information Technology
              </h4>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#4B5563', margin: '0.2rem 0' }}>
                Prof. Ram Meghe Institute of Technology and Research (PRMIT&R), Amravati
              </div>
              
              {/* Year & CGPA Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', marginTop: '0.35rem' }}>
                <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#6B7280' }}>
                  2022 – 2026
                </span>
                <span 
                  style={{
                    backgroundColor: '#ECFDF5',
                    color: '#047857',
                    border: '1.5px solid #10B981',
                    borderRadius: '4px',
                    padding: '0.1rem 0.45rem',
                    fontSize: '0.72rem',
                    fontWeight: 900
                  }}
                >
                  8.86 CGPA
                </span>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.84rem', lineHeight: 1.55, color: '#374151', fontWeight: 500 }}>
                Building a rigorous foundation in Computer Science, Artificial Intelligence, Machine Learning & production full-stack engineering.
              </p>

              {/* Graduation Cap Doodle Icon with Gentle Float */}
              <div className="animate-float" style={{ textAlign: 'right', marginTop: '1rem' }}>
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
                🏆 ACHIEVEMENTS →
              </h3>

              {/* Red Star Doodle with Twinkle */}
              <div className="animate-twinkle">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.8 8.2L21.5 8.9L16.4 13.4L17.9 20L12 16.5L6.1 20L7.6 13.4L2.5 8.9L9.2 8.2L12 2Z" stroke="#FF4B3A" strokeWidth="2.2" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* 4 Trophy Badges in a 2x2 Grid */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.85rem'
              }}
            >
              {/* Achievement 1: Winner SRIJAN'26 */}
              <motion.div 
                whileHover={{ scale: 1.06, y: -3 }}
                transition={{ duration: 0.15 }}
                style={{
                  backgroundColor: '#FAF5EB',
                  border: '2px solid #121212',
                  borderRadius: '8px',
                  padding: '0.85rem 0.6rem',
                  textAlign: 'center',
                  boxShadow: '3px 3px 0 #121212',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: '1.6rem', marginBottom: '0.2rem' }}>🏆</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 900, color: '#121212', lineHeight: 1.1 }}>
                  Winner
                </div>
                <div style={{ fontSize: '0.74rem', fontWeight: 900, color: '#2563EB', marginTop: '0.15rem' }}>
                  SRIJAN'26
                </div>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>
                  Hackathon
                </div>
              </motion.div>

              {/* Achievement 2: 2nd Runner Up TechSprint */}
              <motion.div 
                whileHover={{ scale: 1.06, y: -3 }}
                transition={{ duration: 0.15 }}
                style={{
                  backgroundColor: '#FAF5EB',
                  border: '2px solid #121212',
                  borderRadius: '8px',
                  padding: '0.85rem 0.6rem',
                  textAlign: 'center',
                  boxShadow: '3px 3px 0 #121212',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: '1.6rem', marginBottom: '0.2rem' }}>🥈</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#121212', lineHeight: 1.1 }}>
                  2nd Runner Up
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#FF4B3A', marginTop: '0.15rem' }}>
                  TechSprint
                </div>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>
                  Hackathon
                </div>
              </motion.div>

              {/* Achievement 3: Winner INNOVO'25 */}
              <motion.div 
                whileHover={{ scale: 1.06, y: -3 }}
                transition={{ duration: 0.15 }}
                style={{
                  backgroundColor: '#FAF5EB',
                  border: '2px solid #121212',
                  borderRadius: '8px',
                  padding: '0.85rem 0.6rem',
                  textAlign: 'center',
                  boxShadow: '3px 3px 0 #121212',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: '1.6rem', marginBottom: '0.2rem' }}>🏆</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 900, color: '#121212', lineHeight: 1.1 }}>
                  Winner
                </div>
                <div style={{ fontSize: '0.74rem', fontWeight: 900, color: '#10B981', marginTop: '0.15rem' }}>
                  INNOVO'25
                </div>
                <div style={{ fontSize: '0.64rem', fontWeight: 700, color: '#6B7280' }}>
                  Hackathon
                </div>
              </motion.div>

              {/* Achievement 4: Winner Techkruti */}
              <motion.div 
                whileHover={{ scale: 1.06, y: -3 }}
                transition={{ duration: 0.15 }}
                style={{
                  backgroundColor: '#FAF5EB',
                  border: '2px solid #121212',
                  borderRadius: '8px',
                  padding: '0.85rem 0.6rem',
                  textAlign: 'center',
                  boxShadow: '3px 3px 0 #121212',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: '1.6rem', marginBottom: '0.2rem' }}>🏆</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 900, color: '#121212', lineHeight: 1.1 }}>
                  Winner
                </div>
                <div style={{ fontSize: '0.74rem', fontWeight: 900, color: '#8B5CF6', marginTop: '0.15rem' }}>
                  Techkruti
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
