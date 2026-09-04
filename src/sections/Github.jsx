import React from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, GitCommit, Star, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { profile } from '../data/profile';

const GithubSection = () => {
  return (
    <section 
      id="github"
      style={{
        padding: '4.5rem 0 5rem 0',
        backgroundColor: 'var(--bg-paper-alt)',
        borderTop: 'var(--border-thick)',
        borderBottom: 'var(--border-thick)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          className="paper-card paper-card-yellow"
          style={{
            padding: '2.5rem',
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {/* Washi Tape */}
          <div className="washi-tape washi-tape-blue" />

          {/* Left info */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'var(--bg-paper-pure)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-pill)', border: '2px solid var(--color-ink)', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1rem', boxShadow: '2px 2px 0px var(--color-ink)' }}>
              <GithubIcon size={16} /> OPEN SOURCE & CODE
            </div>

            <h3 
              className="font-display"
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                lineHeight: 1,
                marginBottom: '0.75rem'
              }}
            >
              EXPLORE MY REPOSITORIES
            </h3>

            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--color-ink-soft)', marginBottom: '1.5rem' }}>
              Check out my codebases, experimental AI models, RAG implementations, and agent architectures on GitHub.
            </p>

            <a 
              href={profile.socials.github} 
              target="_blank" 
              rel="noreferrer"
              className="btn-brutal btn-brutal-dark"
            >
              <GithubIcon size={18} /> VISIT GITHUB PROFILE
            </a>
          </div>

          {/* Right Stats Pills */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}
          >
            <div className="paper-card" style={{ padding: '1.25rem', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--color-blue)' }}>
                15+
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-muted)' }}>
                Public Repositories
              </div>
            </div>

            <div className="paper-card" style={{ padding: '1.25rem', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--color-coral)' }}>
                500+
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-muted)' }}>
                Code Commits
              </div>
            </div>

            <div className="paper-card" style={{ padding: '1.25rem', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--color-green)' }}>
                4+
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-muted)' }}>
                AI/ML Hackathon Wins
              </div>
            </div>

            <div className="paper-card" style={{ padding: '1.25rem', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: 'var(--color-purple)' }}>
                100%
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-muted)' }}>
                Open to Collaboration
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GithubSection;
