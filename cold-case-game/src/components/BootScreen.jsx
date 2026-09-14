import { caseInfo } from '../data/case.js';

export default function BootScreen({ attemptsLabel, onBoot }) {
  return (
    <div className="boot">
      <div className="boot-inner">
        <div className="boot-eyebrow">{caseInfo.terminal}</div>
        <div className="boot-rule" />
        <h1 className="boot-title">{caseInfo.id}</h1>
        <h4 className="boot-sub">{caseInfo.framing}</h4>
        <dl className="boot-facts">
          <dt>File age</dt>
          <dd>{caseInfo.fileAge}</dd>
          <dt>Loaded</dt>
          <dd>Documents, transcripts, network access</dd>
          <dt>Arrests authorised</dt>
          <dd className="accent">{attemptsLabel}</dd>
        </dl>
        <button className="btn-primary" onClick={onBoot}>
          Connect
        </button>
        <div className="boot-footnote">Evidence copy. Nothing you do here leaves this machine.</div>
      </div>
    </div>
  );
}
