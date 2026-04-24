'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    setIsDark(stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches));

    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setIsDark(!isDark);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--background)',
        borderBottom: '1px solid var(--color-border)',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'box-shadow var(--transition-interactive)',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--space-6)',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          aria-label="AutoMATE home"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <circle cx="8" cy="14" r="6" stroke="#01696F" strokeWidth="2" fill="none" />
            <circle cx="20" cy="14" r="6" stroke="#01696F" strokeWidth="2" fill="none" />
            <line x1="11" y1="14" x2="17" y2="14" stroke="#01696F" strokeWidth="2" />
            <circle cx="8" cy="14" r="2" fill="#01696F" />
            <circle cx="20" cy="14" r="2" fill="#01696F" />
          </svg>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px' }}>
            <span style={{ color: 'var(--color-text)' }}>AUTO</span>
            <span style={{ color: 'var(--color-primary)' }}>MATE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}
          className="hidden-mobile"
        >
          <a
            href="#smbs"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              transition: 'color var(--transition-interactive)',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            For SMBs
          </a>
          <a
            href="#freelancers"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              transition: 'color var(--transition-interactive)',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            For Freelancers
          </a>

          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              color: 'var(--color-text-muted)',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 'var(--radius-sm)',
              minWidth: '44px',
              minHeight: '44px',
              justifyContent: 'center',
            }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#download"
            style={{
              background: 'var(--color-primary)',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 600,
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'background var(--transition-interactive)',
              minHeight: '44px',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-hover)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-primary)')}
          >
            <Download size={14} aria-hidden="true" />
            Download beta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text)',
            display: 'none',
            padding: '6px',
            minWidth: '44px',
            minHeight: '44px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--background)',
            borderTop: '1px solid var(--color-border)',
            padding: 'var(--space-4) var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
          }}
        >
          <a
            href="#smbs"
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text)', textDecoration: 'none', padding: '10px 0', minHeight: '44px', display: 'flex', alignItems: 'center' }}
          >
            For SMBs
          </a>
          <a
            href="#freelancers"
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text)', textDecoration: 'none', padding: '10px 0', minHeight: '44px', display: 'flex', alignItems: 'center' }}
          >
            For Freelancers
          </a>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-2)' }}>
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '14px', minHeight: '44px', padding: '0' }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              {isDark ? 'Light mode' : 'Dark mode'}
            </button>
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              style={{ background: 'var(--color-primary)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, padding: '10px 16px', borderRadius: 'var(--radius-md)', textDecoration: 'none', minHeight: '44px', display: 'flex', alignItems: 'center' }}
            >
              Download beta
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
