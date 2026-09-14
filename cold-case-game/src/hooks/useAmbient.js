import { useEffect, useState } from 'react';

// Timings are tuned for a browser session, not a real overnight wait: a file
// appears in MyCloud a little into the session, a message follows later.
const FILE_AT_MS = 45000;
const FILE_NOTICE_CLEAR_MS = 58000;
const MSG_AT_MS = 100000;
const MSG_NOTICE_CLEAR_MS = 113000;

export default function useAmbient(enabled) {
  const [event1, setEvent1] = useState(false);
  const [event2, setEvent2] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (!enabled) return undefined;
    const timers = [
      setTimeout(() => {
        setEvent1(true);
        setNotice('MyCloud — 1 new file');
      }, FILE_AT_MS),
      setTimeout(() => setNotice(''), FILE_NOTICE_CLEAR_MS),
      setTimeout(() => {
        setEvent2(true);
        setNotice('MyCloud — 1 new message');
      }, MSG_AT_MS),
      setTimeout(() => setNotice(''), MSG_NOTICE_CLEAR_MS),
    ];
    return () => timers.forEach(clearTimeout);
  }, [enabled]);

  return { event1, event2, notice };
}
