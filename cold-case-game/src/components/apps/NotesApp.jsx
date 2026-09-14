import { useState } from 'react';

export default function NotesApp({ notes, onNotesChange, pins, onAddPin, onDropPin }) {
  const [draft, setDraft] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && draft.trim()) {
      onAddPin(draft.trim());
      setDraft('');
    }
  };

  return (
    <>
      <div className="notes-input-row">
        <input
          className="notes-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="pin a name, a time, a password — enter"
        />
      </div>
      <div className="notes-pins">
        {pins.map((p, i) => (
          <div className="notes-pin" key={i}>
            <span className="notes-pin-dot" />
            <span className="notes-pin-text">{p.text}</span>
            <button className="notes-pin-drop" onClick={() => onDropPin(i)} aria-label="Remove pin">
              ✕
            </button>
          </div>
        ))}
      </div>
      <textarea
        className="notes-textarea"
        value={notes}
        onChange={(e) => onNotesChange(e.target.value)}
        placeholder="working out"
      />
    </>
  );
}
