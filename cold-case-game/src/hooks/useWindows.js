import { useCallback, useRef, useState } from 'react';

const INITIAL_WINS = {
  files: { o: true, x: 40, y: 26, w: 706, h: 520, z: 3 },
  iv: { o: false, x: 130, y: 86, w: 700, h: 520, z: 2 },
  web: { o: false, x: 196, y: 44, w: 880, h: 600, z: 4 },
  notes: { o: false, x: 780, y: 330, w: 330, h: 300, z: 1 },
  disk: { o: true, x: 820, y: 60, w: 264, h: 150, z: 6 },
  cop: { o: false, x: 320, y: 130, w: 620, h: 460, z: 5 },
};

export default function useWindows(deskRef) {
  const [wins, setWins] = useState(INITIAL_WINS);
  const topRef = useRef(6);
  const parkedRef = useRef(false);

  const bump = useCallback(() => {
    topRef.current += 1;
    return topRef.current;
  }, []);

  const open = useCallback(
    (id) => {
      const z = bump();
      setWins((s) => ({ ...s, [id]: { ...s[id], o: true, z } }));
    },
    [bump],
  );

  const close = useCallback((id) => {
    setWins((s) => ({ ...s, [id]: { ...s[id], o: false } }));
  }, []);

  const focus = useCallback(
    (id) => {
      setWins((s) => {
        if (s[id].z === topRef.current) return s;
        const z = bump();
        return { ...s, [id]: { ...s[id], z } };
      });
    },
    [bump],
  );

  const startDrag = useCallback(
    (id, e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      focus(id);
      const el = deskRef.current;
      const cw = el ? el.clientWidth : 9999;
      const ch = el ? el.clientHeight : 9999;
      const w0 = wins[id];
      const ox = e.clientX - w0.x;
      const oy = e.clientY - w0.y;
      const move = (ev) => {
        setWins((s) => {
          const cur = s[id];
          return {
            ...s,
            [id]: {
              ...cur,
              x: Math.min(Math.max(0, ev.clientX - ox), Math.max(0, cw - cur.w)),
              y: Math.min(Math.max(0, ev.clientY - oy), Math.max(0, ch - 40)),
            },
          };
        });
      };
      const up = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      };
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    },
    [deskRef, focus, wins],
  );

  const clampAll = useCallback(() => {
    const el = deskRef.current;
    if (!el) return;
    const cw = el.clientWidth;
    const ch = el.clientHeight;
    if (!cw || !ch) return;
    setWins((s) => {
      let next = s;
      if (!parkedRef.current) {
        parkedRef.current = true;
        const d = s.disk;
        next = {
          ...s,
          disk: { ...d, x: Math.max(0, cw - d.w - 18), y: Math.max(0, ch - d.h - 18) },
        };
      }
      const out = {};
      Object.keys(next).forEach((k) => {
        const w0 = next[k];
        const w = Math.min(w0.w, Math.max(240, cw - 24));
        const h = Math.min(w0.h, Math.max(160, ch - 24));
        out[k] = {
          ...w0,
          w,
          h,
          x: Math.min(Math.max(0, w0.x), Math.max(0, cw - w - 12)),
          y: Math.min(Math.max(0, w0.y), Math.max(0, ch - h - 12)),
        };
      });
      return out;
    });
  }, [deskRef]);

  return { wins, open, close, focus, startDrag, clampAll };
}
