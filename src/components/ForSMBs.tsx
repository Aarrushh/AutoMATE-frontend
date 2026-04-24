'use client';

import { Check } from 'lucide-react';

const benefits = [
  'Know exactly what’s worth automating in your current tools',
  'Skip vague consultant calls — get specific proposals',
  'Work with expert freelancers on clear, priced projects',
  'Your files stay on your machine, always',
];

const cardFields = [
  { label: 'Trigger', value: 'New email matching label: invoices' },
  { label: 'Steps', value: 'Gmail → Extract → Notion DB row → Slack notify' },
  { label: 'Tools', value: 'Gmail API, Notion API, Slack webhook' },
  { label: 'Est. build', value: '4–6 hours freelancer work' },
  { label: 'Time saved', value: '~3 hours/month' },
];

export default function ForSMBs() {
  return (
    <section
      id="smbs"
      style={{
        background: 'var(--color-surface)',
        padding: 'var(--space-20) var(--space-6)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-16)',
          alignItems: 'start',
        }}
        className="smbs-grid"
      >
        {/* Left column */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              margin: '0 0 var(--space-3)',
            }}
          >
            FOR SMBS & TEAMS
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '28px',
              fontWeight: 700,
              color: 'var(--color-text)',
              margin: '0 0 var(--space-8)',
              lineHeight: 1.2,
              textAlign: 'left',
            }}
          >
            Know exactly what’s worth automating.
          </h2>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {benefits.map((b, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-3)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'var(--color-text)',
                  lineHeight: 1.5,
                }}
              >
                <Check
                  size={16}
                  style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }}
                  aria-hidden="true"
                />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — Proposal card */}
        <div
          style={{
            background: 'var(--color-surface-2)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            padding: '24px',
          }}
          className="proposal-card"
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-text-faint)',
              margin: '0 0 var(--space-2)',
            }}
          >
            AUTOMATION PROPOSAL #3
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--color-text)',
              margin: '0 0 var(--space-5)',
              lineHeight: 1.4,
            }}
          >
            Auto-sort inbound Gmail invoices to Notion database
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
            {cardFields.map((f, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 'var(--space-3)' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-faint)' }}>
                  {f.label}
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text)' }}>
                  {f.value}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-3)', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)' }}>
            <button
              style={{
                background: 'var(--color-primary)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 600,
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                cursor: 'pointer',
                minHeight: '44px',
              }}
            >
              Get blueprint
            </button>
            <button
              style={{
                background: 'transparent',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 500,
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--color-border)',
                cursor: 'pointer',
                minHeight: '44px',
              }}
            >
              Find freelancer
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .smbs-grid {
            grid-template-columns: 1fr !important;
          }
          .proposal-card {
            margin-top: var(--space-8);
          }
        }
      `}</style>
    </section>
  );
}
