import { suspects, verdicts } from '../../data/case.js';

export default function PoliceApp({
  attemptsLeft,
  attemptsMax,
  pick,
  onPick,
  armed,
  onArm,
  onDisarm,
  verdict,
  onCommit,
  onBack,
  onReset,
}) {
  const choosing = !verdict && !armed && attemptsLeft > 0;
  const confirming = !verdict && !!armed;
  const showingVerdict = !!verdict;

  if (choosing) {
    return (
      <div className="cop-body">
        <div className="cop-eyebrow">Request attendance · Case 07-1116</div>
        <h4 className="cop-heading">Name one person. Officers will attend.</h4>
        <p className="cop-sub">
          {attemptsLeft} of {attemptsMax} remaining. A wrong name is on the record and cannot be withdrawn.
        </p>
        <div className="cop-rule" />
        <div className="cop-picks">
          {suspects.map((s) => (
            <button
              key={s.id}
              className={pick === s.id ? 'cop-pick picked' : 'cop-pick'}
              onClick={() => onPick(s.id)}
            >
              <span className="cop-pick-dot" />
              <span style={{ flex: 1 }}>
                <span className="cop-pick-name">{s.name}</span>
                <span className="cop-pick-role">{s.role}</span>
              </span>
            </button>
          ))}
        </div>
        <button
          className="cop-send"
          disabled={!pick}
          style={{ opacity: pick ? 1 : 0.4 }}
          onClick={onArm}
        >
          Send someone in
        </button>
      </div>
    );
  }

  if (confirming) {
    const s = suspects.find((x) => x.id === armed);
    return (
      <div className="cop-body">
        <div className="cop-eyebrow">Confirm</div>
        <h4 className="cop-confirm-title">{s.name}</h4>
        <p className="cop-confirm-body">
          Officers will attend and detain on your say-so. It goes on the file under your name. There is no
          withdrawing it.
        </p>
        <div className="cop-confirm-actions">
          <button className="cop-btn confirm" onClick={onCommit}>
            Confirm
          </button>
          <button className="cop-btn ghost" onClick={onDisarm}>
            Back
          </button>
        </div>
      </div>
    );
  }

  if (showingVerdict) {
    const v = verdicts[verdict.id];
    const correct = verdict.correct;
    const color = correct ? 'var(--color-accent-500)' : 'var(--color-neutral-400)';
    const canContinue = !correct && attemptsLeft > 0;
    const isOver = correct || attemptsLeft <= 0;
    return (
      <div className="cop-body">
        <div className="cop-eyebrow" style={{ color }}>
          {v.kicker}
        </div>
        <h4 className="verdict-name">{v.name}</h4>
        <div className="verdict-rule" style={{ background: color }} />
        <div className="verdict-body">{v.body}</div>
        <div className="verdict-tail">
          {correct
            ? `Case cleared on attempt ${attemptsMax - attemptsLeft} of ${attemptsMax}. File closed.`
            : attemptsLeft > 0
              ? `${attemptsLeft} arrest${attemptsLeft === 1 ? '' : 's'} remaining.`
              : 'No arrests remaining. The file is closed. Again.'}
        </div>
        {canContinue && (
          <button className="cop-btn ghost accent" style={{ marginTop: 22 }} onClick={onBack}>
            Keep working
          </button>
        )}
        {isOver && (
          <button className="cop-btn ghost accent" style={{ marginTop: 22 }} onClick={onReset}>
            Reopen the file
          </button>
        )}
      </div>
    );
  }

  return null;
}
