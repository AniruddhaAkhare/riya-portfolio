import React, { useState } from 'react';
import { motion } from 'framer-motion';

const techGroups = [
  {
    category: "AI / ML & DEEP LEARNING",
    badgeColor: "#FFE500",
    skills: [
      { name: "Python", color: "#FFE500", rotate: "-2deg" },
      { name: "PyTorch", color: "#FF8073", rotate: "1deg" },
      { name: "TensorFlow", color: "#FDBA74", rotate: "-1deg" },
      { name: "Scikit-Learn", color: "#89B9F9", rotate: "2deg" },
      { name: "YOLOv8 & OpenCV", color: "#A7F3D0", rotate: "-2deg" },
      { name: "NumPy & Pandas", color: "#DDD6FE", rotate: "1deg" }
    ]
  },
  {
    category: "GENERATIVE AI, RAG & AGENTS",
    badgeColor: "#89B9F9",
    skills: [
      { name: "LangChain", color: "#FFE500", rotate: "1deg" },
      { name: "LangGraph (Agents)", color: "#89B9F9", rotate: "-2deg" },
      { name: "RAG Pipelines", color: "#FF8073", rotate: "2deg" },
      { name: "ChromaDB / Vector DB", color: "#A7F3D0", rotate: "-1deg" },
      { name: "OpenAI & Gemini APIs", color: "#DDD6FE", rotate: "2deg" },
      { name: "Hugging Face", color: "#FDBA74", rotate: "-2deg" }
    ]
  },
  {
    category: "FULL STACK & BACKEND",
    badgeColor: "#A7F3D0",
    skills: [
      { name: "React 19", color: "#89B9F9", rotate: "-1deg" },
      { name: "TypeScript / JS", color: "#FFE500", rotate: "2deg" },
      { name: "FastAPI", color: "#A7F3D0", rotate: "-2deg" },
      { name: "Node.js & Express", color: "#DDD6FE", rotate: "1deg" },
      { name: "Flask", color: "#FF8073", rotate: "-1deg" },
      { name: "REST APIs & WebSockets", color: "#FDBA74", rotate: "2deg" }
    ]
  },
  {
    category: "DATABASES & DEVOPS",
    badgeColor: "#DDD6FE",
    skills: [
      { name: "PostgreSQL", color: "#89B9F9", rotate: "1deg" },
      { name: "MongoDB", color: "#A7F3D0", rotate: "-2deg" },
      { name: "MySQL", color: "#FFE500", rotate: "2deg" },
      { name: "Docker", color: "#89B9F9", rotate: "-1deg" },
      { name: "Git & GitHub Actions", color: "#FF8073", rotate: "1deg" }
    ]
  }
];

const TechStack = () => {
  return (
    <section 
      id="stack"
      style={{
        padding: '3rem 0 3.5rem 0',
        borderTop: '2px solid rgba(18, 18, 18, 0.12)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: '#FFE500',
              border: '2px solid #121212',
              padding: '0.3rem 0.85rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.78rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              boxShadow: '2px 2px 0 #121212',
              marginBottom: '0.5rem'
            }}
          >
            TECHNICAL TOOLBOX ✦
          </div>

          <h3 
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              lineHeight: 1,
              letterSpacing: '0.02em',
              color: '#121212',
              margin: 0
            }}
          >
            SKILLS & FRAMEWORKS
          </h3>
        </div>

        {/* Tech Categories Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {techGroups.map((group, idx) => (
            <div 
              key={idx}
              className="paper-card"
              style={{
                padding: '1.5rem',
                backgroundColor: '#FAF5EB',
                position: 'relative'
              }}
            >
              {/* Decorative Corner Washi Tape */}
              <div 
                className={idx % 2 === 0 ? "washi-tape-yellow" : "washi-tape-blue"}
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '18px',
                  width: '65px',
                  height: '18px',
                  transform: idx % 2 === 0 ? 'rotate(3deg)' : 'rotate(-2deg)'
                }}
              />

              {/* Category Header Tag */}
              <div 
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem',
                  fontWeight: 900,
                  color: '#121212',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  borderBottom: '1.5px solid #121212',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{group.category}</span>
                <span>✦</span>
              </div>

              {/* Sticker Pills */}
              <div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.55rem'
                }}
              >
                {group.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.08, rotate: 0 }}
                    style={{
                      backgroundColor: skill.color,
                      border: '1.5px solid #121212',
                      boxShadow: '2px 2px 0 #121212',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      color: '#121212',
                      transform: `rotate(${skill.rotate})`,
                      cursor: 'default',
                      userSelect: 'none'
                    }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
