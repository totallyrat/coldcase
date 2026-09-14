export default function DiskCheckBody({ glitched }) {
  return (
    <div className="disk-body">
      <div>Volume EVIDENCE-04 · verifying</div>
      <div className="disk-bar">
        <span className="disk-bar-fill" style={{ width: '61%' }} />
      </div>
      <div className="disk-line">
        {glitched ? 'Stopped responding. Window cannot be closed.' : '3 of 4 volumes · 6 bad sectors'}
      </div>
    </div>
  );
}
