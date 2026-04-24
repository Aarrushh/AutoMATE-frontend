export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      label: 'Observe',
      body: 'Point AutoMATE at the folders or tools you use. It reads patterns silently in the background — no data leaves your device.',
      side: 'right',
      illustration: (
        <svg viewBox="0 0 160 120" width="160" height="120" aria-label="Folder scanning illustration">
          <rect x="20" y="30" width="120" height="80" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
          <rect x="20" y="20" width="50" height="20" rx="4" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
          <line x1="20" y1="60" x2="140" y2="60" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
          <rect x="40" y="70" width="30" height="20" rx="3" fill="var(--color-primary)" opacity="0.15" />
          <rect x="85" y="70" width="30" height="20" rx="3" fill="var(--color-primary)" opacity="0.15" />
        </svg>
      ),
    },
    {
      number: '02',
      label: 'Propose',
      body: 'Every week, AutoMATE shows you 3–5 specific automation opportunities, explained in plain English with an estimated time saved.',
      side: 'left',
      illustration: (
        <svg viewBox="0 0 160 120" width="160" height="120" aria-label="Automation proposal card illustration">
          <rect x="10" y="15" width="140" height="90" rx="8" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
          <rect x="22" y="28" width="60" height="8" rx="3" fill="var(--color-primary)" opacity="0.25" />
          <rect x="22" y="42" width="116" height="6" rx="3" fill="var(--color-border)" />
          <rect x="22" y="54" width="90" height="6" rx="3" fill="var(--color-border)" />
          <rect x="22" y="72" width="50" height="22" rx="4" fill="var(--color-primary)" opacity="0.8" />
          <text x="47" y="87" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="white" fontWeight="600">≥ 3h/mo</text>
        </svg>
      ),
    },
    {
      number: '03',
      label: 'Build',
      body: 'Choose to get a ready-to-code blueprint, or connect with a vetted freelancer who’ll build it for you — scoped and priced upfront.',
      side: 'right',
      illustration: (
        <svg viewBox="0 0 160 120" width="160" height="120" aria-label="Build paths illustration">
          <rect x="10" y="40" width="50" height="40" rx="6" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
          <text x="35" y="57" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--color-text-muted)">&lt;/&gt;</text>
          <text x="35" y="70" textAnchor="middle" fontFamily="var(--font-body)" fontSize="7" fill="var(--color-text-faint)">Blueprint</text>
          <rect x="100" y="40" width="50" height="40" rx="6" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="1.5" />
          <text x="125" y="57" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="var(--color-text-muted)">👤</text>
          <text x="125" y="70" textAnchor="middle" fontFamily="var(--font-body)" fontSize="7" fill="var(--color-text-faint)">Freelancer</text>
          <circle cx="80" cy="20" r="10" fill="var(--color-primary)" opacity="0.15" stroke="var(--color-primary)" strokeWidth="1.5" />
          <line x1="80" y1="30" x2="35" y2="40" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.5" />
          <line x1="80" y1="30" x2="125" y2="40" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.5" />
          <circle cx="35" cy="96" r="6" fill="var(--color-primary)" opacity="0.6" />
          <circle cx="125" cy="96" r="6" fill="var(--color-primary)" opacity="0.6" />
        </svg>
      ),
    },
  ];

  return (
    <section
      style={{
        background: 'var(--background)',
        padding: 'var(--space-20) var(--space-6)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--color-text)',
            marginBottom: 'var(--space-16)',
          }}
        >
          How AutoMATE works
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Vertical connector line */}
          <div
            style={{
              position: 'absolute',
              left: '28px',
              top: '40px',
              bottom: '40px',
              width: '1.5px',
              borderLeft: '1.5px dashed var(--color-primary)',
              opacity: 0.3,
            }}
            aria-hidden="true"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className="step-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: step.side === 'right' ? '1fr 1fr' : '1fr 1fr',
                  gap: 'var(--space-10)',
                  alignItems: 'center',
                  direction: step.side === 'left' ? 'rtl' : 'ltr',
                }}
              >
                {/* Text side */}
                <div style={{ direction: 'ltr', display: 'flex', gap: 'var(--space-6)', alignItems: 'flex-start' }}>
                  {/* Step number */}
                  <div style={{ position: 'relative', width: '56px', flexShrink: 0 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '64px',
                        fontWeight: 400,
                        color: 'var(--color-primary)',
                        opacity: 0.2,
                        lineHeight: 1,
                        display: 'block',
                        userSelect: 'none',
                      }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: 'var(--color-text)',
                        margin: '0 0 var(--space-3)',
                      }}
                    >
                      {step.label}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '16px',
                        color: 'var(--color-text-muted)',
                        maxWidth: '48ch',
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>

                {/* Illustration side */}
                <div
                  style={{
                    direction: 'ltr',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'var(--color-surface)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-6)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {step.illustration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-row {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
        }
      `}</style>
    </section>
  );
}
