import { documents, docSummary, docPath, docLog, docScan, docPoi, suspects } from '../../data/case.js';

function SummaryDoc() {
  return (
    <div>
      <div className="doc-kicker">{docSummary.kicker}</div>
      <h3 className="doc-title">{docSummary.title}</h3>
      <div className="doc-rule" />
      {docSummary.paragraphs.map((p, i) => (
        <p className="doc-p" key={i}>
          {p}
        </p>
      ))}
      <dl className="doc-facts">
        {docSummary.facts.map(([label, value]) => (
          <div className="doc-facts-row" key={label} style={{ display: 'contents' }}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <p className="doc-footnote">{docSummary.closing}</p>
    </div>
  );
}

function PathDoc() {
  return (
    <div>
      <div className="doc-kicker">{docPath.kicker}</div>
      <h3 className="doc-title">{docPath.title}</h3>
      <div className="doc-rule" />
      {docPath.paragraphs.map((p, i) => (
        <p className="doc-p" key={i}>
          {p}
        </p>
      ))}
      <div className="doc-pullquote">
        <p>{docPath.pullQuote}</p>
      </div>
      <p className="doc-footnote">{docPath.footnote}</p>
    </div>
  );
}

function LogDoc() {
  return (
    <div>
      <div className="doc-kicker">{docLog.kicker}</div>
      <h3 className="doc-title">{docLog.title}</h3>
      <div className="doc-rule" />
      <div className="doc-table">
        <div className="doc-table-head">
          <div>Time</div>
          <div>Entry</div>
          <div>Dir.</div>
        </div>
        {docLog.rows.map((row, i) => (
          <div
            className="doc-table-row"
            key={i}
            style={{ color: row.hot ? 'var(--color-accent-500)' : 'var(--color-neutral-200)' }}
          >
            <div className="t">{row.t}</div>
            <div>{row.e}</div>
            <div>{row.d}</div>
          </div>
        ))}
      </div>
      <p className="doc-footnote" style={{ marginTop: 18 }}>
        {docLog.footnote}
      </p>
    </div>
  );
}

const CORRUPT_LINES = [
  { a: '72%', o: 0.9 },
  { a: '34%', o: 0.5 },
  { a: '88%', o: 0.7 },
  { a: '12%', o: 0.35 },
  { a: '56%', o: 0.6 },
];

function ScanDoc() {
  return (
    <div>
      <div className="doc-kicker">{docScan.kicker}</div>
      <h3 className="doc-title">{docScan.title}</h3>
      <div className="doc-rule" />
      <p className="doc-p">{docScan.intro}</p>
      <div className="notebook">
        {docScan.lines.map((line, i) =>
          typeof line === 'string' ? (
            <div key={i}>{line}</div>
          ) : (
            <div className="notebook-credential" key={i}>
              {line.text}
            </div>
          ),
        )}
      </div>
      <div className="corrupt-page">
        <div className="corrupt-heading">Page 3 of 6 — recovery failed</div>
        <div className="corrupt-lines">
          {CORRUPT_LINES.map((c, i) => (
            <div
              className="corrupt-line"
              key={i}
              style={{
                opacity: c.o,
                background: `linear-gradient(90deg, #3a3736 0%, #3a3736 ${c.a}, transparent ${c.a}, transparent 100%)`,
              }}
            />
          ))}
        </div>
        <div className="corrupt-footnote">{docScan.corruptNote}</div>
      </div>
    </div>
  );
}

function PoiDoc() {
  return (
    <div>
      <div className="doc-kicker">{docPoi.kicker}</div>
      <h3 className="doc-title">{docPoi.title}</h3>
      <div className="doc-rule" />
      <div className="suspect-list">
        {suspects.map((s) => (
          <div className="suspect-card" key={s.id}>
            <div className="suspect-head">
              <h4 className="suspect-name">{s.name}</h4>
              <span className="suspect-role">{s.role}</span>
            </div>
            <p className="suspect-note">{s.note}</p>
            <p className="suspect-alibi">
              <span className="suspect-alibi-label">Account of the night &nbsp;</span>
              {s.alibi}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const DOC_VIEWS = {
  summary: SummaryDoc,
  path: PathDoc,
  log: LogDoc,
  scan: ScanDoc,
  poi: PoiDoc,
};

export default function CaseFilesApp({ activeDoc, onSelectDoc }) {
  const ActiveView = DOC_VIEWS[activeDoc];
  return (
    <>
      <div className="files-sidebar">
        {documents.map((d) => (
          <button key={d.id} className="files-doc" onClick={() => onSelectDoc(d.id)}>
            <span
              className="files-doc-mark"
              style={{ background: activeDoc === d.id ? 'var(--color-accent)' : 'var(--color-neutral-800)' }}
            />
            <span>
              <span className="files-doc-name">{d.name}</span>
              <span className="files-doc-kind">{d.kind}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="files-content">
        <ActiveView />
      </div>
    </>
  );
}
