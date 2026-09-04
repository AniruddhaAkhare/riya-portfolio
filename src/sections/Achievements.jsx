import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import { Trophy, Award, Star, CheckCircle, Sparkles } from 'lucide-react';

const Achievements = () => {
  return (
    <section 
      id="achievements"
      style={{
        padding: '5rem 0 6rem 0',
        backgroundColor: 'var(--bg-paper-pure)',
        borderTop: 'var(--border-thick)',
        borderBottom: 'var(--border-thick)',
        position: 'relative'
      }}
    >
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="stamp-tag" style={{ backgroundColor: 'var(--color-yellow)' }}>
              HONORS & RECOGNITION ✦
            </span>
          </div>

          <h2 
            className="font-display"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              lineHeight: 1,
              letterSpacing: '0.02em',
              margin: '0.2rem 0'
            }}
          >
            HACKATHONS & ACHIEVEMENTS
          </h2>

          <p 
            className="font-hand"
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: 'var(--color-muted)',
              maxWidth: '650px',
              margin: '0.5rem auto 0 auto'
            }}
          >
            Proven track record of competitive building, winning hackathons, and community leadership.
          </p>
        </div>

        {/* Achievements Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              className="paper-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                position: 'relative'
              }}
            >
              {/* Left Trophy Icon Box */}
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: idx === 0 || idx === 2 || idx === 3 ? 'var(--color-yellow)' : 'var(--color-blue-sky)',
                  border: '2px solid var(--color-ink)',
                  boxShadow: '2px 2px 0px var(--color-ink)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Trophy size={22} color="var(--color-ink)" />
              </div>

              {/* Text info */}
              <div>
                <div 
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    color: 'var(--color-coral)',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem'
                  }}
                >
                  {item.title}
                </div>

                <div 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: 'var(--color-ink)'
                  }}
                >
                  {item.organization}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
