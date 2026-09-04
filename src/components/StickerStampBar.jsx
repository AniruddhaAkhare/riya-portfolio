import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const stampOptions = [
  { id: 'fire', emoji: '🔥', label: 'FIRE CODE', defaultCount: 142, color: '#FF4B3A' },
  { id: 'ai', emoji: '🧠', label: 'AI GENIUS', defaultCount: 98, color: '#2563EB' },
  { id: 'rocket', emoji: '🚀', label: '10X DEV', defaultCount: 127, color: '#FFE500' },
  { id: 'coffee', emoji: '☕', label: 'MORE COFFEE', defaultCount: 204, color: '#FDBA74' },
  { id: 'love', emoji: '💖', label: 'LOVE IT', defaultCount: 189, color: '#FDA4AF' }
];

const StickerStampBar = () => {
  const [counts, setCounts] = useState(() => {
    const initial = {};
    stampOptions.forEach(s => { initial[s.id] = s.defaultCount; });
    return initial;
  });

  const [floatingParticles, setFloatingParticles] = useState([]);

  const handleStamp = (stamp, e) => {
    setCounts(prev => ({
      ...prev,
      [stamp.id]: prev[stamp.id] + 1
    }));

    // Create a new floating reaction particle
    const rect = e.currentTarget.getBoundingClientRect();
    const newParticle = {
      id: Date.now() + Math.random(),
      emoji: stamp.emoji,
      x: rect.left + rect.width / 2 - 15,
      y: rect.top - 10
    };

    setFloatingParticles(prev => [...prev.slice(-12), newParticle]);

    setTimeout(() => {
      setFloatingParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, 1400);
  };

  return (
    <div 
      style={{
        margin: '2.5rem 0 1rem 0',
        padding: '1.25rem 1.5rem',
        backgroundColor: '#FFFFFF',
        border: '2.5px dashed #121212',
        borderRadius: '12px',
        boxShadow: '5px 5px 0 #121212',
        position: 'relative'
      }}
      className="stamp-reaction-bar"
    >
      {/* Tape on top left */}
      <div 
        className="washi-tape-yellow"
        style={{
          position: 'absolute',
          top: '-12px',
          left: '20px',
          width: '75px',
          height: '22px',
          transform: 'rotate(-3deg)'
        }}
      />

      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div 
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#FFE500',
              border: '2px solid #121212',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              boxShadow: '2px 2px 0 #121212'
            }}
          >
            ✦
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 900, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              LEAVE A STAMP ON RIYA'S SCRAPBOOK!
            </div>
            <div className="font-hand" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#5C5750' }}>
              click an emoji below to stamp your impression 🐾
            </div>
          </div>
        </div>

        {/* Reaction Buttons Row */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            flexWrap: 'wrap'
          }}
        >
          {stampOptions.map((stamp) => (
            <motion.button
              key={stamp.id}
              onClick={(e) => handleStamp(stamp, e)}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9, y: 1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: '#FAF5EB',
                border: '2px solid #121212',
                borderRadius: '8px',
                padding: '0.45rem 0.85rem',
                fontSize: '0.82rem',
                fontWeight: 800,
                boxShadow: '3px 3px 0 #121212',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'background-color 0.15s ease'
              }}
            >
              <span style={{ fontSize: '1.15rem' }}>{stamp.emoji}</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem' }}>{stamp.label}</span>
              <span 
                style={{
                  backgroundColor: '#121212',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '0.1rem 0.45rem',
                  fontSize: '0.68rem',
                  fontWeight: 900,
                  marginLeft: '0.2rem'
                }}
              >
                {counts[stamp.id]}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Floating Reaction Particles Portal-style */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999
        }}
      >
        <AnimatePresence>
          {floatingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 1, scale: 0.5, y: particle.y, x: particle.x }}
              animate={{ 
                opacity: 0, 
                scale: 1.6, 
                y: particle.y - 120, 
                x: particle.x + (Math.random() * 40 - 20),
                rotate: Math.random() * 40 - 20 
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                position: 'absolute',
                fontSize: '2rem',
                userSelect: 'none',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))'
              }}
            >
              {particle.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StickerStampBar;
