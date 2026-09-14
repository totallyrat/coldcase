import { caseInfo } from '../data/case.js';

export default function TopBar({ notice, clock, attemptsLeft, attemptsMax }) {
  const dots = Array.from({ length: attemptsMax }, (_, i) => i < attemptsLeft);
  return (
    <div className="topbar">
      <span className="topbar-terminal">{caseInfo.terminal.split(' · ').slice(-1)[0]}</span>
      <span>{caseInfo.id}</span>
      {notice ? (
        <span className="topbar-notice">
          <span className="topbar-notice-dot" />
          {notice}
        </span>
      ) : null}
      <span className="topbar-spacer" />
      <span>Arrests remaining</span>
      <span className="attempt-dots">
        {dots.map((filled, i) => (
          <span className="attempt-dot" key={i}>
            <span className="attempt-dot-fill" style={{ width: filled ? '100%' : '0%' }} />
          </span>
        ))}
      </span>
      <span className="topbar-clock">{clock}</span>
    </div>
  );
}
