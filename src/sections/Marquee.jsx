import React from 'react';

const Marquee = ({ 
  text = "AI • MACHINE LEARNING • GENERATIVE AI • RAG PIPELINES • AUTONOMOUS AGENTS • FULL STACK DEV • ", 
  direction = "normal",
  bgColor = "var(--color-yellow)",
  textColor = "var(--color-ink)"
}) => {
  return (
    <div 
      className="marquee-container"
      style={{
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      <div 
        className={`marquee-content ${direction === 'reverse' ? 'marquee-content-reverse' : ''}`}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.6rem',
          fontWeight: 900,
          letterSpacing: '0.06em'
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
