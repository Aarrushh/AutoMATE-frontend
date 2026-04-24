'use client';

import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-surface-offset)',
        borderTop: '1px solid var(--color-divider)',
        padding: 'var(--space-16) var(--space-6) var(--space-8)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1.5fr',
          gap: 'var(--space-12)',
        }}
        className="footer-grid"
      >
        {/* Left: Logo + Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
            aria-label="AutoMATE home"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path
                d="M10 4L15 7V13L10 16L5 13V7L10 4Z"
                stroke="#01696F"
                strokeWidth="1.5"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M18 12L23 15V21L18 24L13 21V15L18 12Z"
                stroke="#01696F"
                strokeWidth="1.5"
                fill="none"
              />
              <line x1="10" y1="10" x2="18" y2="18" stroke="#01696F" strokeWidth="1.5" />
            </svg>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px' }}>
              <span style={{ color: 'var(--color-text)' }}>AUTO</span>
              <span style={{ color: 'var(--color-primary)' }}>MATE</span>
            </span>
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              maxWidth: '30ch',
            }}
          >
            Your local AI workflow architect. Free. Private. Yours.
          </p>
        </div>

        {/* Center: Nav links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
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
        </div>

        {/* Right: Waitlist input */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--color-text)',
              margin: 0,
            }}
          >
            Join the waitlist
          </p>
          <div style={{ display: 'flex', gap: '8px' }} className="waitlist-form">
            <input
              type="email"
              placeholder="Email address"
              style={{
                flex: 1,
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 14px',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-text)',
                outline: 'none',
                minHeight: '44px',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
            />
            <button
              style={{
                background: 'var(--color-primary)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 600,
                padding: '10px 20px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                cursor: 'pointer',
                transition: 'background var(--transition-interactive)',
                minHeight: '44px',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-hover)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-primary)')}
            >
              Join waitlist
            </button>
          </div>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              color: 'var(--color-text-faint)',
              margin: 0,
            }}
          >
            <ShieldCheck size={12} aria-hidden="true" />
            AutoMATE never uploads your files or workflow data. Ever.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: 'var(--space-12) auto 0',
          paddingTop: 'var(--space-8)',
          borderTop: '1px solid var(--color-divider)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'var(--color-text-faint)',
            margin: 0,
          }}
        >
          &copy; {new Date().getFullYear()} AutoMATE. Built for SMBs, by people who hate bloated software.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-10) !important;
          }
          .waitlist-form {
            flex-direction: column !important;
          }
          .waitlist-form input, .waitlist-form button {
            width: 100% !important;
          }
        }
      `}</style>
    </footer>
  );
}
