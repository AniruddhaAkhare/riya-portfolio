import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Trophy, Award, Users, Terminal, Sparkles, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

const treasureStops = [
  {
    id: "gdg",
    step: "WAYPOINT 01",
    label: "GDG on Campus PRMIT&R",
    role: "Domain Executive — Web Development",
    icon: "/gdg_logo.png",
    isImg: true,
    tag: "COMMUNITY & LEADERSHIP",
    tagColor: "#2563EB",
    bgParchment: "#FFFBEB",
    mapCoords: { x: "24%", y: "42%" },
    description: "Serving as Domain Executive for Web Development at Google Developer Groups (GDG) on Campus PRMIT&R. Steering core tech initiatives, architecting community web solutions, and spearheading developer sprints.",
    highlights: [
      "Mentoring 200+ students across web development fundamentals",
      "Organizing developer meetups, hack sessions & GDG tech days",
      "Collaborating on open-source community software architectures"
    ]
  },
  {
    id: "workshops",
    step: "WAYPOINT 02",
    label: "Hands-on Coding Workshops",
    role: "Workshop Speaker & Technical Mentor",
    emoji: "🛠️",
    isImg: false,
    tag: "KNOWLEDGE SHARING & MENTORSHIP",
    tagColor: "#10B981",
    bgParchment: "#ECFDF5",
    mapCoords: { x: "55%", y: "48%" },
    description: "Conducted and led multiple practical, hands-on coding workshops empowering peers and juniors with industry-ready skills across modern software engineering stacks.",
    highlights: [
      "Conducted in-depth hands-on workshops on MERN Stack & Full Stack Dev",
      "Delivered interactive sessions on AI/ML foundations & Python tooling",
      "Hands-on demonstrations on Prompt Engineering & Generative AI workflows"
    ]
  },
  {
    id: "salesforce",
    step: "WAYPOINT 03",
    label: "Salesforce LastMile Program",
    role: "Salesforce AI Agent Developer",
    emoji: "🏅",
    isImg: false,
    tag: "AI AGENTIC SYSTEMS",
    tagColor: "#FF4B3A",
    bgParchment: "#FEF2F2",
    mapCoords: { x: "42%", y: "82%" },
    description: "Selected and trained under the prestigious Salesforce LastMile Program, mastering enterprise Agentic AI architectures, autonomous business agents, and multi-agent reasoning graphs.",
    highlights: [
      "Built and orchestrated autonomous Salesforce AI Agents",
      "Integrated reasoning workflows with external enterprise systems",
      "Deep-dived into agentic evaluation, safety rails & real-time executions"
    ]
  },
  {
    id: "hackathons",
    step: "THE GRAND TREASURE",
    label: "Hackathon Victories & Podiums",
    role: "4x Hackathon Champion 🏆",
    emoji: "💎",
    isImg: false,
    tag: "COMPETITIVE INNOVATION",
    tagColor: "#F59E0B",
    bgParchment: "#FFFBEB",
    mapCoords: { x: "78%", y: "76%" },
    description: "¡Aquí está tu tesoro! The ultimate destination on the map — consistently innovating, building under intense 24-48h hackathon pressure, and bagging 4 podium titles.",
    highlights: [
      "🏆 Winner — SRIJAN'26 Hackathon",
      "🥈 2nd Runner Up — TechSprint Hackathon",
      "🏆 Winner — INNOVO'25 Hackathon",
      "🏆 Winner — Techkruti Hackathon"
    ]
  }
];

const ExtraCurricularMap = () => {
  const [activeStop, setActiveStop] = useState(treasureStops[0]);

  return (
    <div 
      id="extra-curricular"
      style={{
        margin: '3rem 0 1.5rem 0',
        backgroundColor: '#FAF5EB',
        border: '3px solid #121212',
        borderRadius: '16px',
        boxShadow: '8px 8px 0 #121212',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="treasure-map-section"
    >
      {/* Vintage Deckle / Parchment Header Ribbon */}
      <div 
        style={{
          backgroundColor: '#2D1B0D',
          color: '#FFE500',
          padding: '1rem 1.5rem',
          borderBottom: '3px solid #121212',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          position: 'relative'
        }}
      >
        {/* Left: Vintage Seal + Heading */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#FFE500',
              border: '2.5px solid #121212',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.3rem',
              boxShadow: '2px 2px 0 #000000',
              flexShrink: 0
            }}
          >
            🧭
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span 
                style={{
                  backgroundColor: '#FF4B3A',
                  color: '#FFFFFF',
                  fontSize: '0.66rem',
                  fontWeight: 900,
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                MAPA DEL TESORO
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.75rem', fontWeight: 800 }}>
                MISIÓN #1
              </span>
            </div>
            <h3 
              className="font-heading"
              style={{
                fontSize: 'clamp(1.1rem, 2.4vw, 1.45rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                color: '#FAF5EB',
                margin: '0.2rem 0 0 0',
                textTransform: 'uppercase'
              }}
            >
              EXTRA CURRICULAR FEATS & ADVENTURE MAP 🗺️
            </h3>
          </div>
        </div>

        {/* Right: Exploration Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div 
            style={{
              backgroundColor: '#3E2714',
              border: '1.5px solid #FFE500',
              padding: '0.35rem 0.85rem',
              borderRadius: '20px',
              fontSize: '0.74rem',
              fontWeight: 800,
              color: '#FFE500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <Sparkles size={13} color="#FFE500" />
            <span>CLICK CHECKPOINTS TO EXPLORE</span>
          </div>
        </div>
      </div>

      {/* Main Content Area: Split View with Interactive Treasure Map & Parchment Clue Scroll */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: '1.75rem',
          padding: '1.75rem',
          alignItems: 'stretch'
        }}
        className="treasure-grid"
      >
        {/* Left: Authentic Treasure Map Parchment with Interactive Waypoint Overlay */}
        <div 
          style={{
            position: 'relative',
            borderRadius: '12px',
            border: '2.5px solid #121212',
            boxShadow: '5px 5px 0 #121212',
            overflow: 'hidden',
            backgroundColor: '#EAD7B7',
            minHeight: '380px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
          className="parchment-canvas-box"
        >
          {/* Authentic Treasure Map Image as Map Canvas */}
          <img 
            src="/treasure_map.png" 
            alt="Treasure Map of Extra Curricular Feats"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'sepia(0.12) contrast(1.04)'
            }}
          />

          {/* Interactive Overlay Landmark Waypoints on the Map Trail */}
          {treasureStops.map((stop) => {
            const isSelected = activeStop.id === stop.id;
            return (
              <motion.button
                key={stop.id}
                onClick={() => setActiveStop(stop)}
                whileHover={{ scale: 1.22 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  position: 'absolute',
                  left: stop.mapCoords.x,
                  top: stop.mapCoords.y,
                  transform: 'translate(-50%, -50%)',
                  width: isSelected ? '46px' : '38px',
                  height: isSelected ? '46px' : '38px',
                  borderRadius: '50%',
                  backgroundColor: isSelected ? '#FFE500' : '#FFFFFF',
                  border: isSelected ? '3px solid #121212' : '2px solid #121212',
                  boxShadow: isSelected ? '0 0 0 4px #FF4B3A, 4px 4px 0 #121212' : '3px 3px 0 #121212',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: isSelected ? 25 : 15,
                  transition: 'all 0.2s ease',
                  padding: 0
                }}
                title={`Click to view: ${stop.label}`}
              >
                {stop.isImg ? (
                  <img 
                    src={stop.icon} 
                    alt={stop.label} 
                    style={{ width: '26px', height: '14px', objectFit: 'contain' }}
                  />
                ) : (
                  <span style={{ fontSize: isSelected ? '1.3rem' : '1.1rem', lineHeight: 1 }}>
                    {stop.emoji}
                  </span>
                )}

                {/* Pulsing Beacon Ring for Selected Waypoint */}
                {isSelected && (
                  <span 
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      left: '-6px',
                      right: '-6px',
                      bottom: '-6px',
                      borderRadius: '50%',
                      border: '2px solid #FF4B3A',
                      animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                      pointerEvents: 'none'
                    }} 
                  />
                )}
              </motion.button>
            );
          })}

          {/* Quick Select Waypoint Pills at Bottom of Map */}
          <div 
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              right: '10px',
              backgroundColor: 'rgba(30, 20, 10, 0.88)',
              backdropFilter: 'blur(4px)',
              padding: '0.45rem 0.65rem',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              gap: '0.35rem',
              zIndex: 20
            }}
          >
            {treasureStops.map((stop) => {
              const isSelected = activeStop.id === stop.id;
              return (
                <button
                  key={stop.id}
                  onClick={() => setActiveStop(stop)}
                  style={{
                    backgroundColor: isSelected ? '#FFE500' : 'transparent',
                    color: isSelected ? '#121212' : '#FAF5EB',
                    border: isSelected ? '1.5px solid #121212' : '1.5px solid transparent',
                    borderRadius: '4px',
                    padding: '0.2rem 0.55rem',
                    fontSize: '0.68rem',
                    fontWeight: 900,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{stop.emoji || "✦"}</span>
                  <span>{stop.step.replace("WAYPOINT ", "W")}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Vintage Clue Scroll / Waypoint Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStop.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            style={{
              backgroundColor: activeStop.bgParchment,
              border: '2.5px solid #121212',
              borderRadius: '12px',
              padding: '1.65rem 1.6rem',
              boxShadow: '6px 6px 0 #121212',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="parchment-scroll-card"
          >
            {/* Top Washi Tape */}
            <div 
              className="washi-tape-yellow"
              style={{
                position: 'absolute',
                top: '-12px',
                left: '25px',
                width: '80px',
                height: '22px',
                transform: 'rotate(-2deg)'
              }}
            />

            <div>
              {/* Waypoint Step & Category Pill */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.76rem',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    color: activeStop.tagColor,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <MapPin size={14} color={activeStop.tagColor} />
                  {activeStop.step}
                </span>

                <span 
                  style={{
                    backgroundColor: '#121212',
                    color: '#FFE500',
                    fontSize: '0.64rem',
                    fontWeight: 900,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    letterSpacing: '0.05em'
                  }}
                >
                  {activeStop.tag}
                </span>
              </div>

              {/* Title & Organization Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1rem' }}>
                {activeStop.isImg ? (
                  <div 
                    style={{
                      width: '68px',
                      height: '42px',
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #121212',
                      borderRadius: '6px',
                      boxShadow: '3px 3px 0 #121212',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px',
                      flexShrink: 0
                    }}
                  >
                    <img 
                      src={activeStop.icon} 
                      alt={activeStop.label}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                ) : (
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #121212',
                      borderRadius: '8px',
                      boxShadow: '3px 3px 0 #121212',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}
                  >
                    {activeStop.emoji}
                  </div>
                )}

                <div>
                  <h4 
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: '#121212',
                      lineHeight: 1.15,
                      margin: 0
                    }}
                  >
                    {activeStop.label}
                  </h4>
                  <div 
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      color: activeStop.tagColor,
                      marginTop: '0.2rem'
                    }}
                  >
                    {activeStop.role}
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <p 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  color: '#374151',
                  marginBottom: '1rem',
                  fontWeight: 500
                }}
              >
                {activeStop.description}
              </p>

              {/* Key Expedition Feats */}
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #121212',
                  borderRadius: '8px',
                  padding: '0.85rem 1rem',
                  boxShadow: '3px 3px 0 #121212'
                }}
              >
                <div 
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#6B7280',
                    marginBottom: '0.45rem'
                  }}
                >
                  QUEST MILESTONES & CONTRIBUTIONS:
                </div>
                <ul 
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem'
                  }}
                >
                  {activeStop.highlights.map((h, i) => (
                    <li 
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#1F2937',
                        lineHeight: 1.35
                      }}
                    >
                      <span style={{ color: activeStop.tagColor, fontWeight: 900, fontSize: '0.9rem', lineHeight: 1 }}>
                        ✦
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Next Stop Hint */}
            <div 
              style={{
                marginTop: '1.25rem',
                paddingTop: '0.75rem',
                borderTop: '1.5px dashed #121212',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.74rem',
                fontWeight: 800,
                color: '#4B5563'
              }}
            >
              <span>🧭 Follow the dashed trail</span>
              <button
                onClick={() => {
                  const currIdx = treasureStops.findIndex(s => s.id === activeStop.id);
                  const nextIdx = (currIdx + 1) % treasureStops.length;
                  setActiveStop(treasureStops[nextIdx]);
                }}
                style={{
                  backgroundColor: '#FFE500',
                  color: '#121212',
                  border: '1.5px solid #121212',
                  borderRadius: '4px',
                  padding: '0.25rem 0.65rem',
                  fontWeight: 900,
                  fontSize: '0.7rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  cursor: 'pointer',
                  boxShadow: '2px 2px 0 #121212'
                }}
              >
                <span>NEXT CLUE</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
        @media (max-width: 900px) {
          .treasure-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ExtraCurricularMap;
