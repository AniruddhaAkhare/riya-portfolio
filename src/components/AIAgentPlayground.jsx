import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, RefreshCw, Check } from 'lucide-react';

const promptPresets = [
  {
    id: "models",
    label: "🤖 What AI models do you build?",
    response: "I architect production-grade Agentic Systems & RAG pipelines! My focus is fine-tuning open weights (Llama 3, Qwen 2.5), deploying semantic search with ChromaDB, and orchestrating multi-agent collaboration with LangGraph."
  },
  {
    id: "stack",
    label: "⚡ What is your go-to tech stack?",
    response: "Full Stack AI: Python, PyTorch & FastAPI on the backend; React 19 & TypeScript on frontend; PostgreSQL & Vector DBs for storage; Docker & GitHub Actions for bulletproof deployments."
  },
  {
    id: "achievements",
    label: "🏆 Hackathon wins & highlights?",
    response: "3x Hackathon Champion (Winner at Srijan'26, TechSprint'25, Innovo'25). Maintained 9.13 CGPA at PRMIT&R, and interned at Fireblaze AI School shipping production features!"
  },
  {
    id: "hire",
    label: "💼 Are you open for hire / internship?",
    response: "🟢 YES! Actively looking for AI/ML Engineering, GenAI/RAG, and Full Stack opportunities. Fast learner, team player, and ready to make an immediate impact."
  }
];

const AIAgentPlayground = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(promptPresets[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let currentText = "";
    let i = 0;
    setIsTyping(true);
    setDisplayedText("");

    const interval = setInterval(() => {
      if (i < selectedPrompt.response.length) {
        currentText += selectedPrompt.response[i];
        setDisplayedText(currentText);
        i++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [selectedPrompt]);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedPrompt.response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      style={{
        marginTop: '2.5rem',
        backgroundColor: '#FFFFFF',
        border: '2.5px solid #121212',
        borderRadius: '12px',
        boxShadow: '6px 6px 0 #121212',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 10
      }}
      className="ai-terminal-widget"
    >
      {/* Top Terminal Bar */}
      <div 
        style={{
          backgroundColor: '#121212',
          color: '#FFFFFF',
          padding: '0.6rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2.5px solid #121212'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#FF4B3A', display: 'inline-block', border: '1px solid rgba(0,0,0,0.4)' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#FFE500', display: 'inline-block', border: '1px solid rgba(0,0,0,0.4)' }} />
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', border: '1px solid rgba(0,0,0,0.4)' }} />
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Bot size={14} color="#FFE500" />
            <span>RIYA-AI-AGENT::v2.4 [INTERACTIVE PROMPT]</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="animate-beacon" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#10B981', letterSpacing: '0.05em' }}>LIVE AGENT</span>
        </div>
      </div>

      {/* Preset Question Pills */}
      <div 
        style={{
          padding: '0.85rem 1rem 0.6rem 1rem',
          backgroundColor: '#FAF5EB',
          borderBottom: '1.5px dashed #121212',
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}
        className="prompt-pills-row"
      >
        <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#5C5750', textTransform: 'uppercase', alignSelf: 'center', marginRight: '0.2rem' }}>
          PROMPTS:
        </span>
        {promptPresets.map((preset) => {
          const isActive = selectedPrompt.id === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => setSelectedPrompt(preset)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: isActive ? '#FFE500' : '#FFFFFF',
                color: '#121212',
                border: '1.5px solid #121212',
                borderRadius: '6px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.76rem',
                fontWeight: 800,
                boxShadow: isActive ? '2px 2px 0 #121212' : 'none',
                transform: isActive ? 'translate(-1px, -1px)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {preset.label}
            </button>
          );
        })}
      </div>

      {/* Terminal Body with Animated Output */}
      <div 
        style={{
          padding: '1.15rem 1.25rem',
          backgroundColor: '#FFFFFF',
          minHeight: '100px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ color: '#2563EB', fontWeight: 900, fontSize: '0.85rem' }}>❯ user@riya-portfolio:~$</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 700, color: '#121212' }}>
              query "{selectedPrompt.label.replace(/^[^\s]+ /, '')}"
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '0.5rem' }}>
            <span style={{ color: '#10B981', fontWeight: 900, fontSize: '0.85rem' }}>❯ agent:</span>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                fontWeight: 600,
                lineHeight: 1.5,
                color: '#121212',
                margin: 0
              }}
            >
              {displayedText}
              {isTyping && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '14px',
                    backgroundColor: '#121212',
                    marginLeft: '4px',
                    verticalAlign: 'middle'
                  }}
                />
              )}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '1rem',
            paddingTop: '0.65rem',
            borderTop: '1px solid #E5E7EB',
            fontSize: '0.72rem',
            color: '#6B7280'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={13} color="#FFE500" />
            <span>Generated live by Riya's interactive portfolio agent</span>
          </div>

          <button
            onClick={handleCopy}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              backgroundColor: '#FAF5EB',
              border: '1px solid #121212',
              borderRadius: '4px',
              padding: '0.2rem 0.55rem',
              fontSize: '0.7rem',
              fontWeight: 800,
              color: '#121212',
              cursor: 'pointer'
            }}
          >
            {copied ? <Check size={12} color="#10B981" /> : <RefreshCw size={12} />}
            <span>{copied ? "COPIED!" : "COPY ANSWER"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAgentPlayground;
