export default function Window({ win, title, variant, onDragStart, onClose, children }) {
  if (!win.o) return null;
  const style = {
    left: win.x,
    top: win.y,
    width: win.w,
    height: win.h,
    zIndex: win.z,
  };
  return (
    <div className="window" style={style}>
      <div className={variant ? `window-frame ${variant}` : 'window-frame'}>
        <div className="window-titlebar" onMouseDown={onDragStart}>
          <span className="window-title">{title}</span>
          <span className="window-titlebar-spacer" />
          <button className="window-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="window-body">{children}</div>
      </div>
    </div>
  );
}
