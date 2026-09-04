import React from 'react';

const Footer = () => {
  return (
    <footer 
      style={{ 
        backgroundColor: '#121212', 
        color: '#FFFFFF', 
        padding: '1.25rem 0',
        borderTop: '2.5px solid #121212'
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.78rem',
          fontWeight: 800,
          letterSpacing: '0.04em',
          textTransform: 'uppercase'
        }}
      >
        {/* Left: Green Status Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          <span 
            style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: '#10B981', 
              display: 'inline-block',
              boxShadow: '0 0 8px #10B981'
            }} 
          />
          <span style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
            AVAILABLE FOR EXCITING OPPORTUNITIES & COLLABORATIONS
          </span>
        </div>

        {/* Center: Built with Passion */}
        <div style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
          BUILT WITH PASSION, CODE & COFFEE ☕
        </div>

        {/* Right: Blue Collaborate Button + Smiley */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <a 
            href="#contact"
            style={{
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
              border: '1.5px solid #FFFFFF',
              padding: '0.4rem 0.95rem',
              borderRadius: '4px',
              fontWeight: 900,
              fontSize: '0.76rem',
              letterSpacing: '0.04em',
              transition: 'all 0.15s ease'
            }}
            className="footer-collab-btn"
          >
            LET'S COLLABORATE →
          </a>

          {/* Small Circular Smiley */}
          <div 
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              border: '1.5px solid rgba(255, 255, 255, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              color: '#FFE500',
              lineHeight: 1
            }}
          >
            ☺
          </div>
        </div>

      </div>

      <style>{`
        .footer-collab-btn:hover {
          background-color: #FFE500 !important;
          color: #121212 !important;
          border-color: #121212 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
