const quotes = [
  '“I spend 3 hours a week manually copying data between tools. I know there’s a fix but I have no idea where to start.”',
  '“Every agency wants a $5k discovery call before telling me what automation I actually need.”',
  '“I’m a freelancer — I waste half my time writing proposals that go nowhere.”',
  '“I trust no cloud tool with my client files. But I don’t have the time to build automations myself.”',
];

export default function SocialProof() {
  return (
    <section
      style={{
        background: 'var(--background)',
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
          Early Feedback
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--color-text)',
            margin: '0 0 var(--space-10)',
          }}
        >
          What early users say.
        </h2>

        {/* Waitlist stat */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', marginBottom: 'var(--space-12)' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '40px',
              fontWeight: 700,
              color: 'var(--color-primary)',
              lineHeight: 1,
            }}
          >
            200+
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-text-muted)',
            }}
          >
            people on the waitlist
          </span>
        </div>

        {/* Quote cards */}
        <div
          className="quotes-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-5)',
            marginBottom: 'var(--space-5)',
          }}
        >
          {quotes.map((q, i) => (
            <blockquote
              key={i}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '20px 24px',
                margin: 0,
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontStyle: 'italic',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
              }}
            >
              {q}
            </blockquote>
          ))}
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            color: 'var(--color-text-faint)',
            margin: 0,
          }}
        >
          Paraphrased from early user interviews, April 2026
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .quotes-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
