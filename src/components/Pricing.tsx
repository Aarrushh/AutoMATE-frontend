import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free Agent',
    audience: 'Individuals & SMBs',
    price: '€0',
    priceLabel: 'forever',
    features: [
      'Local AI agent on your machine',
      '3 automation proposals per month',
      'Plain English explanations',
      'Privacy-first: no data uploaded',
    ],
    cta: 'Download free',
    highlighted: false,
  },
  {
    name: 'Blueprint',
    audience: 'SMBs',
    price: '€9–19',
    priceLabel: 'per blueprint',
    features: [
      'Everything in Free Agent',
      'Full ready-to-code specification',
      'Complete tool + API list',
      'Test criteria included',
    ],
    cta: 'Get a blueprint',
    highlighted: true,
  },
  {
    name: 'Marketplace',
    audience: 'SMBs',
    price: '5–10%',
    priceLabel: 'of job value',
    features: [
      'Everything in Blueprint',
      'Matched to a vetted freelancer',
      'Project management included',
      'Priced upfront, no surprises',
    ],
    cta: 'Find a freelancer',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      style={{
        background: 'var(--color-surface)',
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
          Pricing
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--color-text)',
            margin: '0 0 var(--space-12)',
          }}
        >
          Simple, transparent pricing.
        </h2>

        <div
          className="pricing-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-6)',
            alignItems: 'start',
          }}
        >
          {tiers.map((t, i) => (
            <div
              key={i}
              style={{
                background: 'var(--color-surface-2)',
                border: t.highlighted ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: '32px 28px',
                boxShadow: t.highlighted ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-5)',
              }}
            >
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-faint)', margin: '0 0 var(--space-2)' }}>
                  {t.audience}
                </p>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: 700, color: 'var(--color-text)', margin: 0 }}>
                  {t.name}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '36px', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1 }}>
                  {t.price}
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-muted)' }}>
                  {t.priceLabel}
                </span>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {t.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.5 }}>
                    <Check size={14} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  minHeight: '44px',
                  marginTop: 'auto',
                  ...(t.highlighted
                    ? { background: 'var(--color-primary)', color: '#fff', border: 'none' }
                    : { background: 'transparent', color: 'var(--color-text)', border: '1.5px solid var(--color-border)' }),
                  transition: 'background var(--transition-interactive), border-color var(--transition-interactive)',
                }}
                onMouseEnter={e => {
                  if (t.highlighted) {
                    e.currentTarget.style.background = 'var(--color-primary-hover)';
                  } else {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.color = 'var(--color-primary)';
                  }
                }}
                onMouseLeave={e => {
                  if (t.highlighted) {
                    e.currentTarget.style.background = 'var(--color-primary)';
                  } else {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.color = 'var(--color-text)';
                  }
                }}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
