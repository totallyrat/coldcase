import { interviews, suspects } from '../../data/case.js';

export default function InterviewsApp({ activeIv, onSelectIv }) {
  const lines = interviews[activeIv] || [];
  return (
    <>
      <div className="iv-tabs">
        {suspects.map((s) => (
          <button
            key={s.id}
            className="iv-tab"
            style={{ borderBottomColor: activeIv === s.id ? 'var(--color-accent)' : 'transparent' }}
            onClick={() => onSelectIv(s.id)}
          >
            {s.name}
            <span className="iv-tab-date">{s.date}</span>
          </button>
        ))}
      </div>
      <div className="iv-body">
        <div className="iv-eyebrow">Transcript · audio not retained</div>
        {lines.map(([who, text], i) => (
          <div className="iv-line" key={i}>
            <div
              className="iv-who"
              style={{ color: who === 'Q' ? 'var(--color-neutral-600)' : 'var(--color-accent-500)' }}
            >
              {who}
            </div>
            <div style={{ color: who === 'Q' ? 'var(--color-neutral-500)' : 'var(--color-neutral-200)' }}>
              {text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
