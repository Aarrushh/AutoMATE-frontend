'use client';

import { ShieldCheck, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: 'var(--background)',
        padding: 'var(--space-20) var(--space-6)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
          gap: 'var(--space-16)',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              margin: 0,
            }}
          >
            FREE &middot; LOCAL &middot; PRIVATE
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 4vw + 1rem, 4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--color-text)',
              maxWidth: '14ch',
              margin: 0,
            }}
          >
            Your local AI workflow architect.
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: 'var(--color-text-muted)',
              maxWidth: '55ch',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            AutoMATE runs privately on your computer, finds the workflows worth automating, and connects you to expert freelancers who can build them.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }} className="cta-row">
            <a
              href="#download"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--color-primary)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 600,
                padding: '12px 24px',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                transition: 'background var(--transition-interactive)',
                minHeight: '44px',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-hover)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-primary)')}
            >
              <Download size={16} aria-hidden="true" />
              Download free agent (beta)
            </a>
            <a
              href="#freelancers"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 500,
                padding: '12px 24px',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                border: '1.5px solid var(--color-border)',
                transition: 'border-color var(--transition-interactive), color var(--transition-interactive)',
                minHeight: '44px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.color = 'var(--color-text)';
              }}
            >
              I&apos;m a freelancer <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Reassurance */}
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--color-text-faint)',
              margin: 0,
            }}
          >
            <ShieldCheck size={14} aria-hidden="true" />
            Runs 100% on your device. No data leaves your machine.
          </p>
        </div>

        {/* Right column — Node graph SVG */}
        <div
          className="hero-illustration"
          style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-md)',
            padding: 'var(--space-6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Workflow diagram showing Gmail, Filter, AutoMATE, Notion, and Slack connected in a graph"
        >
          <svg
            viewBox="0 0 480 300"
            width="100%"
            style={{ maxWidth: '480px', height: 'auto' }}
            aria-hidden="true"
            role="img"
          >
            {/* Node styles via inline defs */}
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="var(--color-text-faint)" />
              </marker>
            </defs>

            {/* Connections */}
            <line x1="100" y1="80" x2="205" y2="138" stroke="var(--color-text-faint)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="100" y1="220" x2="205" y2="162" stroke="var(--color-text-faint)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="275" y1="138" x2="380" y2="80" stroke="var(--color-text-faint)" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="275" y1="162" x2="380" y2="220" stroke="var(--color-text-faint)" strokeWidth="1.5" markerEnd="url(#arrow)" />

            {/* Gmail node */}
            <rect x="20" y="56" width="80" height="48" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
            <text x="60" y="75" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--color-text-muted)" fontWeight="500">Gmail</text>
            <text x="60" y="92" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--color-text-faint)">trigger</text>

            {/* Filter node */}
            <rect x="20" y="196" width="80" height="48" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
            <text x="60" y="215" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--color-text-muted)" fontWeight="500">Filter</text>
            <text x="60" y="232" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--color-text-faint)">condition</text>

            {/* AutoMATE center node */}
            <rect x="190" y="118" width="100" height="64" rx="10" fill="var(--color-surface-2)" stroke="#01696F" strokeWidth="2" />
            <text x="240" y="143" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="#01696F" fontWeight="700">AutoMATE</text>
            <text x="240" y="160" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="#01696F">orchestrator</text>

            {/* Notion node */}
            <rect x="380" y="56" width="80" height="48" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
            <text x="420" y="75" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--color-text-muted)" fontWeight="500">Notion</text>
            <text x="420" y="92" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--color-text-faint)">database</text>

            {/* Slack node */}
            <rect x="380" y="196" width="80" height="48" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
            <text x="420" y="215" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="var(--color-text-muted)" fontWeight="500">Slack</text>
            <text x="420" y="232" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--color-text-faint)">notify</text>
          </svg>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-illustration {
            display: none !important;
          }
          .cta-row {
            flex-direction: column !important;
          }
          .cta-row a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
