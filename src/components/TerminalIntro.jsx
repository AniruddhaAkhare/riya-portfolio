import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HACKING_LOGS = [
  { text: '[KERNEL] Booting RiyaOS v4.19-hardened (x86_64-linux-gnu)...', color: '#64748B' },
  { text: '[INIT] Initializing quantum entropy generator /dev/urandom [OK]', color: '#10B981' },
  { text: '[SEC_AUDIT] Injecting RSA-4096 cryptokeys into secure enclave...', color: '#38BDF8' },
  { text: '[NET] Handshaking upstream fiber gateway @ 192.168.1.1:8080...', color: '#64748B' },
  { text: '[SCAN] Port scan: 22(SSH) FILTERED, 443(HTTPS) OPEN, 9090(AI) ACTIVE', color: '#F59E0B' },
  { text: '[BYPASS] Bypassing perimeter firewall ruleset: 0x7FFF9A2C... SUCCESS', color: '#00FF66' },
  { text: '[MEM_ALLOC] Mapping virtual pages 0x00007FFF00000000 - 0x00007FFFFFFFFFFF', color: '#64748B' },
  { text: '[CRYPTO] Running SHA-256 integrity verification on /bin/agent... PASS', color: '#10B981' },
  { text: '[NEURAL] Loading PyTorch weights: MachinaOracle, RailMind, TeachBot...', color: '#A855F7' },
  { text: '[CUDA] 10,240 Tensor Cores allocated. VRAM buffer: 24576 MB reserved', color: '#38BDF8' },
  { text: '[RAG] Embedding pipeline indexed: 14,800 document chunks synced', color: '#10B981' },
  { text: '[AGENT] Initializing autonomous planner agent & reasoning loop...', color: '#EC4899' },
  { text: '[SYSCALL] Hooking ptrace and memory intercept vectors [CLEAN]', color: '#64748B' },
  { text: '[VECTOR_DB] Vector index faiss_ivf_sq8 synchronized in 14.2ms', color: '#38BDF8' },
  { text: '[AUTH] Checking clearance: RIYA UMEKAR [B.E IT 2026]', color: '#FFE500' },
  { text: '[METRICS] CGPA verified: 8.86 | Hackathons won: 4/4 [100% SUCCESS]', color: '#00FF66' },
  { text: '[SYS_CALL] Elevating socket privileges to UID=0 (ROOT)... GRANTED', color: '#00FF66' },
  { text: '[BUFFER] Overriding stack canary protection @ 0xdeadbeef...', color: '#F59E0B' },
  { text: '[CACHE] Warmed up 5 full-stack edge routes across global CDN nodes', color: '#10B981' },
  { text: '[PACKET] 1024 packets injected into payload buffer [0% loss]', color: '#38BDF8' },
  { text: '[STATUS] All 5 AI/ML systems synchronized. Ready for deployment.', color: '#00FF66' },
  { text: '[EXEC] Spawning interactive developer shell...', color: '#FFE500' },
];

const GIT_COMMANDS = [
  { cmd: 'git init', output: 'Initialized empty Git repository in /home/riya/riya-portfolio/.git/' },
  { cmd: 'git add .', output: 'Tracking 5 AI/ML Projects, 4 Hackathon Trophies, Full-Stack Architecture' },
  { cmd: 'git commit -m "feat: ignite Riya\'s portfolio v2.0"', output: '[main (root-commit) 8f3a9e2] 142 files committed, 100% test coverage.' },
  { cmd: './launch_portfolio.sh --env=production', output: '>>> ACCESS GRANTED. WELCOME TO RIYA\'S PORTFOLIO <<<' }
];

export default function TerminalIntro({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [gitPhase, setGitPhase] = useState(0); // 0 = logs, 1..4 = git commands, 5 = welcome banner, 6 = exit
  const [typedCmd, setTypedCmd] = useState('');
  const terminalEndRef = useRef(null);
  const [isSkipped, setIsSkipped] = useState(false);

  // Auto-scroll terminal to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [lines, typedCmd, gitPhase]);

  // Handle ESC key to skip
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        finish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const finish = () => {
    if (isSkipped) return;
    setIsSkipped(true);
    setTimeout(() => {
      onComplete();
    }, 450);
  };

  // Phase 1: Fast Hacking Logs (smooth, readable pacing)
  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < HACKING_LOGS.length) {
        const item = HACKING_LOGS[currentIdx];
        setLines(prev => [...prev, { type: 'log', text: item.text, color: item.color }]);
        currentIdx++;
      } else {
        clearInterval(interval);
        // Start Git sequence after pleasant pause
        setTimeout(() => {
          setGitPhase(1);
        }, 450);
      }
    }, 110); // Smooth readable streaming pace

    return () => clearInterval(interval);
  }, []);

  // Phase 2: Git commands sequence
  useEffect(() => {
    if (gitPhase === 0 || gitPhase > GIT_COMMANDS.length) return;

    const cmdObj = GIT_COMMANDS[gitPhase - 1];
    let charIdx = 0;
    setTypedCmd('');

    // Typing effect for the git command
    const typeInterval = setInterval(() => {
      if (charIdx <= cmdObj.cmd.length) {
        setTypedCmd(cmdObj.cmd.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(typeInterval);
        // Add executed command and output
        setTimeout(() => {
          setLines(prev => [
            ...prev,
            { type: 'cmd', text: `riya@kernel:~/portfolio$ ${cmdObj.cmd}`, color: '#FFE500' },
            { type: 'output', text: cmdObj.output, color: gitPhase === 4 ? '#00FF66' : '#94A3B8' }
          ]);
          setTypedCmd('');

          if (gitPhase < GIT_COMMANDS.length) {
            setTimeout(() => {
              setGitPhase(prev => prev + 1);
            }, 380);
          } else {
            // All Git commands done -> show big banner & finish!
            setGitPhase(5);
            setTimeout(() => {
              finish();
            }, 2200);
          }
        }, 220);
      }
    }, 42);

    return () => clearInterval(typeInterval);
  }, [gitPhase]);

  return (
    <AnimatePresence>
      {!isSkipped && (
        <motion.div
          key="terminal-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.04, 
            filter: 'blur(10px)',
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            backgroundColor: '#070709',
            backgroundImage: `
              radial-gradient(ellipse at 50% 30%, rgba(0, 255, 102, 0.08) 0%, transparent 60%),
              linear-gradient(rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.7) 50%)
            `,
            backgroundSize: '100% 100%, 100% 4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            overflow: 'hidden',
            fontFamily: '"Fira Code", "Courier New", Courier, monospace',
          }}
        >
          {/* Subtle Cyber Grid Lines in Background */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              backgroundImage: 'linear-gradient(to right, rgba(0, 255, 102, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 102, 0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Skip Button in Top-Right */}
          <button
            onClick={finish}
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              zIndex: 10,
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(0, 255, 102, 0.3)',
              borderRadius: '6px',
              padding: '8px 16px',
              color: '#00FF66',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '1px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 0 15px rgba(0, 255, 102, 0.1)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 102, 0.15)';
              e.currentTarget.style.borderColor = '#00FF66';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(0, 255, 102, 0.3)';
            }}
          >
            <span>SKIP INTRO</span>
            <span style={{ opacity: 0.6, fontSize: '10px' }}>[ESC]</span>
            <span>➔</span>
          </button>

          {/* Terminal Container Box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              width: '100%',
              maxWidth: '880px',
              height: '540px',
              maxHeight: '84vh',
              backgroundColor: '#0A0A0F',
              borderRadius: '12px',
              border: '1.5px solid rgba(0, 255, 102, 0.35)',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 255, 102, 0.12)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Terminal Window Header */}
            <div
              style={{
                height: '42px',
                backgroundColor: '#13131B',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                userSelect: 'none',
              }}
            >
              {/* Traffic Light Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }} />
                <span style={{ marginLeft: '12px', color: '#64748B', fontSize: '11px', fontWeight: 600 }}>bash — riya@core:~/portfolio</span>
              </div>

              {/* Status Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00FF66', boxShadow: '0 0 8px #00FF66', animation: 'pulse 1.5s infinite' }} />
                <span style={{ color: '#00FF66', fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px' }}>ONLINE // LIVE</span>
              </div>
            </div>

            {/* Terminal Body Screen */}
            <div
              style={{
                flexGrow: 1,
                padding: '20px 24px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                fontSize: '13px',
                lineHeight: 1.5,
              }}
            >
              {/* Output History */}
              {lines.map((line, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    color: line.color,
                    wordBreak: 'break-word',
                    fontFamily: '"Fira Code", "Courier New", Courier, monospace',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px'
                  }}
                >
                  {line.type === 'cmd' && <span style={{ color: '#38BDF8', fontWeight: 600 }}>❯</span>}
                  {line.type === 'log' && <span style={{ opacity: 0.6, fontSize: '11px' }}>::</span>}
                  <span>{line.text}</span>
                </div>
              ))}

              {/* Active Command Typing Line */}
              {gitPhase >= 1 && gitPhase <= 4 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFE500' }}>
                  <span style={{ color: '#38BDF8', fontWeight: 600 }}>❯</span>
                  <span>riya@kernel:~/portfolio$ {typedCmd}</span>
                  <span 
                    style={{ 
                      display: 'inline-block', 
                      width: '8px', 
                      height: '15px', 
                      backgroundColor: '#00FF66', 
                      marginLeft: '2px',
                      animation: 'blink 0.8s infinite'
                    }} 
                  />
                </div>
              )}

              {/* Welcome Banner when all commands complete */}
              {gitPhase === 5 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    marginTop: '16px',
                    padding: '16px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(0, 255, 102, 0.08)',
                    border: '1.5px solid #00FF66',
                    textAlign: 'center',
                    boxShadow: '0 0 30px rgba(0, 255, 102, 0.15)',
                  }}
                >
                  <pre 
                    style={{ 
                      color: '#00FF66', 
                      fontFamily: 'monospace', 
                      fontSize: '11px', 
                      lineHeight: '1.2', 
                      margin: '0 auto 10px',
                      textShadow: '0 0 10px rgba(0, 255, 102, 0.6)',
                      overflowX: 'auto',
                    }}
                  >
{`██████╗ ██╗██╗   ██╗ █████╗     ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██║╚██╗ ██╔╝██╔══██╗    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║ ╚████╔╝ ███████║    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔══██╗██║  ╚██╔╝  ██╔══██║    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║  ██║██║   ██║   ██║  ██║    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ `}
                  </pre>
                  <div style={{ color: '#FFE500', fontWeight: 800, fontSize: '15px', letterSpacing: '2px' }}>
                    ✦ WELCOME TO RIYA'S PORTFOLIO ✦
                  </div>
                  <div style={{ color: '#E2E8F0', fontSize: '12px', marginTop: '6px', opacity: 0.9 }}>
                    B.E IT 2026 (8.86 CGPA) • AI/ML Engineer & Full Stack Developer • 4x Hackathon Winner
                  </div>
                  <div style={{ color: '#00FF66', fontSize: '12px', marginTop: '8px', fontWeight: 600 }}>
                    Initializing interactive experience...
                  </div>
                </motion.div>
              )}

              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Window Footer */}
            <div
              style={{
                height: '32px',
                backgroundColor: '#0E0E14',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                color: '#64748B',
                fontSize: '11px',
              }}
            >
              <span>SYS_KERNEL: OK</span>
              <span>UTF-8 // LF</span>
              <span style={{ color: '#00FF66' }}>[PRESS ESC TO SKIP]</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
