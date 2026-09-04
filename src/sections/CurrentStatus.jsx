import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const CurrentStatus = () => {
  const statusItems = [
    { label: 'EDUCATION', value: profile.education },
    { label: 'FOCUS', value: profile.focus },
    { label: 'WORKING ON', value: profile.workingOn },
    { label: 'LEARNING', value: profile.learning },
    { label: 'OPEN TO', value: profile.openTo },
    { label: 'LOCATION', value: profile.location }
  ];

  return (
    <section id="now" style={{ padding: 'var(--spacing-section) 5vw', position: 'relative' }}>
      <div className="container" style={{ padding: 0 }}>
        <span className="section-label"><span>06</span> / NOW</span>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {statusItems.map((item, idx) => (
            <motion.div 
              key={idx}
              className="bento-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ justifyContent: 'center' }}
            >
              <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--color-muted-text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-cherry-red)' }}></div>
                {item.label}
              </h4>
              <p style={{ fontSize: '1.2rem', margin: 0, color: 'var(--color-warm-off-white)' }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentStatus;
