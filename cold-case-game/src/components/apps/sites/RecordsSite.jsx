import { recordsSite } from '../../../data/case.js';

export default function RecordsSite() {
  return (
    <div>
      <div className="records-hero">
        <div className="records-name">{recordsSite.name}</div>
        <div className="records-sub">{recordsSite.subtitle}</div>
      </div>
      <div className="records-body">
        <div className="records-label">Public log</div>
        <h4 className="records-heading">{recordsSite.heading}</h4>
        <p className="records-note">{recordsSite.note}</p>
        <div className="records-table">
          <div className="records-table-head">
            <div>Time</div>
            <div>Subject</div>
            <div>Ref.</div>
            <div>Event</div>
          </div>
          {recordsSite.rows.map((row, i) => (
            <div className={row.hot ? 'records-row hot' : 'records-row'} key={i}>
              <div className="t">{row.t}</div>
              <div className="s">{row.s}</div>
              <div>{row.r}</div>
              <div>{row.e}</div>
            </div>
          ))}
        </div>
        <p className="records-footnote">{recordsSite.footnote}</p>
      </div>
    </div>
  );
}
