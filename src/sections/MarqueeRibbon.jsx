import React from 'react';

const MarqueeRibbon = ({ 
  text = "AI/ML ENGINEER ✻ GENERATIVE AI & RAG ✻ AGENTIC SYSTEMS ✻ FULL STACK DEVELOPER ✻ PYTHON & PYTORCH ✻ ",
  bgColor = "#FFE500",
  textColor = "#121212",
  reverse = false
}) => {
  return (
    <div 
      className="marquee-ribbon"
      style={{
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      <div 
        className={reverse ? "marquee-track-reverse" : "marquee-track"}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.45rem',
          fontWeight: 900,
          letterSpacing: '0.05em'
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

export default MarqueeRibbon;
