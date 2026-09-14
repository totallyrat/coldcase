import { useCallback, useEffect, useRef, useState } from 'react';
import useWindows from './hooks/useWindows.js';
import useNetwork from './hooks/useNetwork.js';
import useMyCloud from './hooks/useMyCloud.js';
import useAmbient from './hooks/useAmbient.js';
import useClock from './hooks/useClock.js';
import { CULPRIT_ID, caseInfo } from './data/case.js';
import BootScreen from './components/BootScreen.jsx';
import TopBar from './components/TopBar.jsx';
import Dock from './components/Dock.jsx';
import Window from './components/Window.jsx';
import CaseFilesApp from './components/apps/CaseFilesApp.jsx';
import InterviewsApp from './components/apps/InterviewsApp.jsx';
import NetworkApp from './components/apps/NetworkApp.jsx';
import NotesApp from './components/apps/NotesApp.jsx';
import DiskCheckBody from './components/apps/DiskCheckBody.jsx';
import PoliceApp from './components/apps/PoliceApp.jsx';

const ATTEMPTS_MAX = 3;
const CRT_ENABLED = true;
const GLITCHES_ENABLED = true;
const AMBIENT_ENABLED = true;
const STORAGE_KEY = 'coldcase.shell.v1';

export default function App() {
  const deskRef = useRef(null);
  const { wins, open, close, startDrag, clampAll } = useWindows(deskRef);
  const net = useNetwork();
  const mycloud = useMyCloud();
  const ambient = useAmbient(AMBIENT_ENABLED);
  const clock = useClock();

  const [locked, setLocked] = useState(true);
  const [doc, setDoc] = useState('summary');
  const [iv, setIv] = useState('a');
  const [notes, setNotes] = useState('');
  const [pins, setPins] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [pick, setPick] = useState(null);
  const [armed, setArmed] = useState(null);
  const [verdict, setVerdict] = useState(null);
  const [diskCloses, setDiskCloses] = useState(0);

  const reopenTimer = useRef(null);

  // Restore progress.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      if (s.notes) setNotes(s.notes);
      if (Array.isArray(s.pins)) setPins(s.pins);
      if (typeof s.attempts === 'number') setAttempts(s.attempts);
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  // Persist progress.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ notes, pins, attempts }));
    } catch {
      /* storage unavailable */
    }
  }, [notes, pins, attempts]);

  // Clamp windows to the measured desktop on mount and resize.
  useEffect(() => {
    clampAll();
    const onResize = () => clampAll();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [clampAll]);

  useEffect(() => () => clearTimeout(reopenTimer.current), []);

  const onGoSite = useCallback(
    (id) => {
      net.go(id);
      mycloud.clearErr();
    },
    [net, mycloud],
  );

  const onGoHome = useCallback(() => {
    net.goHome();
    mycloud.clearErr();
  }, [net, mycloud]);

  const closeDisk = useCallback(() => {
    const glitchy = GLITCHES_ENABLED && diskCloses < 2;
    close('disk');
    setDiskCloses((c) => c + 1);
    if (glitchy) {
      reopenTimer.current = setTimeout(() => open('disk'), 1700);
    }
  }, [close, open, diskCloses]);

  const arm = useCallback(() => {
    if (pick) setArmed(pick);
  }, [pick]);

  const disarm = useCallback(() => setArmed(null), []);

  const commit = useCallback(() => {
    const id = armed;
    const correct = id === CULPRIT_ID;
    setAttempts((n) => n + 1);
    setArmed(null);
    setPick(null);
    setVerdict({ id, correct });
  }, [armed]);

  const resetCase = useCallback(() => {
    setAttempts(0);
    setVerdict(null);
    setPick(null);
    setArmed(null);
  }, []);

  const attemptsLeft = Math.max(0, ATTEMPTS_MAX - attempts);
  const glitched = diskCloses > 0 && GLITCHES_ENABLED;
  const diskTitle = glitched ? 'Disk check (not responding)' : 'Disk check';

  return (
    <div className="shell">
      <div className="vignette" />
      {CRT_ENABLED && <div className="crt" />}

      {locked && <BootScreen attemptsLabel={`${ATTEMPTS_MAX} of ${ATTEMPTS_MAX}`} onBoot={() => setLocked(false)} />}

      <TopBar notice={ambient.notice} clock={clock} attemptsLeft={attemptsLeft} attemptsMax={ATTEMPTS_MAX} />

      <Dock wins={wins} pinsCount={pins.length} attemptsLeft={attemptsLeft} onOpen={open} />

      <div ref={deskRef} className="desk">
        <div className="desk-location">{caseInfo.location}</div>

        <Window win={wins.files} title="Case Files" onDragStart={(e) => startDrag('files', e)} onClose={() => close('files')}>
          <CaseFilesApp activeDoc={doc} onSelectDoc={setDoc} />
        </Window>

        <Window win={wins.iv} title="Interviews" onDragStart={(e) => startDrag('iv', e)} onClose={() => close('iv')}>
          <InterviewsApp activeIv={iv} onSelectIv={setIv} />
        </Window>

        <Window win={wins.web} title="Network" onDragStart={(e) => startDrag('web', e)} onClose={() => close('web')}>
          <NetworkApp
            net={net}
            onGoHome={onGoHome}
            onGo={onGoSite}
            onUrlChange={net.setUrlInput}
            onSubmit={net.submit}
            mycloud={mycloud}
            ambient={ambient}
          />
        </Window>

        <Window win={wins.notes} title="Notes" onDragStart={(e) => startDrag('notes', e)} onClose={() => close('notes')}>
          <NotesApp
            notes={notes}
            onNotesChange={setNotes}
            pins={pins}
            onAddPin={(text) => setPins((p) => [...p, { text }])}
            onDropPin={(i) => setPins((p) => p.filter((_, j) => j !== i))}
          />
        </Window>

        <Window win={wins.disk} title={diskTitle} variant="disk" onDragStart={(e) => startDrag('disk', e)} onClose={closeDisk}>
          <DiskCheckBody glitched={glitched} />
        </Window>

        <Window win={wins.cop} title="Police — Dispatch" variant="cop" onDragStart={(e) => startDrag('cop', e)} onClose={() => close('cop')}>
          <PoliceApp
            attemptsLeft={attemptsLeft}
            attemptsMax={ATTEMPTS_MAX}
            pick={pick}
            onPick={setPick}
            armed={armed}
            onArm={arm}
            onDisarm={disarm}
            verdict={verdict}
            onCommit={commit}
            onBack={() => setVerdict(null)}
            onReset={resetCase}
          />
        </Window>
      </div>
    </div>
  );
}
