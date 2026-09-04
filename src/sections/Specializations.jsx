import React from 'react';
import { motion } from 'framer-motion';
import { specializations } from '../data/skills';
import { ArrowUpRight } from 'lucide-react';

const Specializations = () => {
  return (
    <section id="expertise" style={{ padding: 'var(--spacing-section) 5vw', position: 'relative' }}>
      <div className="container" style={{ padding: 0 }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem' }}
        >
          MY SPECIALIZATIONS
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {specializations.map((spec, index) => (
            <motion.div 
              key={index}
              className="bento-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
                <span style={{ fontSize: '1rem', color: 'var(--color-muted-text)', fontFamily: 'var(--font-display)' }}>{spec.number}</span>
                <motion.div
                  className="card-arrow"
                  style={{ color: 'var(--color-cherry-red)' }}
                >
                  <ArrowUpRight size={24} />
                </motion.div>
              </div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{spec.title}</h3>
              <p style={{ fontSize: '1rem', flex: 1 }}>{spec.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2rem' }}>
                {spec.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
