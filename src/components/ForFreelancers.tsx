import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '5–10%', label: 'platform fee only on completed work' },
  { value: '0%', label: 'fee on your first 3 jobs' },
  { value: 'Blueprint', label: 'spec included on every ticket' },
];

export default function ForFreelancers() {
  return (
    <section
      id="freelancers"
      style={{
        background: 'var(--color-surface-offset)',
        padding: 'var(--space-20) var(--space-6)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
          For Freelancers
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '28px',
            fontWeight: 700,
            color: 'var(--color-text)',
            margin: '0 0 var(--space-4)',
            lineHeight: 1.2,
            maxWidth: '24ch',
          }}
        >
          Get pre-scoped automation jobs. No proposals, no guessing.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: 'var(--color-text-muted)',
            maxWidth: '58ch',
            lineHeight: 1.6,
            margin: '0 0 var(--space-12)',
          }}
        >
          AutoMATE clients come with blueprints — trigger, steps, tools, test criteria, and budget. Just accept and build.
        </p>

        {/* Stats row */}
        <div
          className="stats-row"
          style={{
            display: 'flex',
            gap: 0,
            marginBottom: 'var(--space-10)',
            border: '1px solid var(--color-divider)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            background: 'var(--color-surface)',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: 'var(--space-6) var(--space-8)',
                borderRight: i < stats.length - 1 ? '1px solid var(--color-divider)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-1)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#freelancer-signup"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'transparent',
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            fontWeight: 600,
            padding: '12px 24px',
            borderRadius: 'var(--radius-md)',
            textDecoration: 'none',
            border: '1.5px solid var(--color-primary)',
            transition: 'background var(--transition-interactive)',
            minHeight: '44px',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-highlight)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          Join freelancer beta <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-row {
            flex-direction: column !important;
            border-radius: var(--radius-lg) !important;
          }
          .stats-row > div {
            border-right: none !important;
            border-bottom: 1px solid var(--color-divider) !important;
          }
          .stats-row > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
