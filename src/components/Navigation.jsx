import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'work', 'experience', 'achievements', 'stack', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'work', label: 'WORK', href: '#work' },
    { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
    { id: 'achievements', label: 'ACHIEVEMENTS', href: '#achievements' },
    { id: 'stack', label: 'TECH STACK', href: '#stack' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(237, 228, 211, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '2px solid #121212' : '2px solid transparent',
        transition: 'all 0.2s ease',
        padding: '0.85rem 0'
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        {/* Left: Yellow Label "CREATIVE PORTFOLIO ✻" */}
        <a 
          href="#home"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            backgroundColor: '#FFE500',
            border: '2px solid #121212',
            padding: '0.35rem 0.85rem',
            borderRadius: '4px',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.82rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            boxShadow: '2px 2px 0 #121212',
            flexShrink: 0
          }}
        >
          <span>CREATIVE PORTFOLIO</span>
          <span style={{ fontSize: '1rem', lineHeight: 1 }}>✻</span>
        </a>

        {/* Center: Navigation Links */}
        <nav 
          className="desktop-nav-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                  padding: isActive ? '0.35rem 0.95rem' : '0.35rem 0.6rem',
                  borderRadius: isActive ? 'var(--radius-pill)' : '4px',
                  backgroundColor: isActive ? '#2563EB' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#121212',
                  border: isActive ? '2px solid #121212' : '2px solid transparent',
                  boxShadow: isActive ? '2px 2px 0 #121212' : 'none',
                  transition: 'all 0.15s ease'
                }}
                className={isActive ? '' : 'nav-link-hover'}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: White Availability Badge */}
        <div 
          className="availability-badge-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#FFFFFF',
            border: '2px solid #121212',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-pill)',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            boxShadow: '2px 2px 0 #121212',
            flexShrink: 0
          }}
        >
          <span 
            style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: '#10B981', 
              display: 'inline-block',
              border: '1px solid #065F46'
            }} 
          />
          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-nav-toggle"
          style={{
            display: 'none',
            padding: '0.4rem',
            backgroundColor: '#FFE500',
            border: '2px solid #121212',
            borderRadius: '6px',
            boxShadow: '2px 2px 0 #121212'
          }}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '2.5px solid #121212',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 800,
                padding: '0.4rem 0',
                color: activeSection === item.id ? '#2563EB' : '#121212'
              }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 800 }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }}></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>
        </div>
      )}

      <style>{`
        .nav-link-hover:hover {
          color: #2563EB !important;
          background-color: rgba(255, 229, 0, 0.4) !important;
        }
        @media (max-width: 980px) {
          .desktop-nav-menu, .availability-badge-desktop {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navigation;
