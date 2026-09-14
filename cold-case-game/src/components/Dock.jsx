const APPS = [
  { id: 'files', name: 'Case Files', tag: '5' },
  { id: 'iv', name: 'Interviews', tag: '3' },
  { id: 'web', name: 'Network', tag: '' },
];

export default function Dock({ wins, pinsCount, attemptsLeft, onOpen }) {
  const apps = [
    ...APPS,
    { id: 'notes', name: 'Notes', tag: pinsCount ? String(pinsCount) : '' },
    { id: 'cop', name: 'Police', tag: String(attemptsLeft) },
  ];
  return (
    <div className="dock">
      <div className="dock-heading">Applications</div>
      {apps.map((app) => {
        const open = wins[app.id]?.o;
        return (
          <button key={app.id} className="dock-app" onClick={() => onOpen(app.id)}>
            <span
              className="dock-app-mark"
              style={{ background: open ? 'var(--color-accent)' : 'transparent' }}
            />
            <span className="dock-app-name">{app.name}</span>
            <span
              className="dock-app-tag"
              style={{ color: app.id === 'cop' ? 'var(--color-accent-500)' : 'var(--color-neutral-600)' }}
            >
              {app.tag}
            </span>
          </button>
        );
      })}
      <div className="dock-spacer" />
      <div className="dock-footer">
        <div>Read only</div>
        <div>Do not modify</div>
      </div>
    </div>
  );
}
