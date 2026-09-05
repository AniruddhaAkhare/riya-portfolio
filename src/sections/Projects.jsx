import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from '../components/Icons';
import { ExternalLink, X, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projectList = [
    {
      id: "machinaoracle",
      tab: "✦ PROJECT 01",
      tabColor: "#FFE500",
      title: "machinaoracle",
      description: "AI-powered predictive maintenance with RAG & anomaly detection.",
      detailedDesc: "An industrial AI predictive maintenance pipeline designed to ingest continuous machine telemetry, IoT logs, and vibrational sensors. Leverages RAG over historical failure manuals to provide zero-shot root cause diagnostics and failure prevention.",
      tags: ["Python", "PyTorch", "FastAPI", "RAG", "React"],
      image: "/card_machinaoracle.jpg",
      metrics: "94% Failure Prediction Accuracy",
      live: "https://machina-oracle-eight.vercel.app/",
      github: "https://github.com/Riaa-stack"
    },
    {
      id: "railmind-ai",
      tab: "✦ PROJECT 02",
      tabColor: "#A7F3D0",
      title: "railmind AI",
      description: "Intelligent railway telemetry analytics & automated transit optimization.",
      detailedDesc: "An intelligent railway system leveraging AI and real-time transit telemetry for predictive diagnostics, scheduling optimization, safety monitoring, and rail network efficiency.",
      tags: ["AI/ML", "FastAPI", "Python", "React", "Predictive Analytics"],
      image: "/card_railmind.jpg",
      metrics: "Real-time Rail Diagnostics & Scheduling",
      live: "https://railmind-ai-eta.vercel.app/",
      github: "https://github.com/Riaa-stack"
    },
    {
      id: "teachbot-ai",
      tab: "✦ PROJECT 03",
      tabColor: "#FDA4AF",
      title: "teachbot AI",
      description: "Intelligent educational AI agent & final-year interactive tutoring platform.",
      detailedDesc: "Interactive AI education platform and smart tutor built as a flagship final-year engineering project. Provides intelligent curriculum navigation, real-time code and theory explanations, adaptive quizzes, and student progress telemetry.",
      tags: ["Generative AI", "LLMs", "RAG", "React", "FastAPI"],
      image: "/card_teachbot.jpg",
      metrics: "Adaptive Interactive Tutoring",
      live: "https://riya-final-year-project.vercel.app",
      github: "https://github.com/Riaa-stack"
    },
    {
      id: "travel-planner-agent",
      tab: "✦ PROJECT 04",
      tabColor: "#FDBA74",
      title: "AI Travel planner Agent",
      description: "Autonomous multi-agent itinerary planner synthesizing routes & personalized schedules.",
      detailedDesc: "An autonomous multi-agent travel architecture that coordinates specialized sub-agents for destination discovery, flight and hotel price scouting, itinerary optimization, and personalized dynamic travel recommendations.",
      tags: ["Agentic AI", "LangChain", "Multi-Agent", "Python", "FastAPI"],
      image: "/card_travel_planner.jpg",
      metrics: "Multi-Agent Travel Synthesis",
      live: null,
      github: "https://github.com/Riaa-stack"
    },
    {
      id: "eduarchive-ai",
      tab: "✦ PROJECT 05",
      tabColor: "#DDD6FE",
      title: "Eduarchive AI",
      description: "Smart RAG model for exam preparation based on question paper vault & notes.",
      detailedDesc: "Smart RAG-powered exam preparation assistant that semantic-indexes university question paper vaults, previous years' exams, and comprehensive lecture notes. Generates predictive exam questions, high-yield topic summaries, and automated answer grading.",
      tags: ["Smart RAG", "ChromaDB", "Vector Search", "LLMs", "Python"],
      image: "/card_eduarchive.jpg",
      metrics: "Question Vault Semantic RAG",
      live: null,
      github: "https://github.com/Riaa-stack"
    }
  ];

  return (
    <section 
      id="work"
      style={{
        padding: '2.5rem 0 4rem 0',
        position: 'relative'
      }}
    >
      <div className="container">

        {/* Large Cobalt Blue Container (#2563EB) */}
        <div 
          style={{
            backgroundColor: '#2563EB',
            borderRadius: '16px',
            border: '2.5px solid #121212',
            boxShadow: '7px 7px 0 #121212',
            padding: '2rem 1.75rem 2.5rem 1.75rem',
            position: 'relative'
          }}
        >
          {/* Top Bar inside Blue Container */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2.25rem'
            }}
          >
            {/* Top-Left White Label: "SELECTED WORK ★" */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#121212',
                border: '2px solid #121212',
                padding: '0.4rem 1.1rem',
                borderRadius: '4px',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 900,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                boxShadow: '3px 3px 0 #121212',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              <span>SELECTED WORK</span>
              <span style={{ fontSize: '1rem', color: '#121212' }}>★</span>
            </motion.div>

            {/* Top-Right White Doodle Squiggle with Sway */}
            <motion.div
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <svg width="48" height="32" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 25C15 5 25 35 45 10" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M38 8L46 10L42 18" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>

          {/* Project Cards in Adaptive Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              alignItems: 'stretch'
            }}
            className="selected-work-grid"
          >
            {projectList.map((project) => (
              <div 
                key={project.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {/* Physical Folder Tab at Top with Hover Pop */}
                <motion.div 
                  whileHover={{ y: -3 }}
                  className="folder-tab"
                  style={{
                    backgroundColor: project.tabColor,
                    color: '#121212',
                    alignSelf: 'flex-start',
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveModalProject(project)}
                >
                  {project.tab}
                </motion.div>

                {/* Main Paper Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #121212',
                    borderRadius: '0 10px 10px 10px',
                    boxShadow: '4px 4px 0 #121212',
                    padding: '1.1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div>
                    {/* Project Screenshot Mockup */}
                    <div 
                      onClick={() => setActiveModalProject(project)}
                      style={{
                        width: '100%',
                        height: '145px',
                        borderRadius: '6px',
                        border: '1.5px solid #121212',
                        overflow: 'hidden',
                        marginBottom: '0.85rem',
                        backgroundColor: '#18181B',
                        cursor: 'pointer',
                        position: 'relative'
                      }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        className="project-img-zoom"
                      />

                      {/* Mini metric tag */}
                      <div 
                        style={{
                          position: 'absolute',
                          bottom: '6px',
                          left: '6px',
                          backgroundColor: 'rgba(18, 18, 18, 0.85)',
                          color: '#FFFFFF',
                          fontSize: '0.62rem',
                          fontWeight: 800,
                          padding: '0.2rem 0.5rem',
                          borderRadius: '3px',
                          letterSpacing: '0.02em'
                        }}
                      >
                        ⚡ {project.metrics}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.18rem',
                        fontWeight: 900,
                        color: '#121212',
                        marginBottom: '0.35rem',
                        lineHeight: 1.2
                      }}
                    >
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p 
                      style={{
                        fontSize: '0.82rem',
                        lineHeight: 1.5,
                        color: '#4B5563',
                        marginBottom: '0.85rem',
                        fontWeight: 500
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div 
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.35rem',
                        marginBottom: '1rem'
                      }}
                    >
                      {project.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            padding: '0.2rem 0.5rem',
                            borderRadius: '4px',
                            backgroundColor: '#F3F4F6',
                            border: '1px solid #121212',
                            color: '#121212'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links: LIVE DEMO + REPO */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1.5px solid #E5E7EB',
                      paddingTop: '0.75rem'
                    }}
                  >
                    {project.live ? (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.75rem',
                          fontWeight: 900,
                          color: '#121212',
                          textTransform: 'uppercase'
                        }}
                        className="project-link"
                      >
                        <ExternalLink size={14} />
                        <span>LIVE DEMO</span>
                      </a>
                    ) : (
                      <span 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontSize: '0.68rem',
                          fontWeight: 900,
                          color: '#B45309',
                          backgroundColor: '#FEF3C7',
                          border: '1px solid #FCD34D',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          textTransform: 'uppercase'
                        }}
                      >
                        🚀 COMING SOON
                      </span>
                    )}

                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.75rem',
                        fontWeight: 900,
                        color: '#121212',
                        textTransform: 'uppercase'
                      }}
                      className="project-link"
                    >
                      <GithubIcon size={14} />
                      <span>REPO</span>
                    </a>
                  </div>

                </motion.div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              backgroundColor: 'rgba(18, 18, 18, 0.75)',
              backdropFilter: 'blur(5px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="paper-card"
              style={{
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                backgroundColor: '#FFFFFF',
                padding: '2rem',
                position: 'relative',
                borderRadius: '12px'
              }}
            >
              {/* Top Modal Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <span 
                    style={{ 
                      backgroundColor: activeModalProject.tabColor, 
                      border: '1.5px solid #121212',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 900
                    }}
                  >
                    {activeModalProject.tab}
                  </span>
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: 900, margin: '0.5rem 0 0.2rem 0' }}>
                    {activeModalProject.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#2563EB' }}>
                    ⚡ {activeModalProject.metrics}
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: '#FF4B3A',
                    color: '#FFFFFF',
                    border: '2px solid #121212',
                    fontWeight: 900,
                    boxShadow: '2px 2px 0 #121212',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Screenshot */}
              <img 
                src={activeModalProject.image} 
                alt={activeModalProject.title}
                style={{
                  width: '100%',
                  maxHeight: '260px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                  border: '2px solid #121212',
                  marginBottom: '1.25rem'
                }}
              />

              <p style={{ fontSize: '0.98rem', lineHeight: 1.6, color: '#121212', marginBottom: '1.25rem' }}>
                {activeModalProject.detailedDesc}
              </p>

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {activeModalProject.tags.map((t, idx) => (
                  <span key={idx} style={{ backgroundColor: '#F3F4F6', border: '1.5px solid #121212', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {activeModalProject.live && (
                  <a 
                    href={activeModalProject.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-brutal btn-brutal-blue"
                  >
                    <ExternalLink size={16} /> LIVE DEMO
                  </a>
                )}
                <a 
                  href={activeModalProject.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-brutal btn-brutal-dark"
                >
                  <GithubIcon size={16} /> VIEW REPOSITORY
                </a>
                <button 
                  onClick={() => setActiveModalProject(null)}
                  className="btn-brutal btn-brutal-white"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .project-img-zoom:hover {
          transform: scale(1.06);
        }
        .project-link:hover {
          color: #2563EB !important;
          text-decoration: underline;
        }
        @media (max-width: 1080px) {
          .selected-work-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.75rem !important;
          }
        }
        @media (max-width: 640px) {
          .selected-work-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
